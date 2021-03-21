module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
    'html',
  ],
  rules: {
    "semi": ['error', 'never'],
    "react/react-in-jsx-scope": 'off',
    "react/jsx-filename-extension": 'off',
    "no-unused-vars": 'off',
    "react/prop-types": "off",
    "no-undef": "off",
    "react/jsx-no-undef": "off",
    "linebreak-style": ["error", "windows"],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    "react/jsx-one-expression-per-line": "off",
     "no-alert": "off",
     'jsx-a11y/no-noninteractive-tabindex': "off",
     "jsx-a11y/no-noninteractive-element-interactions": "off",
     "arrow-body-style": "off",
  },
  globals: {
    'React': 'readonly',
    'ReactDOM': true,
  }
};
