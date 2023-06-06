import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import contactStyles from "./contact.module.scss"

export default function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact 📞</h1>
      <form
        method="post"
        action="https://formspree.io/f/mvolowea"
        className={contactStyles.header}
      >
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label for="name">
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}
