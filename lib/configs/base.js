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
  ],
  rules: {
    'import/prefer-default-export': "off",
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [
          './', // Default project package.json file.
          './node_modules/@missguided/mg-lambda-framework', // Inherit all dependencies from mg-lambda-framework.
        ]
      }
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': `allow-with-description`
      }
    ]
  }
};
