import React from 'react'
import Layout from '../../components/Layout'
import {project, portfolio} from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby'
import {  GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  // const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={project}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
              <GatsbyImage image = {project.frontmatter.thumb.childImageSharp.gatsbyImageData} /> 
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Email: { contact }</p>
      </div>
    </Layout>
  );
}
 
export default Projects

// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`