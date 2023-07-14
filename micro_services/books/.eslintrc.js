module.exports = {
  extends: ['eslint-config-preset'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['books', './micro_services/books/src']],
      },
    },
  },
};
