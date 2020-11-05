import React from "react"
import { Link } from 'gatsby'
import Footer from '../components/footer'
//import Header from '../components/header'


export default function Home() {

  return(
    <div>
      <h1>Hello.</h1>
      <h2>Im Ly,  a fullstack developer living in Chicago.</h2>
      <p>I can be reached here <Link to="/contact">Contact me.</Link></p>
      <Footer/>
    </div>
  )
}
