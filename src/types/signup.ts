import { AccountRoles } from './accountRole';

export interface signUpType {
  email: string;
  name: string;
  nickname: string;
  password: string;
  pushreceive: boolean;
  emailreceive: boolean;
  usertype: AccountRoles;
}
