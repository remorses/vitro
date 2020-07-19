# Vitro

**this project is under heavy development**

## Differences with story book

-   No addons, if you want more features open a pull request here, we want a cohesive and coherent code base
-   Many features inherited from next.js like
    -   Zero config typescript, babel, css support
    -   Incremental compilation
    -   React Fast refresh
    -   Awesome Nextjs plugins like `next-transpile-modules`, `next-images` and more
    -   SSR

### Features missing from storybook (in progress)

-   Viewport sizing
-   Display source code

### Addons that won't be implemented

-   Actions
-   Knobs
-   Docs
-   Console
-   Links
-   Props

## How to resolve dependencies

-   if using yarn workspaces use the yarn command to install the vitro dependencies and set the react, react dom semvers as loose as possible to use the hoisted react
-   the same should apply for npm v7 workspaces
-   if using a single npm top level package, don't install the react dep, instead use the one in the current devDependencies
-   using multiple npm packages folders with different react versions is not supported

## How to enable SSR

Currently SSR is disabled because

-   nextjs webpack resolve aliases are not picked up during first ssr render (only on refresh of a page that is not /index)
-   emotion CacheProvider does not work (styles are not inserted in the iframe head)
-   a lot of people probably don't support ssr rendering because of use of window (when ssr will be possible, it will be disabled by default)
-   not that much useful (first render performance is not that important for a project like this)

## Things to do

-   [ ] The error boundary and profiler should be inside the iframe
-   [ ] The css debug style should be injected as an iframe style (this way it does not rerender the react component)
-   [ ] The iframe body should be height 100%
-   [ ] next run on top directory, this way urls are clickable in vscode
-   [ ] how to easily deploy a vitro app to a subpath together with other nextjs apps? maybe wait for https://github.com/vercel/vercel/issues/3547
-   [ ] how to pass a custom tsconfig, babel? maybe add a babelPath and tsconfigPath and copy these on the vitro new and start command
-   [ ] when generating the .vitro add a version file with the current version
-   [ ] remove the new command, the default command checks if a vitro.config.js exists, if not asks if user wants to create .vitro and config (or errors if not tty)
-   [ ] the start command keeps the `.vitro` updated running the new command when it sees that its version is greater than the generated one
-   [ ] exit from full screen with esc key
-   [ ] rename stories, storyExports to files, fileExports
-   [ ] add a globalCSS options to pass an array of css files to include in global scope, this way people can use tailwind for example
-   [ ] add the next css plugin to let users import css files that are not css modules
-   [ ] use more complex @/ because user could be using it already
-   [ ] store columns count in localstorage so columns count remains between page changes
-   [ ] reset render count to zero when rendering above profiler
-   [ ] add max zIndex to story toolbar (no this way is difficult to cover them with overlay in full screen)
-   [ ] investigate if the render count is accurate given that the profiler is parent of Component
-   [ ] fix the path functions that rely on unix paths, check if runs on windows
-   [x] sidebar in safari has zindex too high
-   [x] render components inside iframe when specified, to not let css files modify the UI (or maybe render my UI inside iframes)
-   [x] dark mode
-   [x] dont recreate the stories if already present when running start (because mac and vscode go crazy)
-   [x] enable the paths inspection compiled only if --verbose (also make it a separate package)
-   [x] investigate if doing SSR or not
-   [x] throttle the search bar
-   [x] check that the global wrapper is a component before using it and give an error if not
-   [x] make the sidebar fixed and scrollable
-   [x] add a error boundary to every story block and display a pretty error
-   [x] ~~catch errors in server, wait for https://github.com/vercel/next.js/issues/5070~~
-   [x] make the profiler id unique adding the filename path to it
-   [x] investigate slow startup time, try to optimize the regex and context.require flow
-   [x] CSS debug (injects border to every div, to see all components outlines)
-   [x] Open in Vscode (via url with `vscode://file`)
-   [x] see render counts and time
-   [x] view in Full screen
-   [x] better multi columns support
-   [x] remove as much logic as possible from the .vitro folder, move it to dependency package
-   [x] move UI components to `vitro-ui` package
-   [x] the profiler does not run on hydration, maybe disable it when in production
-   [x] no more needed, support for multiple globs paths adding more context.require (up to 10)
-   [x] add emotion to aliases
-   [x] add a button to make a block full screen
-   [x] remove render counts and time on small blocks

## Sustainability

-   offer a pro managed service that
    -   notifies vai email on components visual changes
    -   notifies on broken components
    -   tells you the average, value over time of web vitals of every component (render time, count, accessibility, )
    -   bundle size over time
