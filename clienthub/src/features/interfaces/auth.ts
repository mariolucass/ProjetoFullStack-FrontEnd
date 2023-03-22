export interface IRegister {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
