import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Header from '@/components/header'
import Home from '@/views/home'
import About from '@/views/about'

function Router () {
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

export default hot(Router)
