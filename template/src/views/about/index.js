import React from 'react'
import { Link } from 'react-router-dom'
import './about.scss'

function Home () {
  return (
    <div>
      <p className="app-intro">
        This is <i>about</i> page.
      </p>
      <p><Link to="/">back to home</Link></p>
    </div>
  )
}

export default Home
