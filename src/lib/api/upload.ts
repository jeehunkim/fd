import { postDataWithAll, postData } from '@/utils/axiosInstance';
import _ from 'lodash';

export const upload = async (body: any, userid?: any) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      userid,
    },
  };
  const URL = `${process.env.NEXT_PUBLIC_API_File_SERVER_URL}/oss`;

  // console.log(URL);

  return await postDataWithAll(URL, body, config);
};
