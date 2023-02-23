import React from "react"
import { graphql } from "gatsby"
import ArticleList from "../components/articleList"

const IndexPage = ({data}) => {
  return (
    <main>
      <ArticleList />
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
