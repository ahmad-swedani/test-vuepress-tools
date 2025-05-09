---
author:
  avatar: https://avatars.githubusercontent.com/u/48539483?v=4
  email: 1700011071@pku.edu.cn
  name: Shigma
  url: null
  username: shigma
bugs: https://github.com/vuepress/vuepress-plugin-mathjax/issues
category: plugin
date: '2019-07-02T17:52:51.153Z'
deprecated: false
description: A VuePress plugin which supports TeX syntax in markdown files.
downloads: null
homepage: https://github.com/vuepress/vuepress-plugin-mathjax#readme
keywords:
- vuepress
- vuepress-plugin
- latex
- mathjax
- markdown
license: MIT License
maintainers: null
name: vuepress-plugin-mathjax
npm: https://www.npmjs.com/package/vuepress-plugin-mathjax
publisher:
  avatar: null
  email: 1700011071@pku.edu.cn
  name: null
  url: null
  username: shigma
repository: https://github.com/vuepress/vuepress-plugin-mathjax
score: 0.48673095857061144
stars: 32
unstable: false
version: 1.2.8
watchers: 32

---

# [vuepress-plugin-mathjax](https://vuepress.github.io/plugins/mathjax/)

[![npm](https://img.shields.io/npm/v/vuepress-plugin-mathjax.svg)](https://www.npmjs.com/package/vuepress-plugin-mathjax)
[![CircleCI](https://img.shields.io/circleci/project/github/vuepress/vuepress-plugin-mathjax/master.svg)](https://circleci.com/gh/vuepress/vuepress-plugin-mathjax)

A [VuePress](https://vuepress.vuejs.org/) plugin which supports TeX syntax in markdown files.

## Usage

```bash
npm i vuepress-plugin-mathjax
# OR
yarn add vuepress-plugin-mathjax
```

## Configurations

### target

- **type**: `'svg' | 'chtml'`
- **default**: `'chtml'`

The output of MathJax.

### packages

- **type**: `string | string[]`
- **default**: all the MathJax packages available

The MathJax packages to use.

### macros

- **type**: `{ [key: string]: string | null }`
- **default**: `{}`

Macros will be automatically mixed with built-in macros. To disable a built-in macro, simply set the value to `null` accordingly. Here is a list of all built-in macros:

### presets

- **type**: `string | string[]`
- **default**: `[]`

The preset content to be added. The preset content will automatically be inserted before the TeX code.

### showError

- **type**: `boolean`
- **default**: `process.env.NODE_ENV === 'development'`

Whether to output an error message in the console when a compilation error is encountered.

### cache

- **type**: `false | object`
- **default**: `{}`

[LRU Cache](https://github.com/isaacs/node-lru-cache) Options. If set to `false`, no cache will be used.

## Contribution

Contribution Welcome!
