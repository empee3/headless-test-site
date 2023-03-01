import React from 'react';
import ArticleList from '../components/articleList';

/**
 * Index page, shows a list of article nodes from the Drupal site
 */

const IndexPage = () => {
  return (
    <main>
      <ArticleList />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
