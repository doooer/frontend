module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['simple-import-sort', 'import'],
  rules: {
    // Sort
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // Import
    'import/first': 'error',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
};
