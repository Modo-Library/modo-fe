/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['jsx', 'js', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.ts?(x)$': [
      'ts-jest',
      {
        babelConfig: true,
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
    '^.+\\.js?(x)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|svg)$': 'identity-obj-proxy',
    '^@packages/(.*)$': '<rootDir>/../../packages/$1',
    '^host/(.*)$': '<rootDir>/../../micro_services/host/src/$1',
    '^auth/(.*)$': '<rootDir>/../../micro_services/auth/src/$1',
    '^books/(.*)$': '<rootDir>/../../micro_services/books/src/$1',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  transformIgnorePatterns: [
    '<rootDir>/../../.next/',
    '<rootDir>/../../node_modules/',
    '<rootDir>/node_modules',
  ],
  // TODO : test시 import 충돌 해결해야 함
  // setupFilesAfterEnv: ['./jest.setup.js'],
};
