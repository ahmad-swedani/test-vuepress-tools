---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/41458459?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzQwNDAsIm5iZiI6MTczNDY3Mjg0MCwicGF0aCI6Ii91LzQxNDU4NDU5In0.fP-NQD1aY_gWK4rX-R-Q9O-Lo2ueDWdNPcgwNlAijJk&v=4
  email: ~
  name: ~
  url: ~
  username:
    email: yuan.zx@outlook.com
    name: Celeste
bugs: https://github.com/nsznsznjsz/vuepress-plugin-latest-articles/issues/new
category: plugin
date: '2021-01-22T07:16:52.475Z'
deprecated: false
description: latest-articles plugin for vuepress
downloads: ~
homepage: https://github.com/nsznsznjsz/vuepress-plugin-latest-articles#readme
keywords:
  - vue
  - vueprss
  - blog
license: MIT License
maintainers:
  - email: nsznsznjsz@outlook.com
    username: nsznsznjsz
name: vuepress-plugin-latest-articles
npm: https://www.npmjs.com/package/vuepress-plugin-latest-articles
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: nsznsznjsz@outlook.com
    username: nsznsznjsz
repository: https://github.com/nsznsznjsz/vuepress-plugin-latest-articles
score: 0.45367607203813176
stars: 0
unstable: false
version: 1.1.1
watchers: 0

---

# VuePress Latest articles

> Latest arricles plugin for [VuePress](https://github.com/vuejs/vuepress)

Show the latest n articles in your Vuepress blog.

## Install

Install dependence.

```bash
npm install vuepress-plugin-latest-articles
# OR
yarn add vuepress-plugin-latest-articles
```

## Usage

Add plugin in your vuepress config.

```js
// .vuepress/config
module.exports = {
  plugins: [
    "latest-articles"
  ]
}
```

Now, you can [using it in Markdown](https://vuepress.vuejs.org/guide/using-vue.html)!

Simple:
```html
<LatestArticles />
```

More:
```html
<LatestArticles title="My Title" titleTag="h2" number="10" />
```

Additionally, all pages will published. If there are some pages that you don't want to publish, you can add an item in frontmatter:
```yaml
---
publish: false
---
``` 

## Config

### title

- **type**: `String`
- **default**: `"Latest Articles" | "近期文章"`

The title.

### titleTag

- **type**: `String`
- **default**: `"h2"`

The tag of title element.

### number

- **type**: `Number`
- **default**: `10`

The number of articles.
