import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';

import APIErrorCapture from '@packages/utils/error/APIErrorCapture';

import { getCookie } from './cookies';
import reIssueToken from './reIssueToken';

interface AxiosCustomRequestConfig extends AxiosRequestConfig {
  retryCount: number;
}

// Axios 기본 세팅
const MAX_RETRY_COUNT = 1;

const Axios = axios.create({
  baseURL: `${process.env.NODE_ENV === 'test' ? '' : `${process.env.VITE_SERVER_URL}/api/`}`,
  withCredentials: true,
  timeout: 2000,
});

// Interceptor로 응답/요청 공통 핸들링
Axios.interceptors.request.use(
  (request) => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');

    if (!refreshToken && window.location.pathname !== '/login') {
      window.location.href = `${process.env.VITE_HOST_URL}/account/login`;
      console.warn('[Message] No Token');
    }

    accessToken && (request.headers.Token = accessToken);
    request.headers['Content-Type'] = 'application/json';

    return request;
  },
  (error) => {
    APIErrorCapture(error, 'axios interceptor', 'debug', 'API Request Interceptor Error');
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

      console.info(`[INFO] accessToken : ${accessToken}`);
      console.info(`[INFO] refreshToken : ${refreshToken}`);
    }

    const config = error.config as AxiosCustomRequestConfig;
    config.retryCount = config.retryCount ?? 0;
    console.warn(`[Message] RETRY COUNT : ${config.retryCount}`);

    if (config.retryCount < MAX_RETRY_COUNT) {
      config.retryCount += 1;
      return Axios.request(config);
    }

    APIErrorCapture(error, 'axios interceptor', 'debug', 'API Response Interceptor Error');
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
  get: (URL) =>
    Axios.get(URL)
      .then((res) => res.data)
      .catch((err) => {
        APIErrorCapture(err, 'get', 'debug');
      }),
  post: (URL, BODY?) =>
    Axios.post(URL, BODY)
      .then((res) => res.data)
      .catch((err) => {
        APIErrorCapture(err, 'post', 'debug');
      }),
};

export default request;
