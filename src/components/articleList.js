import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function ArticleList () {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <>
      {data.allNodeArticle.edges.map((article, index) => (
        <article key={index}>
            <h2>{article.node.title}</h2>
            <div dangerouslySetInnerHTML={{__html: article.node.body.value}} />
        </article>
      ))}
    </>
  )
}
