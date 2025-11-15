module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    '@typescript-eslint/no-require-imports': 'off',
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    'react-native/react-native': true,
  },
};
