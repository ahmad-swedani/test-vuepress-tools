---
author:
  avatar: https://avatars.githubusercontent.com/u/16360246?v=4
  email: ~
  name: ~
  url: ~
  username:
    email: akccakccwww@gmail.com
    name: Rex Tsou
    username: akccakcctw
bugs: https://github.com/akccakcctw/vuepress-plugin-last-updated-by/issues
category: plugin
date: '2021-05-31T17:39:36.299Z'
deprecated: false
description: last-updated plugin for vuepress
downloads: ~
homepage: https://github.com/akccakcctw/vuepress-plugin-last-updated-by#readme
keywords:
  - vue
  - vuepress
license: ~
maintainers:
  - email: akccakccwww@gmail.com
    username: akccakcctw
name: '@akccakcctw/vuepress-plugin-last-updated-by'
npm: https://www.npmjs.com/package/%40akccakcctw%2Fvuepress-plugin-last-updated-by
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: akccakccwww@gmail.com
    username: akccakcctw
repository: https://github.com/akccakcctw/vuepress-plugin-last-updated-by
score: 0.3426651105349274
stars: 1
unstable: true
version: 0.1.0
watchers: 1

---

# @akccakcctw/vuepress-plugin-last-updated-by

> vuepress plugin to display last author of files

[![Npm build badge](https://img.shields.io/npm/v/@akccakcctw/vuepress-plugin-last-updated-by.svg?style=flat-square)](https://www.npmjs.com/package/@akccakcctw/vuepress-plugin-last-updated-by)

## Install 

```sh
$ npm install -D @akccakcctw/vuepress-plugin-last-updated-by
```

## Usage

Add `@akccakcctw/vuepress-plugin-last-updated-by` to `plugins` in your vuepress **config.js**.

```javascript
// config.js

module.exports = {
  plugins: [
    '@akccakcctw/vuepress-plugin-last-updated-by', // add this line
  ],
}
```

It will add `lastUpdatedBy` to your `$page`, can be access like

```javascript
console.log($page.lastUpdatedBy); // "akccakcctw"
```
