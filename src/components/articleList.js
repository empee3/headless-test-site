import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ArticleList = ({data}) => {
    return (
        <>
            {data.allNodeArticle.edges.map((article, index) => (
                <article key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.body.value}</p>
                </article>
            ))}
        </>
    )
}

export default ArticleList;

export const articleQuery = 
<StaticQuery 
  query={graphql`
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
  `} 
/>