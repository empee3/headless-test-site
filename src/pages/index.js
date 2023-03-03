import React from 'react';
import Layout from '../components/layout/layout';
import ArticleList from '../components/articleList/articleList';

//import '../styles/styles.scss';

/**
 * Index page, currently shows a list of article nodes from the Drupal site
 */

const IndexPage = () => {
  return (
    <Layout>
      <ArticleList />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
