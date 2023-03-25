import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const schemaRegister = schemaLogin.extend({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});
