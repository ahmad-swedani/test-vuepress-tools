---
author:
  avatar: https://avatars.githubusercontent.com/u/10338381?v=4
  email: null
  name: null
  url: null
  username: levi9311
bugs: https://github.com/levi9311/vuepress-theme-cosmos/issues
category: theme
date: '2020-05-21T06:24:27.154Z'
deprecated: false
description: Theme for VuePress static site generator used by interchain projects.
downloads: null
homepage: https://github.com/levi9311/vuepress-theme-cosmos#readme
keywords:
- documentation
- docs
- vuepress
- theme
license: Other
maintainers: null
name: vuepress-theme-cosmos-levi
npm: https://www.npmjs.com/package/vuepress-theme-cosmos-levi
publisher:
  avatar: null
  email: 790890362@qq.com
  name: null
  url: null
  username: levi_xia
repository: https://github.com/levi9311/vuepress-theme-cosmos
score: 0.43802691646062814
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# Modified Cosmos theme for VuePress

## Install

```sh
# Remove previously installed version (optional)
rm -rf node_modules

# If there is no package.json file, initialize npm package
npm init

# Install or update the theme
npm install --save vuepress-theme-cosmos
```

## Usage

Minimal config in `.vuepress/config.js` to enable the theme:

```js
module.exports = {
  theme: "cosmos"
}
```

### Run dev server

```sh
vupress dev
```

### Build the website

```
vuepress build
```

## Configuration

Most of the configuration happens in the `.vuepress/config.js` file. All parameters all optional, except `theme`.

```js
module.exports = {
  // Enable the theme
  theme: "cosmos",
  themeConfig: {
    // Logo in the top left corner, file in .vuepress/public/
    logo: "/logo.svg",
    // Auto-sidebar, true by default
    autoSidebar: true,
    // Configure the manual sidebar
    sidebar: [
      // Array of sections
      {
        title: "Section title",
        children: [
          {
            title: "External link",
            path: "https://example.org/"
          },
          {
            title: "Internal link",
            path: "/url/path/"
          },
          {
            title: "Directory",
            path: "/path/to/directory/",
            directory: true
          },
          {
            title: "Link to ./vuepress/public/foo/index.html",
            path: "/foo/",
            static: true
          }
        ]
      }
    ]
  }
}
```

Markdown files can contain YAML frontmatter. Several properties (all of which are optional) are used by the theme:

```yaml
---
# title is displayed in the sidebar
title: Title of the file
# order specifies file's priority in the sidebar
order: 2
# parent is readme.md or index.md parent directory
parent:
  title: Directory title
  order: 1
---
```

Setting `order: false` removes the item (file or directory) from the sidebar. It is, however, remains accessible by means other than the sidebar. It is valid use a `readme.md` to set an order of a parent-directory and hide the file with `order: false`.