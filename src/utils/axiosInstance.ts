import axios, { Axios, AxiosRequestConfig } from 'axios';
import APIResponse, { APIResponseUpload } from '@/types/commonResponse';
import { CustomError_Class } from '@/components/Error/CustomError';

const client: Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: GET 메서드
export const getData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  try {
    const response = await client.get<APIResponse<T>>(url, config);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof CustomError_Class) {
      console.error(error.response?.data);
    }
    return Promise.reject(error);
  }
};

//TODO: POST 메서드
export const postData = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  try {
    const response = await client.post(url, data, config);
    return response.data;
  } catch (error: any) {
    if (error?.response?.data) {
      return error?.response?.data;
    }
    return Promise.reject(error);
  }
};

//TODO: PUT 메서드
export const putData = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  try {
    const response = await client.put<APIResponse<T>>(url, data, config);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof CustomError_Class) {
      console.error(error.response?.data);
    }
    return Promise.reject(error);
  }
};

//TODO: Delete 메서드
export const deleteData = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  try {
    const response = await client.delete<APIResponse<T>>(url, config);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof CustomError_Class) {
      console.error(error.response?.data);
    }
    return Promise.reject(error);
  }
};

export const postDataWithAll = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<APIResponseUpload<T>> => {
  console.log(data);

  try {
    return await client.post(url, data, config);
  } catch (error: any) {
    if (error?.response?.data) {
      return error?.response?.data;
    }
    return Promise.reject(error);
  }
};
