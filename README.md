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

## Things to do

-   [x] sidebar in safari has zindex too high
-   [ ] rename stories, storyExports to files, fileExports
-   [ ] render components inside iframe when specified, to not let css files modify the UI (or maybe render my UI inside iframes)
-   [ ] add a globalCSS options to pass an array of css files to include in global scope, this way people can use tailwind for example
-   [ ] add the next css plugin to let users import css files that are not css modules
-   [x] dark mode
-   [ ] use more complex @/ because user could be using it already
-   [ ] store columns count in localstorage so columns count remains between page changes
-   [x] dont recreate the stories if already present when running start (because mac and vscode go crazy)
-   [ ] reset render count to zero when rendering above profiler
-   [ ] enable the paths inspection compiled only if --verbose (also make it a separate package)
-   [ ] investigate if doing SSR or not
-   [x] throttle the search bar
-   [x] check that the global wrapper is a component before using it and give an error if not
-   [x] make the sidebar fixed and scrollable
-   [x] add a error boundary to every story block and display a pretty error
-   [ ] catch errors in server, wait for https://github.com/vercel/next.js/issues/5070
-   [ ] add max zIndex to story toolbar (no this way is difficult to cover them with overlay in full screen)
-   [ ] investigate if the render count is accurate given that the profiler is parent of Component
-   [x] make the profiler id unique adding the filename path to it
-   [x] investigate slow startup time, try to optimize the regex and context.require flow
-   [ ] exit from full screen with esc key
-   [x] CSS debug (injects border to every div, to see all components outlines)
-   [x] Open in Vscode (via url with `vscode://file`)
-   [x] see render counts and time
-   [x] view in Full screen
-   [x] better multi columns support
-   [ ] fix the path functions that rely on unix paths, check if runs on windows
-   [ ] remove as much logic as possible from the .vitro folder, move it to dependency package
-   [ ] move UI components to `vitro-ui` package
-   [ ] when generating the .vitro add a version file with the current version
-   [ ] remove the new command, the default command checks if a vitro.config.js exists, if not asks if user wants to create .vitro and config (or errors if not tty)
-   [ ] the start command keeps the `.vitro` updated running the new command when it sees that its version is greater than the generated one
-   [ ] make a Vercel runtime package that points to a `storybaords.config.js`, this wraps the nextjs deployer but runs the new command before and optionally another command to build packages it depends on (like run yarn on root), this way i can add .vitro to .gitignore
-   [x] the profiler does not run on hydration, maybe disable it when in production
-   [x] no more needed, support for multiple globs paths adding more context.require (up to 10)
-   [x] add emotion to aliases
-   [x] add a button to make a block full screen
-   [x] remove render counts and time on small blocks
-   [ ] how to easily deploy a storyboard to a subpath together with other nextjs apps? maybe wait for https://github.com/vercel/vercel/issues/3547
-   [ ] how to pass a custom tsconfig, babel? maybe add a babelPath and tsconfigPath and copy these on the vitro new and start command
-   [ ] next run on top directory, this way urls are clickable in vscode

## Sustainability

-   offer a pro managed service that
    -   notifies vai email on components visual changes
    -   notifies on broken components
    -   tells you the average, value over time of web vitals of every component (render time, count, accessibility, )
    -   bundle size over time
