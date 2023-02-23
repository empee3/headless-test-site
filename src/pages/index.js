import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <main>
      {data.allNodeArticle.edges.map((article, index) => (
        <article key={index}>
          <h2>{article.node.title}</h2>
          <div dangerouslySetInnerHTML={{__html: article.node.body.value}} />
        </article>
      ))}
    </main>
  ) 
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          title
          body {
            value
          }
        }
      }
    }
  }
`
