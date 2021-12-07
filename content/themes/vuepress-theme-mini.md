---
author:
  avatar: https://avatars.githubusercontent.com/u/5960988?v=4
  email: ~
  name: ~
  url: ~
  username:
    email: wxsms@foxmail.com
    name: wxsm
    username: wxsm
bugs: https://github.com/wxsms/vuepress-theme-mini/issues
category: theme
date: '2021-10-08T09:45:54.855Z'
deprecated: false
description: A minimal blogging theme of VuePress.
downloads: ~
homepage: https://github.com/wxsms/vuepress-theme-mini#readme
keywords: ~
license: MIT License
maintainers:
  - email: wxsms@foxmail.com
    username: wxsm
name: vuepress-theme-mini
npm: https://www.npmjs.com/package/vuepress-theme-mini
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: wxsms@foxmail.com
    username: wxsm
repository: https://github.com/wxsms/vuepress-theme-mini
score: 0.5519404248163488
stars: 16
unstable: false
version: 3.1.0
watchers: 16

---

# vuepress-theme-mini

[![NPM Version](https://img.shields.io/npm/v/vuepress-theme-mini.svg)](https://www.npmjs.com/package/vuepress-theme-mini)
[![License](https://img.shields.io/github/license/wxsms/vuepress-theme-mini.svg)](https://github.com/wxsms/vuepress-theme-mini)

## Introduction

A minimal blogging theme of VuePress.

* extended from [@vuepress/theme-default](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default).
* With [Waline](https://github.com/walinejs/waline) comment system integrated.
* Pure CSS darkmode solution.

## Example

* [https://vuepress-theme-mini.wxsm.space](https://vuepress-theme-mini.wxsm.space)
* [https://wxsm.space](https://wxsm.space/)

## Install

```bash
# NPM registry:
npm install vuepress-theme-mini -D
# or
yarn add vuepress-theme-mini -D

# GitHub registry:
npm install @wxsms/vuepress-theme-mini -D
# or
yarn add @wxsms/vuepress-theme-mini -D
```

## Usage

Configurations are extended from [Default theme config](https://vuepress.vuejs.org/theme/default-theme-config.html), with some additions. Noted that not all of the defaults are usable (such as sidebar), since this theme is a minimal design.

```javascript
module.exports = {
  // ...
  theme: 'mini',
  themeConfig: {
    hostname: 'https://xxx', // provide to enable sitemap and rss feed generation
    ga: 'xxx', // provide to enable google analysis
    siteName: '...', // site name at navbar
    author: '...', // author name at footer
    // enable navbar and add links
    navbar: true,
    nav: [
      { text: 'home', link: '/' },
      { text: 'about', link: '/about/' }
    ],
    // Waline configurations: https://waline.js.org/reference/client.html
    // note:
    // 1. `el` are already taken care and will be ignored
    // 2. `visitor` is supported
    comment: {
      serverURL: 'https://xxx'
    }
  },
  // ...
}
```
## Layouts

FYI: [Custom Layout for Specific Pages](https://vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages)

### Default

Default layout for normal articles that including a comment area.

### Page

Almost the same as default but without comment.

### Archive

Display an article archive base on the folder structure or `archive` param in YAML frontmatter.

For example: if you place a `README.md` with `layout: Archive` inside `posts` folder, then it will content all articles inside `posts` folder. You can also place it under root folder with `postsDir: '/posts'` frontmatter (Regex is supported).

### Pager

Display and article pager with excerpts, you probably want to use this on the home page.

* `postsDir` is also supported here
* add `readMore: false` front matter if you don't want the read more button to appear for specify post

## Changelog

See [releases](https://github.com/wxsms/vuepress-theme-mini/releases).

## License

MIT