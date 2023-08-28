export default class GlobalBoundaryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GlobalBoundaryError';
  }
}
