// This is the configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

module.exports = {
  root: true, // This property indicates that this is the root configuration file and no further ESLint configurations should be loaded.
  env: { browser: true, es2024: true }, // This specifies the environments your code is designed to run in. Here, it's set to browser and ECMAScript 2024.
  extends: [
    // This property is used to extend from a shared configuration.
    'airbnb', // This is a widely used ESLint configuration that follows Airbnb's style guide.
    'airbnb-typescript', // This extends Airbnb's ESLint configuration to include TypeScript-specific rules.
    'airbnb/hooks', // This includes rules for React Hooks.
    'plugin:react/recommended', // This includes recommended rules from the ESLint plugin for React.
    'plugin:@typescript-eslint/recommended', // This includes recommended rules from the ESLint plugin for TypeScript.
    'plugin:react/jsx-runtime', // This includes rules for the new JSX transform in React 17.
    'plugin:markdown/recommended', // This includes recommended rules from the ESLint plugin for Markdown.
    'plugin:prettier/recommended', // This includes recommended rules for Prettier,  Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // These patterns are ignored by ESLint.
  parser: '@typescript-eslint/parser', // This specifies the parser ESLint will use to parse your code.
  parserOptions: {
    // These options are passed to the parser.
    ecmaVersion: 'latest', // This specifies the version of ECMAScript syntax you want to use.
    sourceType: 'module', // This specifies that your code is written in ECMAScript modules.
    project: './tsconfig.json', // This specifies the path to your TypeScript configuration file.
  },
  plugins: [
    // This property lists the ESLint plugins that are being used using.
    'react-refresh', // This plugin is used for fast refresh functionality in React applications during development.
    'react', //This plugin provides React-specific linting rules for ESLint.
    '@typescript-eslint', //This plugin contains sets of ESLint rules specifically for TypeScript.
    'prettier', //This plugin integrates Prettier with ESLint. Prettier is an opinionated code formatter.
    'import', //This plugin provides rules to help validate proper imports.
    'unicorn', //This plugin provides various rules that encourage better code practice.
    'promise', //This plugin enforces best practices for JavaScript promises.
    'security', //This plugin provides rules to help prevent security vulnerabilities.
  ],
  rules: {
    // This property lists the rules your code should follow.

    // This rule warns if a file exports non-component variables. The option `allowConstantExport` is set to `true`, which allows constant exports.
    'react-refresh/only-export-components': [
      'warn',

      { allowConstantExport: true },
    ],
    //This rule enforces the use of `querySelector` over other methods like `getElementById`, `getElementsByClassName`, etc. It's set to `error`, meaning it will throw an error when violated.
    'unicorn/prefer-query-selector': 'error',
    // This rule enforces that each `then()` should return a value. It's set to `error`, meaning it will throw an error when violated.
    'promise/always-return': 'error',
    //This rule warns about potential object injections which can lead to potential security vulnerabilities. It's set to `error`, meaning it will throw an error when violated.
    'security/detect-object-injection': 'error',
    //This rule enforces that all props have default values. It's set to `off`, meaning it's disabled.
    'react/require-default-props': 'off',
    //This rule disallows the spreading of props in JSX. It's set to `off`, meaning it's disabled.
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    // This property specifies the settings for each plugin.
    react: {
      version: 'detect', // This specifies the version of React you're using.
    },
  },
};
