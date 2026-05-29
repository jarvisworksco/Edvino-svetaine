import { z } from "zod";

export const kontaktoSchema = z.object({
  vardas: z.string().min(2, "Įveskite vardą ir pavardę"),
  email: z.string().email("Neteisingas el. pašto formatas"),
  telefonas: z
    .string()
    .regex(
      /^\+?370\d{8}$|^8\d{8}$/,
      "Neteisingas telefono numeris (pvz., +37061234567 arba 861234567)"
    ),
  imone: z.string().optional(),
  paslauga: z.string().optional(),
  zinute: z.string().min(10, "Žinutė per trumpa — parašykite bent 10 simbolių"),
  website: z.string().optional(),
});

export type KontaktoForma = z.infer<typeof kontaktoSchema>;
