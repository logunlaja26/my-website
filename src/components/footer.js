import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import * as footerStyles from "./footer.module.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}
      </p>
      <p>
        I can be reached here <a href="/contact">Contact</a>
      </p>
    </footer>
  )
}
