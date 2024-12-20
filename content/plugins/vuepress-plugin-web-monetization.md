---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/8433587?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM4MDAsIm5iZiI6MTczNDY3MjYwMCwicGF0aCI6Ii91Lzg0MzM1ODcifQ._vCIbbMlKAkPoaIW0NHIT5b-qQWMMmVGYxBTGInzkyo&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: Peter Thaleikis
bugs: https://github.com/spekulatius/vuepress-plugin-web-monetization/issues
category: plugin
date: '2020-06-12T10:28:45.920Z'
deprecated: false
description: Monetize your VuePress site using web-monetization
downloads: ~
homepage: https://peterthaleikis.com
keywords:
  - vuepress
  - vuepress-plugin
  - plugin
  - monetization
  - web-monetization
license: MIT License
maintainers:
  - email: peter.thaleikis@gmail.com
    username: spekulatius
name: vuepress-plugin-web-monetization
npm: https://www.npmjs.com/package/vuepress-plugin-web-monetization
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: peter.thaleikis@gmail.com
    username: spekulatius
repository: https://github.com/spekulatius/vuepress-plugin-web-monetization
score: 0.4602263876255699
stars: 14
unstable: true
version: 0.0.2
watchers: 14

---

# VuePress Plugin Web-Monetization

Adds a web-monetization meta tag to your [VuePress](https://github.com/vuejs/vuepress) website. This allows you to monetize your content using the [web-monetization standard](https://webmonetization.org/).


## Installation

```bash
npm install vuepress-plugin-web-monetization

# or

yarn add vuepress-plugin-web-monetization
```


## Usage

You will need to register the plugin with your VuePress website:

```js
plugins: {
    'web-monetization': {
        'address': '$ilp.uphold.com/DrRw6MnEEqBB'
    }
}
```

This includes the address as an optional parameter (here: `$ilp.uphold.com/DrRw6MnEEqBB`). You can also define the address as part of the frontmatter:

```
---
monetization: "$ilp.uphold.com/DrRw6MnEEqBB"
---
```


## Privacy-friendly tracking for VuePress?

If you value privacy, you might like this [VuePress plugin for Umami](https://github.com/spekulatius/vuepress-plugin-umami).


## License

This package is released under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
