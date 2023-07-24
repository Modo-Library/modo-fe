module.exports = {
  extends: ['eslint-config-preset'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['host', './micro_services/host/src'],
          ['auth', './micro_services/auth/src'],
          ['books', './micro_services/books/src'],
          ['state/auth', './micro_services/auth/src/utils/recoil'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
