---
author:
  avatar: 'https://avatars.githubusercontent.com/u/23148342?v=4'
  email: ~
  name: ~
  url: ~
  username:
    email: stwangcq@163.com
    name: wst
    username: wangshiting
bugs: 'https://github.com/laobg/vuepress-plugin-dline/issues'
category: plugin
date: '2021-03-01T08:46:53.097Z'
deprecated: false
description: vuepress-theme-plugin
downloads: ~
homepage: 'https://github.com/laobg/vuepress-plugin-dline#readme'
keywords:
  - vuepress
  - theme
  - background
license: Apache License 2.0
maintainers:
  - email: stwangcq@163.com
    username: wangshiting
name: vuepress-plugin-dline
npm: 'https://www.npmjs.com/package/vuepress-plugin-dline'
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: stwangcq@163.com
    username: wangshiting
repository: 'https://github.com/laobg/vuepress-plugin-dline'
score: 0.5063215899197963
stars: 1
unstable: false
version: 1.0.2
watchers: 1

---

# vuepress-plugin-dline
## 预览
[我的博客](https://www.wstee.com)
## 安装
``npm i vuepress-plugin-dline -D``
## 使用
```js
// docs/.vuepres/config.js
module.exports = {
  plugins: [
    [
      'dline',
      {
        zIndex: -1, // 背景层级
        opacity: .9, // 背景透明度
        color: '#666', // 线条颜色 16进制
        count: 166 // 线条密度
      }
    ]
  ]
}

```
