module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    {{#if_eq lintConfig "standard"}}
    'standard',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    'airbnb-base',
    {{/if_eq}}
    'plugin:react/recommended'
  ],
  plugins: ['react'],
  rules: {
    'react/display-name': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
