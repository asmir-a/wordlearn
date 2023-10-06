module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  rules: {
    "prettier/prettier": ["error"],
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
