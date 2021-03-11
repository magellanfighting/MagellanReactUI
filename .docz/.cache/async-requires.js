// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---documents-custom-button使用文档-md": () => import("./../../../../documents/CustomButton使用文档.md" /* webpackChunkName: "component---documents-custom-button使用文档-md" */),
  "component---readme-md": () => import("./../../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

