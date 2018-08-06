## react-template-webpack

This is a project template for [init-react](https://github.com/yeild/init-react).

## Usage

``` bash
$ npm install -g init-react
$ react init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

## Feature
- `npm run dev`:
  - Awesome webpack dev-server
  - Use babel to transform JSX & ES6+ with zero-configuration
  - Real hot-module-replace with [react-hot-loader](https://www.npmjs.com/package/react-hot-loader)
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`:
  - All source minified and named with *chunkhash* for long-term caching
  - Auto-generated production `index.html` with proper URLs to these generated assets.
  - Extract JavaScript & CSS inside *node_modules* into *vendor*

## 1.1.0 update
- Redesign the project structure
- Move .scss into there component dir
- Remove *Use react-router confirm* --- Who will use react without react-router :)
