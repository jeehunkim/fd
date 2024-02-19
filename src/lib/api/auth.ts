import { postData, deleteData } from '@/utils/axiosInstance';
import { signUpType } from '@/types/signup';
import { signInType } from '@/types/signin';

export const signupAPI = (body: signUpType) => {
  return postData('/v1/account/signup', body);
};

export const signinApi = (body: signInType) => {
  const apiUrl = `/v1/account/signin`;
  return postData(apiUrl, body);
};

export const removeApi = (body: number, token: string) => {
  const apiUrl = `/v1/account/user/${body}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return deleteData(apiUrl, config);
};
