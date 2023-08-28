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
    '^@packages/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  transformIgnorePatterns: ['<rootDir>/../.next/', '<rootDir>/../node_modules/'],
};
