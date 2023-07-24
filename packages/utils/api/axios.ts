import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';

import { getCookie } from './cookies';

interface AxiosCustomRequestConfig extends AxiosRequestConfig {
  retryCount: number;
}

// 쿠키 확인 및 Axios 기본 세팅
const accessToken = getCookie('accessToken');
const refreshToken = getCookie('refreshToken');
const MAX_RETRY_COUNT = 1;

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  withCredentials: true,
  timeout: 2000,
});

// Interceptor로 응답/요청 공통 핸들링
Axios.interceptors.request.use(
  (request) => {
    if (!refreshToken && window.location.pathname !== '/login') {
      window.location.href = `${import.meta.env.VITE_HOST_URL}/account/login`;
      console.warn('[Message] No Token');
    }

    return request;
  },
  (error) => {
    console.error('Request Interceptor Error');
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // JWTtoken needs refresh
    if (error.response.status === 401) {
      // TODO : JWT 토큰 재발급 후 재요청
      // request(error.config)
      // error.config.headers.authorization = `Bearer ${accessToken}`
      window.location.reload();
    }

    const config = error.config as AxiosCustomRequestConfig;
    config.retryCount = config.retryCount ?? 0;
    console.warn('[Message] RETRY COUNT :', config.retryCount);

    if (config.retryCount < MAX_RETRY_COUNT) {
      config.retryCount += 1;
      return Axios.request(config);
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
