import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>Ly Ogunlaja</h1>
      <p>About Page</p>
      <p>
        follow me on Twitter
        <a href="https://twitter.com/CoderBlack92" target="_blank">
          🐦
        </a>
      </p>
    </Layout>
  )
}
