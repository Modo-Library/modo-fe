module.exports = {
  extends: ['eslint-config-preset'],
  version: "latest",
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['src', './micro_services/auth/src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
