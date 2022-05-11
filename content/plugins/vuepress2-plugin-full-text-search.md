---
author:
  avatar: https://avatars.githubusercontent.com/u/16508807?v=4
  email: ~
  name: ~
  url: ~
  username:
    name: Yosuke Ota
bugs: https://github.com/ota-meshi/vuepress2-plugin-full-text-search/issues
category: plugin
date: '2022-05-06T01:33:08.494Z'
deprecated: false
description: VuePress v2 plugin that adds full-text search box.
downloads: ~
homepage: https://github.com/ota-meshi/vuepress2-plugin-full-text-search#readme
keywords:
  - vuepress
  - vuepress-plugin
  - full-text-search
  - vuepress-next
license: MIT License
maintainers:
  - email: otameshiyo23@gmail.com
    username: ota-meshi
name: vuepress2-plugin-full-text-search
npm: https://www.npmjs.com/package/vuepress2-plugin-full-text-search
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: otameshiyo23@gmail.com
    username: ota-meshi
repository: https://github.com/ota-meshi/vuepress2-plugin-full-text-search
score: 0.5954803918938495
stars: 9
unstable: true
version: 0.1.2
watchers: 9

---

# vuepress2-plugin-full-text-search

[VuePress v2] plugin that adds full-text search box.

[vuepress v2]: https://v2.vuepress.vuejs.org/

:warning: WARNING: this project is considered to be in BETA until [VuePress v2] is available for general use and the API is stable!

## Install

```shell
npm i -D vuepress2-plugin-full-text-search
```

## Config

:warning: Text-based plugin definitions will not work because this plugin does not yet follow the naming convention.

### For CJS

e.g. `.vuepress/config.js`

```js
module.exports = {
  plugins: [[require("vuepress2-plugin-full-text-search").default]],
};
```

### For ESM

e.g. `.vuepress/config.js`

```js
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";
module.exports = {
  plugins: [[pluginFullTextSearch]],
};
```
