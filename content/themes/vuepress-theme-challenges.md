---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/5863590?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM4MDAsIm5iZiI6MTczNDY3MjYwMCwicGF0aCI6Ii91LzU4NjM1OTAifQ.oDi764wir-7lS8GrPQneAhzLgdrLhyGM0IJHlxWBcZM&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: Nico De Witte
bugs: https://github.com/BioBoost/vuepress-theme-challenges/issues
category: theme
date: '2020-02-03T16:49:05.429Z'
deprecated: false
description: VuePress theme for programming challenges
downloads: ~
homepage: https://github.com/BioBoost/vuepress-theme-challenges#readme
keywords:
  - vuepress
  - programming
  - challenges
  - vives
license: ~
maintainers:
  - email: bioboost@gmail.com
    username: bioboost
name: vuepress-theme-challenges
npm: https://www.npmjs.com/package/vuepress-theme-challenges
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: bioboost@gmail.com
    username: bioboost
repository: https://github.com/BioBoost/vuepress-theme-challenges
score: 0.22614991386593378
stars: 0
unstable: true
version: 0.0.1
watchers: 0

---

# VuePress Theme Challenges

Initial test of trying to create theme for VuePress for programming challenges for some of my courses.

## Setup

Install the theme

```bash
npm install --save vuepress-theme-challenges
```

Next add theme to config:

```js
module.exports = {
  title: '...................',
  description: '...................',,
  theme: 'vuepress-theme-challenges',
  themeConfig: {
  }
}
```

## Example

Add following front-matter to your challenge README:

```md
---
name: Biggest Number
description: Biggest number out of 3.
details: ./07_making_decisions/biggest_number/README.md
difficulty: Medium
solution: false
unitTests: true
keywords: operators
solved: false
notes:
---
```
