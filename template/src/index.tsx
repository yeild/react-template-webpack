import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './views/app'
import './styles/common.css'

const HotApp = hot(App)
ReactDOM.render(
  <HotApp/>,
  document.getElementById('root')
)
