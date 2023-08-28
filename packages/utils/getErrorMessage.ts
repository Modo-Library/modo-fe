type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return typeof error === 'object' && 'message' in error!;
}

export default function getErrorMessage(error: unknown) {
  if (isErrorWithMessage(error)) return error.message;
  return String(error);
}
