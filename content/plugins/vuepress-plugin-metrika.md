---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/4928316?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM5ODAsIm5iZiI6MTczNDY3Mjc4MCwicGF0aCI6Ii91LzQ5MjgzMTYifQ.ZE3Sk7_Coa4CRdxcE2zNFl439Rbj9gdS9U7BAOlwQpE&v=4
  email: ~
  name: ~
  url: ~
  username:
    email: hi@teners.me
    name: Sergey Sokolov
bugs: https://github.com/teners/vuepress-plugin-metrika
category: plugin
date: '2021-07-20T15:09:02.964Z'
deprecated: false
description: Yandex Metrika plugin for VuePress
downloads: ~
homepage: https://github.com/teners/vuepress-plugin-metrika#readme
keywords:
  - vuepress
  - plugin
  - yandex
  - metrika
  - яндекс
  - метрика
license: MIT License
maintainers:
  - email: dmemory7@ya.ru
    username: teners
name: vuepress-plugin-metrika
npm: https://www.npmjs.com/package/vuepress-plugin-metrika
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: dmemory7@ya.ru
    username: teners
repository: https://github.com/teners/vuepress-plugin-metrika
score: 0.40947803875075506
stars: 3
unstable: false
version: 1.0.3
watchers: 3

---

# Yandex Metrika VuePress plugin

![Version](https://img.shields.io/npm/v/vuepress-plugin-metrika)
![License](https://img.shields.io/npm/l/vuepress-plugin-metrika)

Integrate [Yandex.Metrika](https://metrika.yandex.ru/) into your
[VuePress](http://vuepress.vuejs.org) app with a few configuration lines 🔧

## Install

From your VuePress project directory run

```shell
yarn add --dev --exact vuepress-plugin-metrika
```

## Usage

Add the following lines to the `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    ...
    [
      'metrika',
      {
        counter: 'XXXXXXX',
        config: {...},
      },
    ],
  ]
}
```

where `XXXXXXX` is your Metrika counter, and `config` is an optional parameter
with the following defaults:

```js
{
  accurateTrackBounce: true,
  clickmap: true,
  trackLinks: true,
  webvisor: false
}
```

[See more](https://yandex.ru/support/metrica/code/counter-initialize.html)
about Yandex.Metrika configuration options.

And you're good to go! 🚀 Build your VuePress site as usual
and enjoy your analytics 📈
