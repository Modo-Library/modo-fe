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
    '^@packages/(.*)$': '<rootDir>/$1',
    '^host/(.*)$': '<rootDir>/../micro_services/host/$1',
    '^auth/(.*)$': '<rootDir>/../micro_services/auth/$1',
    '^books/(.*)$': '<rootDir>/../micro_services/books/$1',
    '\\.(css|less|svg)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  transformIgnorePatterns: ['<rootDir>/../.next/', '<rootDir>/../node_modules/'],
};
