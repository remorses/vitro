## UI and personality

The ui should resemble a comic board, using bordered rectangles to contain the components

In the top right there should be a button group to choose the container rectangles size (like in dribbble.com, choose between 2 per row, 4 per row, ...)

Every rectangle has a title that simply is the exported component name

The index page displays all the different comics available, it should resemble a comic book where every cell points to a comic board


## Differences with story book

-   No addons, if you want more features open a pull request here, we want a cohesive and coherent code base
-   Many features inherited by using next.js like
    -   Zero config typescript, babel, css support
    -   Incremental compilation
    -   React Fast refresh
    -   Awesome Nextjs plugins like `next-transpile-modules`, `next-images` and more
    -   SSR

### Features missing from story book (in progress)

-   Viewport sizing
-   Display source code

### Addons that won't be implemented

-   Actions
-   Knobs
-   Docs
-   Console
-   Links
-   Props

## Unique features

- CSS debug (injects border to every div, to see all components outlines)

## How it works

-   a comic is just an exported react component
-   ./index.tsx lists all the comics available, grouped by file
-   to get the comics i use context.require with the extension of `.comic.js`
-   to get the title for the sidebar nav i get the module.default.title or just use the filename without extension
-   the nav children are simply all other exports
-   to choose what export to render i get the current page path

## Problems

-   if the sidebar requires to read the module exports then i need to compile everything on first render, instead i could just use the filename and render the different components choices in a column, just like a comic
-   the require.context params must be constants, to be able to do that i must inject these constants in webpack and configure them in next.config.js

## How to add stories (to be automated)

-   add @types/webpack-env for require.context
-   add the workspace as dependency
-   add it to transpile modules
