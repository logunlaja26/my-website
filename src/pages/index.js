import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <Layout>
      <h1>Hello.</h1>
      <p>Im Ly Ogunlaja, a tech enthusiast living in Chicago 🧑🏿‍💻</p>
      <p>I can be reached here <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}
export default IndexPage
