---
author:
  avatar: 'https://avatars.githubusercontent.com/u/8642?v=4'
  email: ~
  name: ~
  url: ~
  username:
    email: awwaiid@thelackthereof.org
    name: Brock Wilcox
    username: awwaiid
bugs: 'https://github.com/awwaiid/vuepress-plugin-graphviz/issues'
category: plugin
date: '2020-08-10T12:47:53.490Z'
deprecated: false
description: A Vuepress plugin providing easy Graphviz diagramming
downloads: ~
homepage: 'https://github.com/awwaiid/vuepress-plugin-graphviz#readme'
keywords:
  - documentation
  - vue
  - vuepress
  - graphviz
  - diagrams
  - plugin
license: ~
maintainers:
  - email: awwaiid@thelackthereof.org
    username: awwaiid
name: vuepress-plugin-graphviz
npm: 'https://www.npmjs.com/package/vuepress-plugin-graphviz'
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: awwaiid@thelackthereof.org
    username: awwaiid
repository: 'https://github.com/awwaiid/vuepress-plugin-graphviz'
score: 0.5333558091198035
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# VuePress Plugin for graphviz (Viz.js)

> Use graphviz Diagrams in VuePress

This [VuePress](https://vuepress.vuejs.org) plugin provides a global component wrapping Graphviz (via [Viz.js fork by aduh95](https://github.com/aduh95/viz.js). The plugin is designed to work with VuePress v1.x.

Main documentation site is at https://awwaiid.github.com/vuepress-plugin-graphviz.

## Installation

You can install it with

``` shell
yarn add -D vuepress-plugin-graphviz
```

or

``` shell
npm install --save-dev vuepress-plugin-graphviz
```

Then you just need to register the plugin in your `.vuepress/config.js`:

``` js
module.exports = {
    // ...
    plugins: [
        'vuepress-plugin-graphviz'
    ]
    // ...
}
```

## Usage

The recommended usage is to place your graphviz diagrams inside
a fenced code block with the language 'graphviz':

    ```graphviz
    digraph {
      A -> B -> C
    }
    ```

## Credits

This work is based directly off of [vuepress-plugin-mermaidjs](https://github.com/eFrane/vuepress-plugin-mermaidjs).
