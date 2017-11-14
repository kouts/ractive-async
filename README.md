# Ractive webpack starter

This repo has the basic pieces in place to start a Ractive project that supports loading views and components asynchronously and on-demand using webpack's dynamic imports. It also has the rest of the build system set up so that you can take advantage of the Ractive bin's component compilation and ES201X using the `ractive-bin-loader` and `buble-loader` loaders.

## Getting started

```sh
git clone https://github.com/ractivejs/ractive-webpack-starter my-app
cd my-app
npm install
npm start
```

## Project structure

```text
root
|-- package.json          # package file with dependencies already in place
|-- webpack.config.js     # webpack config set up for Ractive components
|-- build                 # webpack build output - get your distributables here
|   `-- index.html        # bootstrap HTML
`-- src                   # the source root for your app
    |-- index.js          # the entry point for the main webpack bundle
    |-- App.ractive.html  # the main Ractive view for your app
    |-- views             # a place to keep your views
    |   `-- Example.ractive.html        # example view
    `-- components        # a place to keep your components (widgets)
        `-- AsyncExample.ractive.html   # example component
```

Ractive component files are set up to have `.ractive.html` as their extension. That extension is also configured as part of the search path in the webpack build, so you can include component files without the extension e.g. `import MyComponent from './components/AsyncExample'`.

## Commands

There are two and a half build modes available: live development mode and debug and production build mode. You can start a development server that will watch the files in your `src` using `npm start`.

You can also run a build without watching using `npm run build:dev`, which will compile your src and dump the output in `build`. Ther other half of that is `npm run build:prod`, which does the same thing but also minifies the output.

### TL;DR

```sh
npm start           # start the development server that watches src
npm run build:dev   # compile the src to build
npm run build:prod  # compile and minify the src to build
```
