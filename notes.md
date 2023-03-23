# Notes

This is my notes page of things I have learned while working on the project. It also contains an ongoing checklist of items that I want to work on throghout this project.

## CSS Modules and SASS

- A popular convention in for writing CSS is the use of CSS Modules, instead of a master stylesheet. In Gatsby, CSS Modules must be imported and declared as a JavaScript object, using the `*` notation. Then, a CSS class from that object is referenced in the JSX className attribute
- In order to use `@use` (`@import` will eventually be deprected in SASS), SCSS variables must be namespaced to the name of the file the variable is imported from. Hence, `$bp-large` must be referenced as `variables.$bp-large` below

## Item Checklist

- [x] Pull list of all articles from Drupal using GraphQL query
- [x] Break article list into its own component and display on `index.js`
- [x] Pull images from Drupal articles
- [x] Use (s)css modules to style components
- [x] Add `eslint` and set up pre-commit hook
- [x] Add Drupal site URL as a `env` variable, and replace in Gatsby config
- [x] Set up `stylelint`
- [x] Change article body to only display excerpt, and pull in excerpt instead of full body
- [x] Set up routing to make article title a link that will direct user to a page with full article content
- [ ] Sort articles
- [ ] Add tests with Jest
