# storyboards

**this project is under heavy development**


## Differences with story book


-   No addons, if you want more features open a pull request here, we want a cohesive and coherent code base
-   Many features inherited from next.js like
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

-   --CSS debug (injects border to every div, to see all components outlines)--
-   --Open in Vscode (via url with `vscode://file`)--
-   --see render counts and time--
-   view in Full screen


## Things to do
-   better multi columns support
-   fix the path functions that rely on unix paths
-   remove as mush logic as possible from the .storybooks folder, move it to storyboards package
-   move UI components to `storyboards-ui` package
-   
