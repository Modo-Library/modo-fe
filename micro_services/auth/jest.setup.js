import '@testing-library/jest-dom';
import { server } from './src/mock/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});

afterAll(() => {
  server.close();
});
