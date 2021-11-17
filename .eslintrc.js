module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    '@sanv/eslint-config-unicorn-typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts', 'spec.ts', 'spec.tsx'],
      },
      'babel-module': {},
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', 'spec.ts', 'spec.tsx', 'd.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', 'spec.ts', 'spec.tsx', 'd.ts'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    'spaced-comment': 0,
    'no-tabs': 'error',
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    indent: 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
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
    camelcase: 'error',
    eqeqeq: ['error', 'smart'],
    'no-eval': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unsafe-finally': 'error',
    'space-before-function-paren': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-loop-func': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-var': 'error',
    complexity: ['error', 6],
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variableLike', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'variable', modifiers: ['destructured'], format: ['camelCase'] },
      { selector: 'variable', modifiers: ['global'], format: ['camelCase', 'PascalCase'] },
      { selector: 'variable', modifiers: ['global'], types: ['function'], format: ['PascalCase'] },
      { selector: 'function', modifiers: ['global'], format: ['PascalCase'] },
      { selector: 'typeLike', prefix: ['T'], format: ['PascalCase'] },
    ],
    'prefer-const': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 0,
    'import/no-unresolved': ['error'],
    'import/no-extraneous-dependencies': ['error'],
    'import/named': 0, // Cause of styled-components theme declaration in baseTheme.ts
    // Unicorn
    'unicorn/prefer-export-from': 0, // Conflict with types export
    'unicorn/no-new-array': 0,
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
  },
};