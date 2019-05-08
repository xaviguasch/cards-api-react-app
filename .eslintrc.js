module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0
  },
  parser: 'babel-eslint',
  settings: {
    react: {
      pragma: 'React',
      version: '16.5.2'
    }
  }
}
