import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css'
import {  GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
    const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return (
    <Layout>
      <section className={header}>
        <div>
         
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={ btn } to="/projects">My Portfolio Projects</Link>
        </div>
           <GatsbyImage image = {image} /> 
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 300
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      }
    }
  
}
`