module.exports = {
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  plugins: ["jest", "@babel"],
  env: {
    "jest/globals": true,
  },
};