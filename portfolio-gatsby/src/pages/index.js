import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Skills from '../components/Skills'

const IndexPage = ({ data }) => (
  <div>
    <Navbar />
    <Header />
    <Skills skills={data.allStrapiSkill} />
    <ul>
      {data.allStrapiProject.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.name}</Link>
          </h2>
          <p>{document.node.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject {
      edges {
        node {
          id
          name
          description
        }
      }
    }
    allStrapiSkill {
      edges {
        node {
          id
          name
          image {
            name
            url
          }
        }
      }
    }
  }
`
