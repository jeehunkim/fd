import { getData } from '@/utils/axiosInstance';
import { uploadVideo } from '@/types/uploadVideo';

export const getVideoInfo = async () => {
  return await getData(`/v1/bo/video`);
};
