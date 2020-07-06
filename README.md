-   a comic is just an exported react component
-   ./index.tsx lists all the comics available, grouped by file
-   to get the comics i use context.require with the extension of `.comic.js`
-   to get the title for the sidebar nav i get the module.default.title or just use the filename without extension
-   the nav children are simply all other exports
-   to choose what export to render i get the current page path

problems:

-   if the sidebar requires to read the module exports then i need to compile everything on first render, instead i could just use the filename and render the different components choices in a column, just like a comic
-   the require.context params must be constants, to be able to do that i must inject these constants in webpack and configure them in next.config.js

how to add stories

-   add @types/webpack-env for require.context
-   add the workspace as dependency
-   add it to transpile modules
