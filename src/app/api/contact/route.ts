import { NextRequest, NextResponse } from "next/server";
import { kontaktoSchema } from "@/lib/validators";
import { siteData } from "@/lib/site-data";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }

  if (entry.count >= 5) return false;

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { klaida: "Per daug užklausų. Bandykite vėliau." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ klaida: "Netinkami duomenys." }, { status: 400 });
  }

  const parseResult = kontaktoSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { klaida: "Patikrinkite formą ir bandykite dar kartą." },
      { status: 422 }
    );
  }

  const { vardas, email, telefonas, imone, paslauga, zinute, website } =
    parseResult.data;

  // Honeypot
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const htmlTurinys = `
    <h2>Nauja užklausa iš ${siteData.domenas}</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><th style="text-align:left;padding:8px;border:1px solid #eee">Laukas</th><th style="text-align:left;padding:8px;border:1px solid #eee">Reikšmė</th></tr>
      <tr><td style="padding:8px;border:1px solid #eee">Vardas ir pavardė</td><td style="padding:8px;border:1px solid #eee">${vardas}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee">El. paštas</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #eee">Telefonas</td><td style="padding:8px;border:1px solid #eee">${telefonas}</td></tr>
      ${imone ? `<tr><td style="padding:8px;border:1px solid #eee">Įmonė</td><td style="padding:8px;border:1px solid #eee">${imone}</td></tr>` : ""}
      ${paslauga ? `<tr><td style="padding:8px;border:1px solid #eee">Paslauga</td><td style="padding:8px;border:1px solid #eee">${paslauga}</td></tr>` : ""}
      <tr><td style="padding:8px;border:1px solid #eee">Žinutė</td><td style="padding:8px;border:1px solid #eee">${zinute.replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const gavejasEmail = process.env.CONTACT_EMAIL ?? siteData.kontaktai.elPastas;

  if (apiKey && apiKey !== "re_xxxxxxxxxx") {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: `${siteData.verslosPavadinimas} <noreply@${siteData.domenas}>`,
        to: gavejasEmail,
        replyTo: email,
        subject: `Nauja užklausa iš ${siteData.domenas}${paslauga ? ` — ${paslauga}` : ""}`,
        html: htmlTurinys,
      });
    } catch {
      return NextResponse.json(
        { klaida: "Klaida siunčiant el. laišką. Bandykite vėliau." },
        { status: 500 }
      );
    }
  } else {
    // Kūrimo aplinkoje — tik loginti
    console.log("[contact] Nauja užklausa:", { vardas, email, telefonas, paslauga });
    console.log("[contact] HTML:", htmlTurinys);
  }

  return NextResponse.json({ ok: true });
}
