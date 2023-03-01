import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function ArticleList() {
  const data = useStaticQuery(graphql`
    query {
      allNodeArticle {
        edges {
          node {
            title
            body {
              value
            }
            field_image {
              alt
            }
            relationships {
              field_image {
                uri {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allNodeArticle.edges.map((article, index) => (
        <article key={index}>
          <h2>{article.node.title}</h2>
          {/* Conditional with JavaScript logical && operator */}
          {article.node.field_image && (
            <img
              src={`https://dev-headless-test-site.pantheonsite.io/${article.node.relationships.field_image.uri.url}`}
              alt={`${article.node.field_image.alt}`}
              className="article--image"
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: article.node.body.value }} />
        </article>
      ))}
    </>
  );
}
