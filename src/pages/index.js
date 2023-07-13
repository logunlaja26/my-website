import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h1>Im Ly Ogunlaja, a tech enthusiast living in Chicago 🧑🏿‍💻</h1>
      <StaticImage
        src="../images/main-page-image.png"
        alt="pic"
        class="center"
      />
    </Layout>
  )
}
export default IndexPage
