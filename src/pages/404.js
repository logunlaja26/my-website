import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Notfound = () => {
    return (
        <Layout>
           <h1>Page not found</h1>
           <p><Link to="/">Head to home page</Link></p>
        </Layout>
    )
}

export default Notfound