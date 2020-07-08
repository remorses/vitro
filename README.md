# storyboards

**this project is under heavy development**


## Differences with story book

-   Only works with yarn workspaces (if you find a way to import a module outside of nextjs and keep it in sync without workspaces open an issue)
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

## Unique features (in progress)

-   CSS debug (injects border to every div, to see all components outlines)
-   Open in Vscode (via url with `vscode://file`)
-   view in Full screen
-   see render counts and time

## How it works

-   a story is just an exported react component
-   ./index.tsx lists all the stories available, grouped by file
-   to get the stories i use context.require with the extension of `.story.js`
-   to get the title for the sidebar nav i get the module.default.title or just use the filename without extension
-   the nav children are simply all other exports
-   to choose what export to render i get the current page path

## Problems

-   if the sidebar requires to read the module exports then i need to compile everything on first render, instead i could just use the filename and render the different components choices in a column, just like a story book
-   the require.context params must be constants, to be able to do that i must inject these constants in webpack and configure them in next.config.js
-   how do i handle multiple target packages? in case of a @scope i can simply use that scope as package and pass it to `require.context` and transpile modules, but different packages?
-   in case of problems with node_modules the use does not know what to do, suggest him to use command `storyboards start --clean` to remove the nextjs app in case of errors

## How to add stories (to be automated)

-   add @types/webpack-env for require.context
-   add the workspace as dependency
-   add dependencies that need to be transpiled
-   inject `require.context` params with webpack `DefinePlugin`
-   make the main storybooks package that creates a nextjs app under the hood, using a root config file that defines
    -   story extension
    -   target workspaces (yarn workspaces packages that contain stories) (to be passed to `next-transpile` and `require.context`)
    -   custom babel config (to be passed to nextjs)
    -   custom webpack config
    -   custom nextjs config


## UI and personality


The ui should resemble a story board, using bordered rectangles to contain the components

In the top right there should be a button group to choose the container rectangles size (like in dribbble.com, choose between 2 per row, 4 per row, ...)

Every rectangle has a title that simply is the exported component name

The index page displays all the different stories available, it should resemble a story book where every cell points to a story board


## Things to do

-   `storyboards` cli package
    -   **storyboards new**:
        -   downloads the nextjs template app from github to folder `.storyboards` (can be customized using `.storyboards.js` to change extension),
        -   creates a base config file to enter the target packages, extension, babel config,
    -   **storyboards dev**:
        -   generates the `next.config.js` with given packages and attaches a watcher to the main config, regenerating the `next.config.js` and the `require.context` code
-   stories index UI
-   sub stories in a file UI
-   sidebar to list all stories (by filename) in story page
-   layout select button to change stories sizes
-   add a wrapper field to the config that points to a file with a default exported component, this file will be imported with require and used as parent component
-   get the title, description, wrapper fields from the default export of the stories
-   get the inout glb and wrapper path from the storyboards.config.js (requiring it from the .. path) inside the next.config
-   storybaords cmd just wraps the next dev command, moves the template in .storyboards if missing, checks that the config.js is present, generates a default config if missing, adds the .storyboards to gitignore, runs npm ci if needed
-   fix the path functions that rely on unix paths
-   remove the chakra alias in webpack
-   the template should be a standalone package with pavkage lock
