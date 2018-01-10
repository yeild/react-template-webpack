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
  // add your custom rules here
  rules: {}
}
