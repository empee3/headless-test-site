import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as articleStyles from './articleList.module.scss';

export default function ArticleList() {
  const data = useStaticQuery(graphql`
    query {
      allNodeArticle(sort: {created: DESC}) {
        edges {
          node {
            title
            body {
              summary
            }
            field_image {
              alt
            }
            path {
              alias
            }
            created(formatString:"MM/DD/YYYY")
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
        <article key={index} className={articleStyles.article}>
          <h2>{article.node.title}</h2>
          <p className="articleDate">{article.node.created}</p>
          {/* Conditional with JavaScript logical && operator */}
          {article.node.field_image && (
            <img
              src={`https://dev-headless-test-site.pantheonsite.io/${article.node.relationships.field_image.uri.url}`}
              alt={`${article.node.field_image.alt}`}
              className="article--image"
            />
          )}
          <p dangerouslySetInnerHTML={{ __html: article.node.body.summary }} />
          <Link to={article.node.path.alias}>Read More...</Link>
        </article>
      ))}
    </>
  );
}
