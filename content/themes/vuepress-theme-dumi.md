---
author:
  avatar: https://avatars.githubusercontent.com/u/30490814?v=4
  email: ~
  name: ~
  url: ~
  username:
    email: wukd@live.com
    name: Stephen Woo
    username: wukd
bugs: https://github.com/wukd/vuepress-dumi/issues
category: theme
date: '2022-04-08T01:48:20.616Z'
deprecated: false
description: 📖 A dumi style theme for VuePress2.
downloads: ~
homepage: https://github.com/wukd/vuepress-dumi#readme
keywords:
  - vuepress-theme
  - dumi
license: MIT License
maintainers:
  - email: wukd@live.com
    username: wukd
name: vuepress-theme-dumi
npm: https://www.npmjs.com/package/vuepress-theme-dumi
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: wukd@live.com
    username: wukd
repository: https://github.com/wukd/vuepress-dumi
score: 0.48661881585090355
stars: 0
unstable: true
version: 0.1.1
watchers: 0

---

<h1 align="center">vuepress-theme-dumi</h1>

📖 A dumi style theme for VuePress2.


## Install

* First of all, install [vuepress v2.x](https://github.com/vuepress/vuepress-next)

* Then install the theme

```bash
$ npm i -D vuepress-theme-dumi
# OR
$ yarn add -D vuepress-theme-dumi
```

## Usage
Write vuepress config

```ts
// .vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    theme: 'vuepress-theme-dumi'
})
```

## Thanks

This repo is inspired by the following projects, Thanks for their great work.

- [dumi](https://github.com/umijs/dumi)
- [@vuepress/theme-default](https://github.com/vuepress/vuepress-next/tree/main/packages/%40vuepress/theme-default)
- [vuepress-theme-dumi](https://github.com/OrekiSH/vuepress-dumi)