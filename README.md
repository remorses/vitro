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

-   No addons, if you want more features open a pull request here, i want a cohesive code base
-   Many features inherited from next.js like
    -   Zero config typescript, babel, css support
    -   Incremental compilation
    -   React Fast refresh
    -   Awesome Nextjs plugins like `next-transpile-modules`, `next-images` and more

### Features missing from storybook (in progress)

-   Viewport sizing
-   Display source code

### Addons that won't be implemented

-   Actions
-   Knobs
-   Props

## Things to do

-   [ ] make only one dependency for cli and ui called `@vitro/vitro`, the .vitro folder will import from that (the cli dependency will also need snowpack ...)
-   [ ] Add the githubUrl to config, make the `open in vscode` and `click to source` isomorphic
-   [ ] use bundless instead of nextjs, the routes are computed from the tree file with react router
-   [x] snowpack should bundle dependencies incrementally snowpack/discussions/1208, impossible
-   [ ] replace next link with react router
-   [ ] replace Router.on with react router like https://gist.github.com/shelldandy/02ad1a9f8b5b86d1b2e4dd26a11967b2
-   [ ] make a single standalone bundle for `@vitro/ui` and export it from cli to only have one dependency, no more need to install the vitro app folder or adding it to workspaces
-   [ ] analyze esbuild deps output and determine the size of each page creating a bundle size report, can be done analyzing the esbuild metafile or snowpack 
-   [x] call vitro commands from subdirectories
-   [x] open in vscode redirects to original file
-   [ ] `vitro screenshot` to make screenshots of all the stories and save them on disk (or upload them to s3 compatible store)
-   [x] debug what files are transpiled with an additional loader
-   [x] `--filter` filters out globs outside of cwd (adding an ignore glob)
-   [ ] wrap internal UI in shadow dom to isolate it from user CSS
-   [x] add `importCSS` feature to let user import css like in CRA
-   [ ] add a blocks view, made of files and folders (folders are taken from files title slashes), each file shows its experiments rendered in a small grid (because every file can have more than one experiment) (svg thumbnails are generated during dev), clicking on a file block shows its experiments thumbnails larger)
-   [x] wait for nextjs 9.5.4 for pnpm support
-   [x] make vitro callable from sub directories, searching for a top level vitro.config.js file and setting the cwd to that level,
-   [ ] make a dashboard where you can login with github, connect a repository and deploy its vitro app and get all the additional features like visual diffs, performance report, bundle size report
-   [ ] make an example with an iframe in wrapper with emotion
-   [ ] how to pass a custom babel? add a babelConfig and merge it in the babel.config.js
-   [ ] exit from full screen with esc key
-   [ ] reset render count to zero when rendering above profiler
-   [ ] add max zIndex to story toolbar (no this way is difficult to cover them with overlay in full screen)
-   [ ] investigate if the render count is accurate given that the profiler is parent of Component
-   [x] add support for yarn v2 using a custom init flag (adding a `packageManager` in config, changes how the install process is done)
-   [x] wait for https://github.com/vercel/next.js/issues/15950 and 9.5.3
-   [x] investigate support for importing `@storybook` stuff for better migration process
-   [x] rename stories to experiments (or studies or cases)
-   [x] add a build command that runs the files generation and next build, add this command to the vitro app build script to make vercel work out of the box
-   [x] if a file name is index get the containing folder name, also you can pass a function getName that given a file path gets the title out
-   [x] make the index page with an how it works and what vitro does, inciting to subscribe to the managed platform for additional features
-   [x] make a cute splash screen
-   [x] use chokidar to watch for story changes and regenerate the stories paths
-   [x] next run on top directory, this way urls are clickable in vscode
-   [x] how to easily deploy a vitro app to a subpath together with other nextjs apps? maybe wait for https://github.com/vercel/vercel/issues/3547
-   [x] when generating the .vitro add a version file with the current version
-   [x] remove the new command, the default command checks if a vitro.config.js exists, if not asks if user wants to create .vitro and config (or errors if not tty), this way the default command always works and is idempotent
-   [x] the start command keeps the `.vitro` updated running the new command when it sees that its version is greater than the generated one
-   [x] rename stories, fileExports to files, fileExports
-   [x] add a globalCSS options to pass an array of css files to paste in the \_app.jsx file, this way people can use tailwind for example
-   [x] add the next css plugin to let users import css files that are not css modules, yes but this plugin is bugged
-   [x] use more complex _vitro-root_/ because user could be using it already
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
