module.exports = {
  moduleFileExtensions: ['ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@packages/(.*)$': '<rootDir>/packages/$1',
    '^host/(.*)$': '<rootDir>/micro_services/host/$1',
    '^auth/(.*)$': '<rootDir>/micro_services/auth/$1',
    '^books/(.*)$': '<rootDir>/micro_services/books/$1',
    '\\.(css|scss|svg)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jset-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*.test.ts?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    'ts-jest': {
      useESM: true,
      babelConfig: true,
    },
  },
};
