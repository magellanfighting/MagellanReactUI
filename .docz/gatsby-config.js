const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Magellanfightingtest',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/magellan/Desktop/npm/MagellanReactUI/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Magellanfightingtest',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/magellan/Desktop/npm/MagellanReactUI',
          templates:
            '/Users/magellan/Desktop/npm/MagellanReactUI/node_modules/docz-core/dist/templates',
          docz: '/Users/magellan/Desktop/npm/MagellanReactUI/.docz',
          cache: '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/.cache',
          app: '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/app',
          appPackageJson:
            '/Users/magellan/Desktop/npm/MagellanReactUI/package.json',
          appTsConfig:
            '/Users/magellan/Desktop/npm/MagellanReactUI/tsconfig.json',
          gatsbyConfig:
            '/Users/magellan/Desktop/npm/MagellanReactUI/gatsby-config.js',
          gatsbyBrowser:
            '/Users/magellan/Desktop/npm/MagellanReactUI/gatsby-browser.js',
          gatsbyNode:
            '/Users/magellan/Desktop/npm/MagellanReactUI/gatsby-node.js',
          gatsbySSR:
            '/Users/magellan/Desktop/npm/MagellanReactUI/gatsby-ssr.js',
          importsJs:
            '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/app/imports.js',
          rootJs:
            '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/app/root.jsx',
          indexJs:
            '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/app/index.jsx',
          indexHtml:
            '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/app/index.html',
          db: '/Users/magellan/Desktop/npm/MagellanReactUI/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
