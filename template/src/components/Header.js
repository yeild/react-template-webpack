import React from 'react'
import logo from '../assets/logo.svg'
function Header (props) {
  return (
    <header className="App-header">
      <h2>{props.name}</h2>
      { /*      <img src={logo} className="App-logo" alt="logo" /> */ }
      <h1 className="App-title">Welcome to 1</h1>
    </header>
  )
}
export default Header
