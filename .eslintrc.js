module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module'
    },
    extends: 'eslint:recommended',
    env: {
      browser: true,
    },
    rules: {
      "no-console": 0,
    },
    globals: {
      "process": true
    }
};