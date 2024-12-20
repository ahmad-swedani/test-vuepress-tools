---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/16188742?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM4NjAsIm5iZiI6MTczNDY3MjY2MCwicGF0aCI6Ii91LzE2MTg4NzQyIn0.6KAOtY10cqlsHXiLrzkVK-XaXgxGJKq-ZcZjx3JTBg4&v=4
  email: ~
  name: ~
  url: ~
  username:
    email: ynublow@gmail.com
    name: LinFeng1997
    username: blow
bugs: https://github.com/vuejs/vuepress/issues
category: plugin
date: '2019-01-22T15:02:47.463Z'
deprecated: false
description: export-site plugin for vuepress
downloads: ~
homepage: https://github.com/LinFeng1997/vuepress-plugin-export-site#readme
keywords:
  - documentation
  - vue
  - vuepress
  - generator
license: MIT License
maintainers:
  - email: ynublow@gmail.com
    username: blow
name: vuepress-plugin-export-site
npm: https://www.npmjs.com/package/vuepress-plugin-export-site
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: ynublow@gmail.com
    username: blow
repository: https://github.com/LinFeng1997/vuepress-plugin-export-site
score: 0.416118630775141
stars: 3
unstable: true
version: 1.0.0-rc.2
watchers: 3

---

# vuepress-plugin-export-site

> export-site plugin for vuepress

## Install
```
npm i vuepress-plugin-export-site
```

## Usage
```
module.exports = {
  plugins: [
  ['vuepress-plugin-export-site', {
     extension: 'pdf'
  }]
  ]
}
```

## Options

1. extension

generator file type.such as pdf.

2. pageReorganization

page reorganization function:
```javascript
{
  extension: 'pdf',
  pageReorganization: pages => pages.slice(0,5)
}
```
