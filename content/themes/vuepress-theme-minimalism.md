---
author:
  avatar: https://avatars.githubusercontent.com/u/20726419?v=4
  email: null
  name: null
  url: null
  username: sogud
bugs: https://github.com/sogud/vuepress-theme-minimalism/issues
category: theme
date: '2022-05-23T14:31:45.703Z'
deprecated: false
description: theme for vuepress
downloads: null
homepage: https://github.com/sogud/vuepress-theme-minimalism#readme
keywords:
- vuepress-theme
- vue
- vuepress
- theme
- hexo
- blog
- markdown
license: MIT License
maintainers: null
name: vuepress-theme-minimalism
npm: https://www.npmjs.com/package/vuepress-theme-minimalism
publisher:
  avatar: null
  email: github.sogud@outlook.com
  name: null
  url: null
  username: sogud
repository: https://github.com/sogud/vuepress-theme-minimalism
score: 0.6077701762478156
stars: 19
unstable: false
version: 1.1.9
watchers: 19

---

# vuepress-theme-minimalism

![NPM](https://img.shields.io/npm/l/vuepress-theme-minimalism) <a href="https://www.npmjs.com/package/vuepress-theme-minimalism"> <img src="https://img.shields.io/npm/v/vuepress-theme-minimalism" alt=""></a> <a href="https://www.npmjs.com/package/vuepress-theme-minimalism"> <img src="https://img.shields.io/npm/dt/vuepress-theme-minimalism" alt=""></a>

## introduction

A minimalist vuepress theme, compatible with hexo YAML front matter syntax.

example：https://github.com/sogud/vuepress-theme-minimalism

preview：https://sogud.github.io

## Quick Start

#### install

```
npm i -S vuepress-theme-minimalism
or
yarn add vuepress-theme-minimalism
```

- Use theme in config.js.

```js
module.exports = {
  theme: 'vuepress-theme-minimalism',
  base: '/',
  ...
}
```

- new posts folder, article written in posts directory, as the topic is compiled based on the content under the posts folder. Note: Folder names are case-sensitive.

#### Directory Structure

```
.
├── docs
│   ├── .vuepress #vuepress configuration folder
│   ├── posts #Article Storage Folder
├── package.json
└── yarn.lock
```

#### write

Start writing a blog that is written in the correct format as follows.：

```markdown
---
title: vuepress
tags:
  - vuepress
  - markdown
---

# vuepress-theme-minimalism

## introduction

A minimalist vuepress theme, compatible with hexo YAML front matter syntax.
```

## Theme configuration

#### Theme color configuration

New styles folder in .vuepress directory, new palette.styl Configure css variables.

The following color configurations are currently supported.

```stylus
$accentColor = #31837c
$textColor = #2c3e50
$nprogressColor = #399c9c
```

#### config.js configuration

```js
module.exports = {
  base: "/",
  title: "sogud'blog",
  theme: "vuepress-theme-minimalism",
  themeConfig: {
    nav: [
      {
        text: "文档",
        link: "/list/"
      },
      {
        text: "标签",
        link: "/tag/"
      },
      {
        text: "Github",
        link: "https://github.com/sogud"
      }
    ]
    footer: {
      contact: "联系",
      links: [
        {
          text: "GitHub",
          link: 'https://github.com/sogud'
        },
        {
          text: "Twitter",
          link: ""
        }
      ]
    },
    comment: {
      service: "disqus",
      shortname: "1net-1"
    },
  },
  markdown: {
    // lineNumbers: true
  }
}
```
