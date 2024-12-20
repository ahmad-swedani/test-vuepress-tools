---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/33735047?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM0NDAsIm5iZiI6MTczNDY3MjI0MCwicGF0aCI6Ii91LzMzNzM1MDQ3In0._VuxhqTwPqbLazwufeT4Rv4TouLSulVc2pU8kFgBSGg&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: Justin Kimbrell
bugs: https://github.com/actengage/vuepress-plugin-template-constants/issues
category: plugin
date: '2020-05-13T18:38:39.686Z'
deprecated: false
description: >-
  A Vuepress plugin that adds the contents of package.json to global template
  context.
downloads: ~
homepage: https://github.com/actengage/vuepress-plugin-template-constants#readme
keywords:
  - Vuepress
  - package.json
  - version
license: ~
maintainers:
  - email: jkimbrell@actengage.com
    username: actengage
name: vuepress-plugin-template-constants
npm: https://www.npmjs.com/package/vuepress-plugin-template-constants
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: jkimbrell@actengage.com
    username: actengage
repository: https://github.com/actengage/vuepress-plugin-template-constants
score: 0.24662332513446403
stars: 0
unstable: true
version: 0.2.1
watchers: 0

---

# Vuepress Template Constants

The purpose of this plugin is to provide a way to define constants that are
parsed before markdown and template components are rendered. This allows dynamic
variables, like package.json version numbers, to be inserted into code examples,
and parsed BEFORE anything is rendered.

## Installation

NPM

    npm install vuepress-plugin-template-constants --save-dev

Yarn

    yarn add vuepress-plugin-template-constants

## Basic Usage

``` js
// .vuepress/config.js

module.exports = {
    plugins: [
        ['vuepress-plugin-template-constants', {
            first: 'Benjamin',
            last: 'Franklin',
            founder: true,
            parents: {
                father: 'Josiah Franklin',
                mother: 'Abiah Folger'
            },
            dates: [
                'October 18, 1785',
                'November 5, 1788'
            ]
        }]
    ]
};
```

*Lodash Templates are used to parse variables.*

``` js
<%= first %> // outputs: Benjamin
<%= last %> // outputs: Franklin
<%= founder ? 'Yes' : 'No' %> // outputs: Yes
<%= parents.mother %> // outputs: Abiah Folger
<%= parents.dates[1] %> // outputs: November 5, 1788
```

## Including Package.json Constants

``` js
// .vuepress/config.js

module.exports = {
    plugins: [
        ['vuepress-plugin-template-constants', {
            pkg: require(path.resolve('package.json'))
        }]
    ]
};
```

```
https://cdn.jsdelivr.net/npm/some-library-goes-here@<%= pkg.version %>/dist/SomeLibraryGoesHere.min.js
```

