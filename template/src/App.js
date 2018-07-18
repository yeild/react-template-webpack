import React from 'react'
{{#router}}
import { BrowserRouter as Router, Route } from 'react-router-dom'
{{/router}}
import './styles/mian.scss'
import Header from './components/Header'
import Home from './pages/home'

function App () {
  return (
    <div className="App">
      <Header name="webpack"/>
      {{#router}}
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
        </div>
      </Router>
      {{else}}
      <Home/>
      {{/router}}
    </div>
  )
}

export default App
