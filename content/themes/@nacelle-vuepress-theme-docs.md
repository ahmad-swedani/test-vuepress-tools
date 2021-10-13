---
author:
  avatar: 'https://avatars.githubusercontent.com/u/55663384?v=4'
  email: ~
  name: ~
  url: ~
  username:
    name: Nacelle Dev Team
bugs: 'https://github.com/getnacelle/vuepress-theme-docs/issues'
category: theme
date: '2021-09-10T13:16:27.026Z'
deprecated: false
description: Extension of vuepress default theme for Nacelle docs
downloads: ~
homepage: 'https://github.com/getnacelle/vuepress-theme-docs'
keywords:
  - documentation
  - generator
  - vue
  - vuepress
  - theme
  - nacelle
license: ~
maintainers:
  - email: darlene.zouras@getnacelle.com
    username: dzouras
  - email: ignacio@getnacelle.com
    username: badiolaignacio
  - email: levi@leviwhalen.com
    username: leviwhalen
  - email: andrew@shopelf.agency
    username: andrew-nacelle
  - email: get@nickrichmond.dev
    username: nwrichmond
  - email: brianvanderson@gmail.com
    username: brianvanderson
  - email: cbodtorf@gmail.com
    username: cbodtorf
  - email: johnstonbl01@gmail.com
    username: johnstonbl01
  - email: kquemener1@gmail.com
    username: krisq
  - email: curtis@getnacelle.com
    username: curbol
  - email: irnoble59@gmail.com
    username: irnoble
  - email: jon@supraset.com
    username: jongeyer
  - email: alex@getnacelle.com
    username: alexnacelle
  - email: jeff@getnacelle.com
    username: nacelle-bot
  - email: austindavis4@gmail.com
    username: austin1237
name: '@nacelle/vuepress-theme-docs'
npm: 'https://www.npmjs.com/package/%40nacelle%2Fvuepress-theme-docs'
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: darlene.zouras@getnacelle.com
    username: dzouras
repository: 'https://github.com/getnacelle/vuepress-theme-docs'
score: 0.45820455098708057
stars: 0
unstable: false
version: 1.2.0
watchers: 0

---

# Nacelle Vuepress Documentation Theme

Theme used for the [Nacelle documentation](https://docs.getnacelle.com/).

## Getting Started

### Install the theme

```
npm i @nacelle/vuepress-theme-docs -S
```

### Add to Vuepress config

In your Vuepress theme config:

```js
module.exports = {
  // default vuepress config settings
  theme: '@nacelle/vuepress-theme-docs',
  themeConfig: {
    // vuepress default theme settings
    logo: 'path/to/header-logo.svg',
    footerLogo: 'path/to/footer-logo.svg',
  },
}
```

## Development

After cloning the theme project, navigate to the documentation project. Once there, link the cloned theme project. Example:

```
cd docs-project
npm link ../path/to/theme
```

You can now start the documentation project using the Nacelle theme. More information about theme inheritance and development can be found [here](https://vuepress.vuejs.org/theme/inheritance.html).
