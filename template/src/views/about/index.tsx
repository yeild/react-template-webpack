import React from 'react'
import { Link } from 'react-router-dom'

function About () {
  return (
    <div>
      <p className="app-intro">
        This is <i>about</i> page.
      </p>
      <p><Link to="/" className="link">back to home</Link></p>
    </div>
  )
}

export default About
