module.exports = {
  env: {
    browser: true,
    node: true,
    worker: true,
    es2020: true,
    jquery: true,
  },
  globals: {},
  parser: "espree",
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "semi": ["error", "always"],
    "camelcase": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
