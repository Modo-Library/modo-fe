module.exports = {
  extends: ['eslint-config-preset', 'eslint-config-next', 'next/core-web-vitals'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['auth', './micro_services/auth/src'],
          ['books', './micro_services/books/src'],
          ['host', './micro_services/host/src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'app'],
  },
};
