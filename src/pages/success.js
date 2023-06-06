import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function success() {
  return (
    <Layout>
      <Head title="success" />
      <h2>Thank you! Your message has been successfully sent.</h2>
      <p>
        <Link to="/">Home Page</Link>
      </p>
    </Layout>
  )
}
