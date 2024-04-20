---
author:
  avatar: https://avatars.githubusercontent.com/u/20827947?v=4
  email: ~
  name: ~
  url: ~
  username:
    name: wk
bugs: https://github.com/weekdawn/vuepress-plugin-rpurlcopy/issues
category: plugin
date: '2022-03-26T07:50:52.968Z'
deprecated: false
description: Replace VuePress Blog URL of Pages and NavLinks.
downloads: ~
homepage: https://github.com/weekdawn/vuepress-plugin-rpurlcopy#readme
keywords:
  - vuepress
  - '''replace'
  - url'
  - sidebar
  - navlinks
license: ~
maintainers:
  - email: weekdawn@qq.com
    username: weekdawn
name: vuepress-plugin-rpurlcopy
npm: https://www.npmjs.com/package/vuepress-plugin-rpurlcopy
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: weekdawn@qq.com
    username: weekdawn
repository: https://github.com/weekdawn/vuepress-plugin-rpurlcopy
score: 0.5020052573623268
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# vuepress-plugin-rpurl

## install
```bash
npm install vuepress-plugin-rpurlcopy -D
```

## Use
### Default
```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

module.exports = {
  plugins: ['rpurl']
}
```

The Default configuration is for vuepress-plugin-autobar, it clean the cumbersome parameter.

Default Rule: `[[/nav[\.\-_]*\d*[\.\-_]*/gi, ''], [/\d+[\.\-_]*/gi, '']]`

* before use:
`/nav.10.js/10-core/mian-xiang-dui-xiang/mian-xiang-dui-xiang.html`

* after use:
`/js/core/mian-xiang-dui-xiang/mian-xiang-dui-xiang.html`

### Customize
You can customize your replace rules. Example:

```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

module.exports = {
  plugins: ['rpurl', [/regex/i, 'new world']]
  // or multiple rules
  // plugins: ['rpurl', [[/regex1/, 'world'], [/regex2/gi, 'world2']]]
}
```

