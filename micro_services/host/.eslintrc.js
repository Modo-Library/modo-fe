module.exports = {
  extends: ['eslint-config-preset', 'plugin:react/recommended'],
  version: "latest",
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['src', './micro_services/host/src'],
          ['auth', './micro_services/auth/src'],
          ['books', './micro_services/books/src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
