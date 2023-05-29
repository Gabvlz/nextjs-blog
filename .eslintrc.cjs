/* eslint-env node */
module.exports = {
  extends: [ 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended' ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // Indentation
    'indent': [ 'error', 2 ], // Use 2 spaces for indentation
    'no-tabs': 'error', // Disallow tabs

    // Semicolons
    'semi': [ 'error', 'always' ], // Require semicolons at the end of statements
    'semi-spacing': 'error', // Enforce consistent spacing after semicolons
    'semi-style': 'error', // Enforce semicolon style (always at the end)

    // Quotes
    'quotes': [ 'error', 'single' ], // Use single quotes for strings

    // Trailing Commas
    'comma-dangle': [ 'error', 'always-multiline' ], // Require trailing commas in multiline objects and arrays

    // Linebreak Style
    'linebreak-style': [ 'error', 'unix' ], // Use Unix linebreak style

    // Function Parentheses
    'func-call-spacing': 'error', // Enforce spacing between function identifiers and their invocations
    'space-before-function-paren': [ 'error', 'never' ], // Disallow space before function parentheses

    // Object/Array/Function Braces
    'object-curly-spacing': [ 'error', 'always' ], // Enforce spacing inside object literals
    'array-bracket-spacing': [ 'error', 'always' ], // Enforce spacing inside array brackets
    'block-spacing': 'error', // Enforce spacing inside block statements and control statements
    'space-before-blocks': 'error', // Require space before block statements

    // Other Stylistic Rules
    'comma-spacing': 'error', // Enforce spacing around commas
    'key-spacing': 'error', // Enforce spacing around object literal keys
    'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 1 } ], // Disallow multiple empty lines
    'no-trailing-spaces': 'error', // Disallow trailing whitespace
  },
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  root: true,
};