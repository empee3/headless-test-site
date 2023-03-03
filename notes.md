## CSS Modules and SASS

- A popular convention in for writing CSS is the use of CSS Modules, instead of a master stylesheet. In Gatsby, CSS Modules must be imported and declared as a JavaScript object, using the `*` notation. Then, a CSS class from that object is referenced in the JSX className attribute
- In order to use `@use` (`@import` will eventually be deprected in SASS), SCSS variables must be namespaced to the name of the file the variable is imported from. Hence, `$bp-large` must be referenced as `variables.$bp-large` below
