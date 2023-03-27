import z from "zod";
import * as schemas from "./../schemas";

export type IContactRequest = z.infer<typeof schemas.contactCreate>;

export type IContactUpdate = z.infer<typeof schemas.contactUpdate>;
