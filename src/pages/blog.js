import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
        }
      }
    }
  }
  `)
  return (
    <div>
      <Layout>
        <h1>Posts</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge,i) => {
              return(
                <li key={i}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </li>
              )
          })}
        </ol>
        {console.log(data)}

      </Layout>
    </div>
  )
}

export default BlogPage
