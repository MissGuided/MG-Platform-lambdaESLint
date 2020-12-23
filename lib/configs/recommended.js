module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/style',
  ]
};
