---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/5085501?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM1NjAsIm5iZiI6MTczNDY3MjM2MCwicGF0aCI6Ii91LzUwODU1MDEifQ.6b6jvrZ8BebyDDreFeAkDRQZR_7JLA1WUbcyoRz1kWg&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: rqh656418510
bugs: https://github.com/rqh656418510/vuepress-plugin-baidu-seo/issues
category: plugin
date: '2022-06-20T02:55:28.754Z'
deprecated: false
description: Baidu SEO plugin for vuepress v1.x
downloads: ~
homepage: https://github.com/rqh656418510/vuepress-plugin-baidu-seo
keywords:
  - vuepress
  - plugin
  - baidu
  - tongji
  - seo
license: MIT License
maintainers:
  - email: 656418510@qq.com
    username: rqh656418510
name: vuepress-plugin-baidu-seo
npm: https://www.npmjs.com/package/vuepress-plugin-baidu-seo
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: 656418510@qq.com
    username: rqh656418510
repository: https://github.com/rqh656418510/vuepress-plugin-baidu-seo
score: 0.4822847300877283
stars: 0
unstable: true
version: 0.0.3
watchers: 0

---

# vuepress-plugin-baidu-seo

> Baidu SEO plugin for vuepress v1.x

## Install

``` bash
$ yarn add -D vuepress-plugin-baidu-seo

# or

$ npm install -D vuepress-plugin-baidu-seo
```

## Usage

``` js
module.exports = {
  plugins: [
    ['vuepress-plugin-baidu-seo', {
      ignoreLocal: true,
      hm: 'xxxxxxx'
    }]
  ]
}
```

## Options

### Baidu Tongji

#### hm

- Type: `String`
- Default: `undefined`
- Description: the code of baidu tongji

#### ignoreLocal

- Type: `Boolean`
- Default: `false`
- Description: ignore `127.0.0.1` and `localhost` access for baidu tongji