import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Header from '@/components/header'
import Home from './home'
import About from './about'

function App () {
  return (
    <div className="app">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
