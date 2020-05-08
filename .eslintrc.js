module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    cy: true,
    Cypress: true,
    expect: "readonly",
    assert: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["*.test.js", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
        "implicit-arrow-linebreak": "off",
      }
    }
  ]
};
