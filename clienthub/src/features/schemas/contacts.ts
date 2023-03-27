import { z } from "zod";

export const contactCreate = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  phone: z.string().nonempty(),
});

export const contactUpdate = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  })
  .partial()
  .strip();
