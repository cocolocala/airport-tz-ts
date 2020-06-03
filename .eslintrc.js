module.exports = {
  root: true,
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": "./tsconfig.eslint.json",
    "sourceType": "module",
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "legacyDecorators": true,
    },
  },
  "plugins": [
    'prettier',
    '@typescript-eslint',
  ],
  "rules": {
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": 0,
  },
}
