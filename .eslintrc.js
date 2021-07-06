module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    window: true,
    document: true,
    jest: true,
  },
  rules: {
    'no-plusplus': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-underscore-dangle': 0,
    'no-nested-ternary': 1,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
    allowTernary: 0,
    'no-multi-assign': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'class-methods-use-this': 0,
    'default-case': 0,
    'func-names': [1, 'always', { generators: 'as-needed' }],
    'prefer-const': 0,
    'max-lines': ['error', 200],

    'import/no-unresolved': 0,
    'import/no-default-export': 2,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'no-extra-boolean-cast': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'comma-dangle': 0,
    'no-console': 0,
  },
};