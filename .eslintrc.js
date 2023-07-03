module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    jest: true,
  },
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
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off', // import React from 'react' 무시
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      // import 정렬 및 구분
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '**/*/assets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/*/pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'auth/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'books/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**/index.tsx',
            group: 'internal',
          },
          {
            pattern: './**/style.tsx',
            group: 'unknown',
          },
          {
            pattern: './**/*.css',
            group: 'unknown',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'off',

    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
