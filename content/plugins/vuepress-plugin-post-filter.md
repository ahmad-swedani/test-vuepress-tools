---
author:
  avatar: https://avatars.githubusercontent.com/u/41458459?v=4
  email: ~
  name: ~
  url: ~
  username: yzx9
bugs: https://github.com/nsznsznjsz/vuepress-plugin-post-filter/issues/new
category: plugin
date: '2021-02-10T02:29:12.426Z'
deprecated: false
description: Post filter plugin for vuepress-next
downloads: ~
homepage: https://github.com/nsznsznjsz/vuepress-plugin-post-filter#readme
keywords:
  - vuepress-plugin
  - vuepress
  - plugin
  - filter
license: MIT License
maintainers:
  - email: nsznsznjsz@outlook.com
    username: nsznsznjsz
name: vuepress-plugin-post-filter
npm: https://www.npmjs.com/package/vuepress-plugin-post-filter
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: nsznsznjsz@outlook.com
    username: nsznsznjsz
repository: https://github.com/nsznsznjsz/vuepress-plugin-post-filter
score: 0.4558340822741779
stars: 1
unstable: false
version: 1.0.2
watchers: 1

---

# Vuepress-plugin-post-filter

> Post filter plugin for vuepress-next

## Usage

```bash
npm install vuepress-plugin-post-filter
# OR
yarn add vuepress-plugin-post-filter
```

```js
// .vueprss/config.ts
export default {
  plugins: ["vuepress-plugin-post-filter"]
}
```

Set frontmatter in your draft:

```yaml
---
draft: true
# OR
published: false
---
```

Now, your draft will not publish when building.


## Config

```js
// .vueprss/config.ts
export default {
  plugins: [
    [
      "vuepress-plugin-post-filter",
      {
        frontmatter: {
          draft: true,
          published: false
        },
        prodOnly: true,
      }
    ]
  ]
}
```
