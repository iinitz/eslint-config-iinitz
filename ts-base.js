module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
  rules: {
    '@typescript-eslint/semi': [
      2,
      'never',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', 'external', 'internal', 'parent', 'sibling', 'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        warnOnUnassignedImports: true,
      },
    ],
    'no-unsafe-optional-chaining': [
      'error',
      {
        disallowArithmeticOperators: true,
      },
    ],
  },
}
