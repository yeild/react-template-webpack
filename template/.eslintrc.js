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
    'react',
    'react-hooks'
  ],
  {{else}}
  plugins: [
    'react',
    'react-hooks'
  ],
  {{/typescript}}
  rules: {
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
