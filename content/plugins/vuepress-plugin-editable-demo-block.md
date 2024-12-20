---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/20736207?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM0NDAsIm5iZiI6MTczNDY3MjI0MCwicGF0aCI6Ii91LzIwNzM2MjA3In0.oMqfZgzYJmGZFHcAePaWZSIxTKSsk39xdYrVXt8BmtU&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: Clfeng
bugs: https://github.com/clfeng/vuepress-editable-demo-block/issues
category: plugin
date: '2021-10-31T09:56:18.140Z'
deprecated: false
description: Editable demo and code plugin for vuepress
downloads: ~
homepage: https://github.com/clfeng/vuepress-editable-demo-block#readme
keywords:
  - vue
  - code
  - demo
  - vuepress
  - editable-demo-code
  - documentation
license: MIT License
maintainers:
  - email: 18813292005@163.com
    username: clfeng
name: vuepress-plugin-editable-demo-block
npm: https://www.npmjs.com/package/vuepress-plugin-editable-demo-block
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: 18813292005@163.com
    username: clfeng
repository: https://github.com/clfeng/vuepress-editable-demo-block
score: 0.48424893344458775
stars: 8
unstable: true
version: 0.1.2
watchers: 8

---

# vuepress-plugin-editable-demo-block
The plugin is used to help you add vue examples when writing a document. 
Using this plugin, your users can easily modify your examples.
With the editable functions your user can understand your example better.

## Feature
- display code and examples
- real-time rendering
- only support vue

![examples](./examples.gif)


### Install
```
// npm 
npm i vuepress-plugin-editable-demo-block

// yarn 
yarn add vuepress-plugin-editable-demo-block
```

### Usage 
```
// docs/.vuepress/config.js
module.exports = {
  plugins: [
    require('vuepress-plugin-editable-demo-block'),
  ],
}
```

### custome editable-demo-block component's behavior
```
// docs/.vuepress/enhanceApp.js
export default ({
  Vue, 
}) => {
  Vue.prototype.$editableDemoBlockCfg = {
    runSuccessTip: function () { // render suncess tip function
      console.log('run success');
    },
    runFailTip: function () { // // render fail tip function
      this.$message.error('run fail');
    },
    copySuccessTip: () => {
      console.log('copy success');
    },
    hideText: 'hide code', // tip text when code is hide
    showText: 'show code', // tip text when code is show
  }
}
```

### Start
Write the following code in the Markdown file:

```
::: demo 
\``` <= delete start backslash
<template>
  <div class="examples-button">
    <p>{{ explain }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      explain: 'display button component'
    }
  }
}
</script>
\``` <= delete start backslash
:::

```

![demo_code](demo_code.png)

### run examples
`yarn install`

`cd examples && yarn install && yarn dev`

