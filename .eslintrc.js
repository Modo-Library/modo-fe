module.exports = {
  extends: ['eslint-config-preset'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['src', './src'],
          ['auth', './microServices/Auth/src'],
          ['books', './microServices/Books/src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
