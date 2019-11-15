import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>2019 &copy; Footer goes here. {data.site.siteMetadata.author}. All rights reserved</p>
    </footer>
  )
}

export default Footer
