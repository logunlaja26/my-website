import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

export default function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>Ly Ogunlaja</h1>
      <p>About Page</p>
      <p>
        Software development has been a means for me to exercise creative
        thinking to solve problems. I'm a professional software engineer that
        likes to hack Software Development <Link to="/projects">Tools </Link>to
        make lives easier.{" "}
      </p>
      <p>
        follow me on Twitter
        <a href="https://twitter.com/CoderBlack92" target="_blank">
          🐦
        </a>
      </p>
    </Layout>
  )
}
