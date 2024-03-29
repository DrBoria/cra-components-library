module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    '@sanv/eslint-config-unicorn-typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'babel-module': {},
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React features
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,

    // Declarations
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-underscore-dangle': 'error',
    'no-var': 'error',
    'prefer-const': ['error'],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkProperties: true,
        ignore: [/Props/],
        allowList: {
          props: true,
        },
      },
    ],

    // Spaces & Delimeters
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'no-tabs': 'error',
    'key-spacing': ['error', { align: 'value' }],

    // Imports
    'import/prefer-default-export': 0,
    'import/no-unresolved': ['error'],
    'import/named': 0, // Cause of styled-components theme declaration in baseTheme.ts
    'unicorn/prefer-export-from': 0, // Conflict with types export

    // Other
    eqeqeq: ['error', 'smart'],
    'no-eval': 'error',
    'no-unsafe-finally': 'error',
    complexity: ['error', 6],
    'unicorn/no-new-array': 0,
    'no-plusplus': 0,
  },
};
