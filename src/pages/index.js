import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import pic from "../circle-cropped.png"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h1>Im Ly Ogunlaja, a tech enthusiast living in Chicago 🧑🏿‍💻</h1>
      <img src={pic} alt="pic" class="center" />
    </Layout>
  )
}
export default IndexPage
