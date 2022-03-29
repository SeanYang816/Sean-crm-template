module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended", "plugin:react-hooks/recommended", "prettier", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
      "js": true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ['error', 'never'],
    "no-unused-vars": "warn",
    "no-extra-boolean-cast": "error",
    "no-var": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 0
    }],
    "no-trailing-spaces": "error"
  }
};