module.exports = {
  extends: ['./rules/react', './rules/import', './rules/prettier', './rules/style'].map(require.resolve),
};
