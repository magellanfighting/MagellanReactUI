

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---documents-custom-button使用文档-md": (preferDefault(require("/Users/magellan/Desktop/npm/MagellanReactUI/documents/CustomButton使用文档.md"))),
  "component---readme-md": (preferDefault(require("/Users/magellan/Desktop/npm/MagellanReactUI/README.md"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/magellan/Desktop/npm/MagellanReactUI/.docz/src/pages/404.js")))
}

