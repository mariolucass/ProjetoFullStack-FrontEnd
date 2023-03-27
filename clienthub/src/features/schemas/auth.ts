import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
});

export const schemaRegister = schemaLogin.extend({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  phone: z.string().nonempty(),
  password: z.string().nonempty(),
  confirmPassword: z.string().nonempty(),
});
