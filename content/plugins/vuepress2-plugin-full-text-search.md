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
date: '2022-05-16T07:46:31.436Z'
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
score: 0.5971838623235373
stars: 17
unstable: true
version: 0.2.0
watchers: 17

---

# vuepress-plugin-full-text-search2

[VuePress v2] plugin that adds full-text search box.

![screenshot](./screenshot.png)

[vuepress v2]: https://v2.vuepress.vuejs.org/

:warning: WARNING: this project is considered to be in BETA until [VuePress v2] is available for general use and the API is stable!

## Install

```shell
npm i -D vuepress-plugin-full-text-search2
```

### For CJS

e.g. `.vuepress/config.js`

```js
module.exports = {
  plugins: [require("vuepress-plugin-full-text-search2").default],
};
```

### For ESM

e.g. `.vuepress/config.js`

```js
import pluginFullTextSearch from "vuepress-plugin-full-text-search2";
module.exports = {
  plugins: [pluginFullTextSearch],
};
```
