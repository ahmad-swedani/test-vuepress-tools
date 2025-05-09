---
author:
  avatar: https://avatars.githubusercontent.com/u/1549175?v=4
  email: null
  name: Shinichiro MORI
  url: null
  username: smori1983
bugs: https://github.com/smori1983/vuepress-plugin-keyboard-event-debug/issues
category: plugin
date: '2022-01-07T16:00:56.349Z'
deprecated: false
description: Debugging keyboard events (especially for Japanese IME).
downloads: null
homepage: https://github.com/smori1983/vuepress-plugin-keyboard-event-debug
keywords:
- vuepress
- vuepress-plugin
license: MIT License
maintainers: null
name: vuepress-plugin-keyboard-event-debug
npm: https://www.npmjs.com/package/vuepress-plugin-keyboard-event-debug
publisher:
  avatar: null
  email: shinichiro.mori.1983@gmail.com
  name: null
  url: null
  username: smori1983
repository: https://github.com/smori1983/vuepress-plugin-keyboard-event-debug
score: 0.5204952446033991
stars: 0
unstable: false
version: 1.0.1
watchers: 0

---

# vuepress-plugin-keyboard-event-debug

Debugging keyboard events (especially for Japanese IME).


## Usage

`.vuepress/config.js`

```js
module.exports = {
  plugins: [
    ['keyboard-event-debug'],
  ],
};
```


## Predefined global component

In arbitrary markdown file,

```html
<PluginKeyboardEventDebug/>
```

See: `example/README.md`.


## Capture

![](https://cdn.jsdelivr.net/gh/smori1983/vuepress-plugin-keyboard-event-debug@master/doc/capture.01.png)
