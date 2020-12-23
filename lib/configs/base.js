module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ]
};
