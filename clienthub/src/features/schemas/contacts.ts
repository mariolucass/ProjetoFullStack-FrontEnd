import { z } from "zod";
import { customerReturn } from "./customers";

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

export const contactReturn = contactCreate.extend({
  id: z.string(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  customerId: z.string().optional(),
  customer: customerReturn.omit({ contacts: true, customerId: true }),
});
