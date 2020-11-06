import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function AboutPage() {
    return(
      <Layout>
        <h1>Ly Ogunlaja</h1>
        <p>About Page</p>
        <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
      </Layout>
    )
  }