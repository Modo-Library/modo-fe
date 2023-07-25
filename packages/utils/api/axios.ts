import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';

import { getCookie } from './cookies';
import reIssueToken from './reIssueToken';

interface AxiosCustomRequestConfig extends AxiosRequestConfig {
  retryCount: number;
}

// Axios 기본 세팅
const MAX_RETRY_COUNT = 1;

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
  withCredentials: true,
  timeout: 2000,
});
// Interceptor로 응답/요청 공통 핸들링
Axios.interceptors.request.use(
  (request) => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    if (!refreshToken && window.location.pathname !== '/login') {
      window.location.href = `${import.meta.env.VITE_HOST_URL}/account/login`;
      console.warn('[Message] No Token');
    }
    accessToken && (request.headers.Token = accessToken);
    request.headers['Content-Type'] = 'application/json';

    return request;
  },
  (error) => {
    console.error('Request Interceptor Error');
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // JWTtoken needs refresh
    if (error.response.status === 401) {
      const refreshToken = getCookie('refreshToken');
      refreshToken && (await reIssueToken(refreshToken));
      const accessToken = getCookie('accessToken');
      error.config.headers.Token = accessToken;
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
