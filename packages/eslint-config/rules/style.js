module.exports = {
  extends: ['./typescript'].map(require.resolve),
  rules: {
    indent: 'off',
    'no-restricted-globals': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': ['error'],
    'no-unused-expressions': ['error'],
    'no-unused-vars': [2, { args: 'none' }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 120 }],
    'max-depth': ['error', { max: 3 }],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    'arrow-body-style': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'valid-typeof': 'off',
    'function-paren-newline': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
};
