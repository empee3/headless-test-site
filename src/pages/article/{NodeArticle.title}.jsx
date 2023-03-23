import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/layout';
import * as articleStyles from './article.module.scss';

export default function NodeArticle(props) {
  return (
    <Layout>
      <h1>{props.pageContext.title}</h1>
      {props.data.nodeArticle.field_image && (
        <div className={articleStyles.articleHeaderImage}>
          <img
            src={`https://dev-headless-test-site.pantheonsite.io/${props.data.nodeArticle.relationships.field_image.uri.url}`}
            alt={`${props.data.nodeArticle.field_image.alt}`}
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: props.data.nodeArticle.body.value }} />
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    nodeArticle(id: { eq: $id }) {
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
`