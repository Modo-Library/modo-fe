import axios, { AxiosResponse, AxiosError, Method } from 'axios';

import { getCookie } from './cookies';

// 쿠키 확인 및 Axios 기본 세팅
const accessToken = getCookie('accessToken');
// TODO : refresh 토큰 사용 필요
// const refreshToken = getCookie('refreshToken');

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  timeout: 2000,
});

// Response 받기 전 Interceptor로 응답 핸들링
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // JWTtoken needs refresh
    if (error.response.status === 401) {
      // TODO : JWT 토큰 재발급 필요
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

// Axios Custom
type RequestElementType = <Response = AxiosResponse | AxiosError, Request = any>(
  url: string,
  body?: Request,
) => Promise<Response>;
type RequestType = { [key in Method]: RequestElementType };
type PickRequestType = 'get' | 'post';

export const request: Pick<RequestType, PickRequestType> = {
  get: (url) =>
    Axios.get(url)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      }),
  post: (url, body?) =>
    Axios.post(url, body)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      }),
};

export default request;
