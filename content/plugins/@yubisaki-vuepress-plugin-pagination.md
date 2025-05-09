---
author:
  avatar: https://avatars.githubusercontent.com/u/43475371?v=4
  email: stickmyc@163.com
  name: "\u5B50\u8083"
  url: null
  username: wuwaki
bugs: https://github.com/Yubisaki/vuepress-plugin-pagination/issues
category: plugin
date: '2019-04-04T03:28:05.647Z'
deprecated: false
description: pagination plugin for vuepress theme yubisaki
downloads: null
homepage: https://github.com/Yubisaki/vuepress-plugin-pagination#readme
keywords:
- vuepress
- vuepress-plugin
license: false
maintainers: null
name: '@yubisaki/vuepress-plugin-pagination'
npm: https://www.npmjs.com/package/%40yubisaki%2Fvuepress-plugin-pagination
publisher:
  avatar: null
  email: stickmyc@163.com
  name: null
  url: null
  username: wuwaki
repository: https://github.com/Yubisaki/vuepress-plugin-pagination
score: 0.3164036626675999
stars: 0
unstable: true
version: 0.1.9
watchers: 0

---

# @yubisaki/vuepress-plugin-pagination

## Install

```bash
npm i @yubisaki/vuepress-plugin-pagination
```

## Usage

```js
module.exports = {
  plugins: ['@yubisaki/vuepress-plugin-pagination']
}
```

## Options

**postsFilter**
- Type: `function`  

- default: 

```js
(pageContext) => pageContext.type === 'post'
```

This function is used to filter pages, the default value filter the pages which type is post

**postsSorter**
- Type: `function`

- default:

```js
(prev, next) => {
  const prevTime = new Date(prev.frontmatter.date).getTime()
  const nextTime = new Date(next.frontmatter.date).getTime()
  return prevTime - nextTime > 0 ? -1 : 1
}
```

This function is used to sort pages, the default value is to sort pages by `page.frontmatter.date`

**perPagePosts**
- Type: `number`

- default: `5`

This option is the count of posts which per page will show

**paginationDir**
- Type: `string`

- default: `page`

This option is the pagination path, such as `xxx.blog/page/1`, `xxx.blog/page/2`

**firstPagePath**
- Type: `string`

- default: `/`

This option is the first pagination path, equivalent to `xxx.blog/page/1`

**layout**
- Type: `string`

- default: `Layout`

This option is the layout wich pagination page will be used

## example

```js
module.exports = {
  plugins: ['@yubisaki/pagination', {
    postsFilter,
    postsSorter,
    perPagePosts,
    paginationDir,
    firstPagePath,
    layout
  }]
}
```

## What can you get?

`Vue.computed.$pagination`: The property support pagination data

`$pagination` has the below property:

- `all`: All pages

- `pages`: The Array of pagination

- `length` The length of the `pages` property

- `currentIndex`: The current page index

- `posts`: The posts of the current page 

- `hasPrev`: If the current post has previous post

- `hashNext`: If the current post has next post

- `prevLink`: The link of the previous page

- `nextLink`: The link of the next page