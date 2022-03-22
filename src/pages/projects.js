import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import product from "../chrometabsorganizer.png"

export default function ProjectsPage() {
  return (
    <Layout>
      <Head title="Projects" />
      <h1>Chrome Tabs Organizer</h1>
      <a href="https://chrome.google.com/webstore/detail/tabs-organizer/khpnjppancggkodjnbfbecccpdcpbihj?hl=en-US">
        <img src={product} className="ChromeOrganizerIcon" target="_blank" />
      </a>
    </Layout>
  )
}
