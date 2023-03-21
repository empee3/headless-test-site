/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'react'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // Put whatever version you want here
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  env: {
    browser: true,
  },
};
