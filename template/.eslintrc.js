module.exports = {
  root: true,
  {{#typescript}}
  parser: '@typescript-eslint/parser',
  {{else}}
  parser: 'babel-eslint',
  {{/typescript}}
  extends: [
    {{#if_eq lintConfig "standard"}}
    'standard',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    'airbnb-base',
    {{/if_eq}}
    'plugin:react/recommended'
  ],
  {{#typescript}}
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  {{else}}
  plugins: ['react'],
  {{/typescript}}
  rules: {
    'react/display-name': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
