---
author:
  avatar: https://avatars.githubusercontent.com/u/1783210?v=4
  email: ~
  name: ~
  url: ~
  username:
    email: vaniyokk@gmail.com
    name: Ivan Kuzmin
    username: vaniyokk
bugs: https://github.com/vaniyokk/vuepress-plugin-alias/issues
category: plugin
date: '2018-12-15T19:51:48.921Z'
deprecated: false
description: Vuepress plugin that generates alias pages for proper redirect handling
downloads: ~
homepage: https://github.com/vaniyokk/vuepress-plugin-alias#readme
keywords:
  - documentation
  - vuepress
  - plugin
  - redirect
  - alias
license: ~
maintainers:
  - email: vaniyokk@gmail.com
    username: vaniyokk
name: vuepress-plugin-alias
npm: https://www.npmjs.com/package/vuepress-plugin-alias
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: vaniyokk@gmail.com
    username: vaniyokk
repository: https://github.com/vaniyokk/vuepress-plugin-alias
score: 0.435128089592831
stars: 6
unstable: true
version: 1.0.0-beta
watchers: 6

---

# vuepress-plugin-alias
Vuepress plugin that generates alias pages for proper redirect handling

## Install

* Yarn

  ```sh
  yarn add vuepress-plugin-alias
  ```
* NPM

  ```sh
  npm install vuepress-plugin-alias
  ```

## Usage

### Vuepress v1.x

```js
// .vuepress/config.js
module.exports = {
  plugins: [ 'alias' ]
}
```

and in your front-matter add alias to redirect from

```md
---
alias: old-link.html
---
```
or a list of aliases
```md
---
aliases: 
 - old-link1.html
 - old-link2.html
---
```
