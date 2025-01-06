---
author:
  avatar: https://avatars.githubusercontent.com/u/17905150?v=4
  email: ~
  name: ~
  url: ~
  username:
    email: ikangxu@outlook.com
    name: IKangXu
bugs: https://github.com/IKangXu/vuepress-plugin-rss/issues
category: plugin
date: '2020-06-03T03:24:03.335Z'
deprecated: false
description: rss plugin for vuepress-theme-ic
downloads: ~
homepage: https://github.com/IKangXu?tab=repositories
keywords:
  - vuepress-theme-ic
  - rss
license: MIT License
maintainers:
  - email: ikangxu@qq.com
    username: kangxu
name: '@ikangxu/vuepress-plugin-rss'
npm: https://www.npmjs.com/package/%40ikangxu%2Fvuepress-plugin-rss
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: ikangxu@qq.com
    username: kangxu
repository: https://github.com/IKangXu/vuepress-plugin-rss
score: 0.4072754386800855
stars: 0
unstable: true
version: 0.0.4
watchers: 0

---

```js
[require('@ikangxu/vuepress-plugin-rss'), {
  base_url: '/', // required
  site_url: 'http://ikangxu.cn', // required
  copyright: 'IKangXu 2020', // optional
  // filter some post
  filter: (frontmatter) => { return [true|false] },
  // How much articles
  count: 20
}]
```