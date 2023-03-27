import { z } from "zod";

export const contactInCustomer = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  })
  .array();

export const customerCreate = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  phone: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const customerUpdate = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    password: z.string(),
  })
  .partial()
  .strip();

export const customerReturn = customerCreate.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isActive: z.boolean(),
  contacts: contactInCustomer.optional(),
});
