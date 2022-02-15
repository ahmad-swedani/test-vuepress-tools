---
author:
  avatar: https://avatars.githubusercontent.com/u/78192711?v=4
  email: zhangbowang1998@gmail.com
  name: Mr.Hope
  url: https://mrhope.site
  username: vuepress-theme-hope
bugs: https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues
category: plugin
date: '2021-11-15T15:49:50.723Z'
deprecated: false
description: A comment plugin for vuepress
downloads: null
homepage: https://vuepress-theme-hope.github.io/comment/
keywords:
- vuepress-plugin
- vuepress-blog
- comment
- valine
- vssue
- page-info
license: MIT License
maintainers: null
name: '@starzkg/vuepress-plugin-comment'
npm: https://www.npmjs.com/package/%40starzkg%2Fvuepress-plugin-comment
publisher:
  avatar: null
  email: shentuzhigang@qq.com
  name: null
  url: null
  username: starzkg
repository: https://github.com/vuepress-theme-hope/vuepress-theme-hope
score: 0.17976431319061192
stars: 378
unstable: true
version: 1.0.0-beta.14
watchers: 378

---

<!-- markdownlint-disable -->
<p align="center">
  <img width="240" src="https://vuepress-theme-hope.github.io/logo.svg" style="text-align: center;"/>
</p>
<h1 align="center">vuepress-theme-hope</h1>
<h4 align="center">A vuepress theme with tons of features✨ / 一个具有强大功能的 vuepress 主题✨</h4>

[![Author: Mr.Hope](https://img.shields.io/badge/作者-Mr.Hope-blue.svg?style=for-the-badge)](https://mrhope.site) [![License](https://img.shields.io/npm/l/vuepress-theme-hope.svg?style=for-the-badge)](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/LICENSE)

<!-- markdownlint-restore -->

[![Version](https://img.shields.io/npm/v/vuepress-theme-hope/next.svg?style=flat-square&logo=npm) ![Downloads](https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&logo=npm) ![Size](https://img.shields.io/bundlephobia/min/vuepress-theme-hope?style=flat-square&logo=npm)](https://www.npmjs.com/package/vuepress-theme-hope)

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/vuepress-theme-hope/vuepress-theme-hope)

[![DeepScan grade](https://deepscan.io/api/teams/9792/projects/17544/branches/405512/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9792&pid=17544&bid=405512)
![CodeQL](https://github.com/vuepress-theme-hope/vuepress-theme-hope/actions/workflows/codeql-analysis.yml/badge.svg)
[![codecov](https://codecov.io/gh/vuepress-theme-hope/vuepress-theme-hope/branch/main/graph/badge.svg?token=TNYMbGlxQ9)](https://codecov.io/gh/vuepress-theme-hope/vuepress-theme-hope)
![Test theme](https://github.com/vuepress-theme-hope/vuepress-theme-hope/actions/workflows/v2-test.yml/badge.svg)

[![opencollective](https://opencollective.com/vuepress-theme-hope/tiers/badge.svg)](https://opencollective.com/vuepress-theme-hope)

A vuepress theme with tons of features✨ / 一个具有强大功能的 vuepress 主题 ✨

## Warning

Current branch is based on VuePress@v2, and still in ALPHA status. This means that features and api are not solid, and there might be BREAKING CHANGES in future releases.

For stable releasae in v1, please see [v1 branch](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/v1/).

当前分支基于 VuePress@v2，仍处于 Alpha。这意味着功能和 API 尚未固定，在未来的更新中仍可能出现破坏性更改。

稳定 v1 发行版请参见[v1 分支](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/v1/)。

## Details

V2 will come together with _VuePress@v2_, with the power of _vite@v2_ _webpack@v5_ and _vue@v3_.

V2 will be a totally rewrite including:

- All the components will be rewrite with _composition api in vue3_
- All the styles will be mirgate to _sass_

Also we are going to make sure the rewrite one has a better performance!🚀 (no less than 25% increasement)

---

Here is a list of changes:

> Note: All plugin names are in PascalCase and without `vuepress-plugin-` prefix, you should change to `kebab-case` and add the prefix yourself to get the correct plugin name.

## Changes in plugins

- [@mr-hope/components](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/components/README.md)

- [vuepress-plugin-add-this](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/add-this/README.md) ![deprecated](https://img.shields.io/badge/-deprecated-yellow)

- [vuepress-plugin-comment2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/comment2/README.md)

- [vuepress-plugin-copy-code2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/copy-code2/README.md)

- [vuepress-plugin-feed2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/feed2/README.md)

- [vuepress-plugin-md-enhance](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/md-enhance/README.md)

- [vuepress-plugin-photo-swipe](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/photo-swipe/README.md)

- [vuepress-plugin-pwa2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/pwa2/README.md)

- [vuepress-plugin-reading-time2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/reading-time2/README.md)

- [vuepress-plugin-seo2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/seo2/README.md)

- [vuepress-plugin-sitemap2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/sitemap2/README.md)

## New plugins

- [x] Blog2 ![new](https://img.shields.io/badge/-new-brightgreen)

  Blog plugin with better performance

- [x] LightGallery ![new](https://img.shields.io/badge/-new-brightgreen)

  A image viewer plugin for VuePress using [lightGallary](https://www.lightgalleryjs.com/)

  See [LightGallery](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/lightgallery/README.md)

- [x] SassPalette ![new](https://img.shields.io/badge/-new-brightgreen)

  A style system for sass across plugins and theme

  See [SassPalette](https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/sass-palette/README.md)

- [ ] Share2 ![new](https://img.shields.io/badge/-new-brightgreen)

  A new share plugin providing page share.

## Theme changes

- [ ] Pure Mode in theme and all plugins #438 ![new](https://img.shields.io/badge/-new-brightgreen)

- [ ] Dim non focused area #168 ![new](https://img.shields.io/badge/-new-brightgreen)

- [ ] Code block theme config #189 ![new](https://img.shields.io/badge/-new-brightgreen)

- [x] Muti categories support ![new](https://img.shields.io/badge/-new-brightgreen)

- [x] Drop fullscreen feature. ![removed](https://img.shields.io/badge/-removed-red)

  Most visitors do not use this feature.

- [x] Drop themecolor feature ![removed](https://img.shields.io/badge/-removed-red)

  Most visitors do not use this feature.

- [x] Allow I18N Customize ![new](https://img.shields.io/badge/-new-brightgreen)