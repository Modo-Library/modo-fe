// Only used by Jest

module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@emotion',
    () => ({
      visitor: {
        MetaProperty(path) {
          path.replaceWithSourceString('process');
        },
      },
    }),
  ],
};
