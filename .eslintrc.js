module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jquery: true
  },
  globals: {},
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    semi: ['error', 'always'],
    camelcase: 'off'
  }
};
