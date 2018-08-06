import React from 'react'
import logo from './logo.svg'
import './header.scss'
function Header () {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo"/>
      <h1 className="app-title">Welcome to React</h1>
    </header>
  )
}
export default Header
