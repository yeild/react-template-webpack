import * as React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home () {
  return (
    <div>
      <p className="app-intro">
        This is <i>home</i> page.
      </p>
      <p>
        <Link to="/about" className="link">see about</Link>
      </p>
    </div>
  )
}

export default Home
