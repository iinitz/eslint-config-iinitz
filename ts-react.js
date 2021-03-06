module.exports = {
  extends: [
    'airbnb/hooks',
    'iinitz/ts-base',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'function-paren-newline': 'off',
    'lines-between-class-members': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
