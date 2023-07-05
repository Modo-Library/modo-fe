module.exports = {
  extends: ['eslint-config-preset'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['src', './microServices/Auth/src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
