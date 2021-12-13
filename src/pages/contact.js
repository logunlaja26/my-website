import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact 📞</h1>
      <form
        name="contact-form"
        type="hidden"
        action="/success"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />
        <textarea name="message" />
        <button>Send</button>
      </form>
      <p>
        The best way to reach me is via 👔{" "}
        <a href="https://www.linkedin.com/in/ogunlaja/" target="_blank">
          Linkedin
        </a>
      </p>
    </Layout>
  )
}
