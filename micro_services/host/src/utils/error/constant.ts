interface ErrorLog {
  [key: string]: string;
}

export const errorLog: ErrorLog = {
  'TypeError: Failed to fetch dynamically imported module': '모듈 로딩 실패',
};

export default errorLog;
