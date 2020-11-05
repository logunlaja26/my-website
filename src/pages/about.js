import React from "react"
import { Link } from 'gatsby'

import Footer from '../components/footer'

export default function AboutPage() {
    return(
      <div>
        <h1>About</h1>
        <p>About Page</p>
        <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        <Footer/>
      </div>
    )
  }