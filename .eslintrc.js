
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    /* only if using TypeScript. If so, run 'yarn add @typescript-eslint/eslint-plugin' */
    '@typescript-eslint',
  ],
  parserOptions: {
    // will be used most of the time as I typically work in module-based frameworks
    sourceType: 'module',
    ecmaFeatures: {
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}

