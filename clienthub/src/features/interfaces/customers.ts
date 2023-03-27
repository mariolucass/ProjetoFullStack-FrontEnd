import z from "zod";
import * as schemas from "./../schemas";

export type ICustomerReturn = z.infer<typeof schemas.customerReturn>;

export type ICustomerUpdate = z.infer<typeof schemas.customerUpdate>;
