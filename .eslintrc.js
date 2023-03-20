module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-explicit-any': 'off',
    // 'brace-style': ['error', '1tbs'], // This rule conflicts with Prettier
    curly: ['error', 'all'],
    indent: 'off',
    // "@typescript-eslint/indent": ["error", 2],
    'no-tabs': 2,
    'space-before-blocks': ['error'],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-inferrable-types': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/camelcase': 'off',
    'no-multi-spaces': ['error'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
        pathGroups: [
          {
            pattern: '@{apps|libs|pixelplex}/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'off',
          parameterProperties: 'explicit',
        },
      },
    ],
    'no-return-await': ['error'],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
