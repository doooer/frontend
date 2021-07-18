module.exports = {
  extends: ['./rules/node', './rules/import', './rules/prettier', './rules/style'].map(require.resolve),
};
