---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/36102904?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM4MDAsIm5iZiI6MTczNDY3MjYwMCwicGF0aCI6Ii91LzM2MTAyOTA0In0.tBgRSqTgY9kXYtBRZZ4pYxe_ixrJFD_dyrLr7uesI-w&v=4
  email: ~
  name: ~
  url: ~
  username:
    email: bougie.liu@qq.com
    name: Bougie
    url: https://www.bougieblog.cn
bugs: https://github.com/bougieL/vuepress-plugin-rss/issues
category: plugin
date: '2022-01-10T07:43:24.178Z'
deprecated: false
description: >-
  Generate `rss.xml` file with `content:encoded` for rss client pretty preview.
  Reference https://www.bougieblog.cn/rss.xml for example.
downloads: ~
homepage: https://github.com/bougieL/vuepress-plugin-rss
keywords:
  - vuepress
  - plugin
  - rss
  - feed
license: MIT License
maintainers:
  - email: 1742070326@qq.com
    username: bougie
name: vuepress-plugin-rss-feed
npm: https://www.npmjs.com/package/vuepress-plugin-rss-feed
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: 1742070326@qq.com
    username: bougie
repository: https://github.com/bougieL/vuepress-plugin-rss
score: 0.38531069169429566
stars: 3
unstable: false
version: 1.0.1
watchers: 3

---

# vuepress-plugin-rss-feed

Generate `rss.xml` file with `content:encoded` for rss client pretty preview. Reference [rss.xml](./rss.xml) for example.

## Usage

```bash
npm i vuepress-plugin-rss-feed -D
```

Add plugin to your `.vuepress/config.js`

```js
module.exports = {
  plugins: [
    // other plugins
    [
      'rss-feed',
      {
        username: 'Bougie',
        hostname: 'https://www.bougieblog.cn',
        selector: '.content__post', // extract content to content:encoded
        count: 10,
        filter: (page) => /^blog/.test(page.relativePath),
      },
    ],
  ],
}
```

## License

[MIT](./LICENSE)
