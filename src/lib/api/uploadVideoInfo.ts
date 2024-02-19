import { postDataWithAll, postData } from '@/utils/axiosInstance';
import { uploadVideo } from '@/types/uploadVideo';

export const uploadVideoInfo = async (body: uploadVideo) => {
  return await postDataWithAll(`/v1/bo/video`, body);
};
