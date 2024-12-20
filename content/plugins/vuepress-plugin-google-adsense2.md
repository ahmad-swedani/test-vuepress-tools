---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/21698973?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM3NDAsIm5iZiI6MTczNDY3MjU0MCwicGF0aCI6Ii91LzIxNjk4OTczIn0.KRriZKo4cw44p_ZvDMOM5t0mW2dSwGMJ3oGMv-E2dsY&v=4
  email: ~
  name: ~
  url: ~
  username: John60676
bugs: https://github.com/John60676/vuepress-plugin-google-adsense2/issues
category: plugin
date: '2021-03-29T09:37:43.147Z'
deprecated: false
description: VuePress 2 plugin - google-adsense
downloads: ~
homepage: https://github.com/John60676/vuepress-plugin-google-adsense2#readme
keywords:
  - vuepress-plugin
  - vuepress
  - vuepress 2
  - vuepress-next
  - plugin
  - google
  - adsense
license: MIT License
maintainers:
  - email: john60676@qq.com
    username: john60676
name: vuepress-plugin-google-adsense2
npm: https://www.npmjs.com/package/vuepress-plugin-google-adsense2
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: john60676@qq.com
    username: john60676
repository: https://github.com/John60676/vuepress-plugin-google-adsense2
score: 0.4867786688549197
stars: 7
unstable: false
version: 1.0.2
watchers: 7

---

# vuepress-plugin-google-adsense2

English | [简体中文](README-zh_CN.md)

> Note: This plugin is provided for **VuePress 2**

[Google adsense](https://www.google.com/adsense) plugin for VuePress 2, automatically add [Google Ad](<(https://support.google.com/adsense/answer/9261306)>) to your VuePress site.

[![npm](https://img.shields.io/npm/v/vuepress-plugin-google-adsense2.svg)](https://www.npmjs.com/package/vuepress-plugin-google-adsense2) [![GitHub license](https://img.shields.io/github/license/John60676/vuepress-plugin-google-adsense2.svg)](https://github.com/John60676/vuepress-plugin-google-adsense2/blob/master/LICENSE)

## Install

```sh
yarn add -D vuepress-plugin-google-adsense2
# OR
npm install -D vuepress-plugin-google-adsense2
```

## Usage

```js
import googleAdSensePlugin from 'vuepress-plugin-google-adsense2';

module.exports = {
  plugins: [
    googleAdSensePlugin({
      id: 'ca-pub-xxxxxxx',
    }),
  ],
};
```

More plugins usage, see also: [VuePress Plugins](https://vuepress2.netlify.app/reference/plugin-api.html#plugins)

## Options

### id

- Type: `string`

- Details:

  In the code block provided to you by AdSense, find the word `data-ad-client`. The `id` should start with `'ca-pub-'`. You can follow the instructions [here](https://support.google.com/adsense/answer/7584263?hl=en) to find your AdSense code.

  Or you can use **Publisher ID** and add the string `'ca-'` in front.You can follow the instructions [here](https://support.google.com/adsense/answer/105516?hl=en) to find your **Publisher ID**.
