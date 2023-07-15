// Only used by Jest
module.exports = {
  presets: [
    '@babel/preset-config',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    () => ({
      visitor: {
        MetaProperty(path) {
          path.replaceWithSourceString('process');
        },
      },
    }),
  ],
};
