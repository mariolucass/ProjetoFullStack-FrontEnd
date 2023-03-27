import { z } from "zod";

export const customerCreate = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  phone: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const customerUpdate = z
  .object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string(),
  })
  .partial()
  .strip();
