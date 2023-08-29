import * as Sentry from '@sentry/react';

import getErrorMessage from '@packages/utils/getErrorMessage';
import NetworkError from '@packages/utils/error/NetworkError';

export const APIErrorCapture = (
  err: any,
  tag: string,
  level: Sentry.SeverityLevel,
  message?: string,
) => {
  const { method, url, params, headers } = err.config;
  const { data, status } = err.response;

  Sentry.setContext('API Request Detail', {
    method,
    url,
    params,
    data,
    headers,
  });

  Sentry.setContext('API Response Detail', {
    status,
    data,
  });

  Sentry.withScope((scope) => {
    scope.setTag('type', 'api');
    scope.setTag('api', tag);
    scope.setLevel(level);

    scope.setFingerprint([method, status, url]);

    Sentry.captureException(new NetworkError(message ?? getErrorMessage(err)));
  });
};

export default APIErrorCapture;
