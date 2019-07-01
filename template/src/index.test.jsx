import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app'

test('renders without crashing', function () {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
