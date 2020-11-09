import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

import footerStyles from  './footer.module.scss'


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

    return(
      <footer className={footerStyles.footer}>
          <p>Created by {data.site.siteMetadata.author}, © 2020</p>
          <a>I can be reached here <Link to="/contact">Contact me.</Link></a>
      </footer>
    )
  }