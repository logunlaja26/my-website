import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'


export default function BlogPage() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: published,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          published(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)

 
    return(
      <Layout>
        <h1>Blog ✍️</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.published}</p>
                </Link>
              </li>
            )
          }) }
        </ol>
      </Layout>
    )  
  }