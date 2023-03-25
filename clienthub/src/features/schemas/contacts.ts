import { customerReturn } from "./customers";
import { z } from "zod";

export const contactCreate = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const contactReturn = contactCreate.extend({
  id: z.string(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  customer: customerReturn.omit({ contacts: true }),
});

export const contactUpdate = contactCreate.partial();
