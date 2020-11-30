export * from './plugin'
export * from './generate'
export { vitroPlugin as default } from './plugin'
// make this a vite plugin
// serve the entry as a virtual file
// the virtual file is generated containing some dynamic imports for the found stories
// the virtual file routes are generated from the stories tree
