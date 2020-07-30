<div align='center'>
    <br/>
    <br/>
    <img src='https://repository-images.githubusercontent.com/277593641/defb3700-c9c4-11ea-81e7-e0118949a8b5' width='320px'>
    <br/>
    <h3>Build and showcase your react components in isolation</h3>
    <p>project under heavy development</p>
    <br/>
    <br/>
</div>

## Differences with storybook

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

## How to enable SSR

Currently SSR is disabled because

-   nextjs webpack resolve aliases are not picked up during first ssr render (only on refresh of a page that is not /index)
-   a lot of people probably don't support ssr rendering because of use of window (when ssr will be possible, it will be disabled by default)
-   not that much useful (first render performance is not that important for a project like this)

## Things to do

-   [x] rename stories to experiments (or studies or cases)
-   [ ] add a build command that runs the files generation and next build, add this command to the vitro app build script to make vercel work out of the box
-   [ ] if a file name is index get the containing folder name, also you can pass a function getName that given a file path gets the title out
-   [ ] add a deploy with vercel button,
-   [ ] make the index page with an how it works and what vitro does, inciting to subscribe to the managed platform for additional features
-   [x] make a cute splash screen
-   [ ] make a dashboard where you can login with github, connect a repository and deploy its vitro app and get all the additional features like visual diffs, performance report, bundle size report
-   [ ] use chokidar to watch for story changes and regenerate the stories paths
-   [ ] make an example with an iframe in wrapper with emotion
-   [x] next run on top directory, this way urls are clickable in vscode
-   [ ] how to easily deploy a vitro app to a subpath together with other nextjs apps? maybe wait for https://github.com/vercel/vercel/issues/3547
-   [ ] how to pass a custom tsconfig, babel? pass a tsconfigPath and copy it on vitro start, the same for babel
-   [x] when generating the .vitro add a version file with the current version
-   [ ] remove the new command, the default command checks if a vitro.config.js exists, if not asks if user wants to create .vitro and config (or errors if not tty), this way the default command always works and is idempotent
-   [x] the start command keeps the `.vitro` updated running the new command when it sees that its version is greater than the generated one
-   [ ] exit from full screen with esc key
-   [x] rename stories, fileExports to files, fileExports
-   [x] add a globalCSS options to pass an array of css files to paste in the \_app.jsx file, this way people can use tailwind for example
-   [x] add the next css plugin to let users import css files that are not css modules, yes but this plugin is bugged
-   [ ] use more complex @/ because user could be using it already
-   [ ] store columns count in local storage so columns count remains between page changes
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
