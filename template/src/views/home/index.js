import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

function Home () {
  return (
    <div>
      <p className="App-intro">
        This is <i>home</i> page.
      </p>
      <p>
        <Link to="/about">see <i>about</i> page</Link>
      </p>
    </div>
  )
}

export default Home
