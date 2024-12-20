---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/55730911?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzMzODAsIm5iZiI6MTczNDY3MjE4MCwicGF0aCI6Ii91LzU1NzMwOTExIn0.1jYvnZz8UUNxOe4MbfMX-iuYrA9d2n_W4YRA6qGjbO0&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: ifuture
bugs: https://github.com/ifuture-pro/vuepress-plugin-rss/issues
category: plugin
date: '2019-11-11T03:54:58.882Z'
deprecated: false
description: atom rss podcast
downloads: ~
homepage: https://github.com/ifuture-pro/vuepress-plugin-rss#readme
keywords:
  - atom
  - rss
  - podcast
  - itunes
license: ~
maintainers:
  - email: strongrobot@163.com
    username: ifuture
name: '@ifuture/vuepress-plugin-rss'
npm: https://www.npmjs.com/package/%40ifuture%2Fvuepress-plugin-rss
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: strongrobot@163.com
    username: ifuture
repository: https://github.com/ifuture-pro/vuepress-plugin-rss
score: 0.27887738035515197
stars: 2
unstable: false
version: 1.0.2
watchers: 2

---

vuepress-plugin-rss
-----------

The feed for vuepress

Support Atom; RSS2; Itunes podcast. 

Install

```bash
npm install @ifuture/vuepress-plugin-rss --save-dev
```
or
```bash
yarn add @ifuture/vuepress-plugin-rss -D
```

.vuepress/config.js

```js
module.exports = {
  "plugins": [
      ['@ifuture/vuepress-plugin-rss', {
        type:['atom','rss2','podcast'],
        limit: 20,
        feedOptions : {
          title: 'site title',
          description: 'description',
          site_url: 'https://note.ifuture.pro',
          image_url: 'https://note.ifuture.pro/head.png',
          author: 'author',
          managingEditor: 'author',
          webMaster: 'author',
          copyright: 'author',
          language: 'en'
        }
      }]
    ]
}
```