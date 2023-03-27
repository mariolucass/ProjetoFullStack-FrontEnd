import z from "zod";
import * as schemas from "./../schemas";

export type ICustomerLogin = z.infer<typeof schemas.schemaLogin>;

export type ICustomerRegister = z.infer<typeof schemas.schemaRegister>;
