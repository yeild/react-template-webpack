import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'

function App () {
  return (
    <div className="App">
      <Header name="webpack"/>
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
        </div>
      </Router>
    </div>
  )
}

export default App
