interface ErrorLog {
  [key: string]: string;
}

export const errorLog: ErrorLog = {
  'TypeError: Failed to fetch dynamically imported module': '모듈 로딩 실패',
  'CORS policy': 'CORS 에러',
  'moduleMap[module] is not a function': '잘못된 모듈 경로',
};

export const toastErrorLog: ErrorLog = {
  login_error: '로그인에 실패했습니다',
};

export default errorLog;
