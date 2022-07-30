---
author:
  avatar: https://avatars.githubusercontent.com/u/5085501?v=4
  email: null
  name: rqh656418510
  url: null
  username: rqh656418510
bugs: https://github.com/rqh656418510/vuepress-plugin-baidu-seo-next/issues
category: plugin
date: '2022-06-20T02:34:22.013Z'
deprecated: false
description: Baidu SEO plugin for vuepress v2.x
downloads: null
homepage: https://github.com/rqh656418510/vuepress-plugin-baidu-seo-next
keywords:
- vuepress-plugin-baidu-seo-next
- vuepress2
- plugin
- baidu
- tongji
- seo
license: MIT License
maintainers: null
name: vuepress-plugin-baidu-seo-next
npm: https://www.npmjs.com/package/vuepress-plugin-baidu-seo-next
publisher:
  avatar: null
  email: 656418510@qq.com
  name: null
  url: null
  username: rqh656418510
repository: https://github.com/rqh656418510/vuepress-plugin-baidu-seo-next
score: 0.5140879352826927
stars: 0
unstable: false
version: 2.0.0-beta.48.6
watchers: 0

---

# vuepress-plugin-baidu-seo-next

> Baidu SEO plugin for vuepress v2.x

## Install

``` sh
npm install -D vuepress-plugin-baidu-seo-next
```

## Usage

``` js
const { baiduSeoPlugin } = require('vuepress-plugin-baidu-seo-next')

module.exports = {
  plugins: [
    baiduSeoPlugin({
      hm: 'xxxxxxxx',
      ignoreLocal: true
    })
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