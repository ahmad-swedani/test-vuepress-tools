---
author:
  avatar: https://avatars.githubusercontent.com/u/85702?v=4
  email: null
  name: monsat
  url: null
  username: monsat
bugs: https://github.com/monsat/vuepress-plugin-netabare-switch/issues
category: plugin
date: '2022-01-05T04:47:44.224Z'
deprecated: false
description: "VuePress v2 Plugin - netabare switch \uFF08\u30CD\u30BF\u30D0\u30EC\u30FB\
  \u30B9\u30A4\u30C3\u30C1\uFF09"
downloads: null
homepage: https://github.com/monsat/vuepress-plugin-netabare-switch#readme
keywords:
- vuepress-plugin
- vuepress
license: false
maintainers: null
name: vuepress-plugin-netabare-switch
npm: https://www.npmjs.com/package/vuepress-plugin-netabare-switch
publisher:
  avatar: null
  email: tanaka.kohji@gmail.com
  name: null
  url: null
  username: mon_sat
repository: https://github.com/monsat/vuepress-plugin-netabare-switch
score: 0.3666158363063491
stars: 0
unstable: true
version: 0.5.0
watchers: 0

---

# VuePress Plugin NetaBare Switch

Toggle switch for ネタバレ (NetaBare)

> ネタバレ (NetaBare) means *spoiler*

Articles using this plugin toggle showing the NetaBare sentences.

> This plugin is for VuePress v2

## Recommendation

Styles in components are written by Tailwind CSS.
Adding [`Windi CSS`](https://windicss.org/) is recommended.

### If you use `vuepress-vite`

```bash
npm install -D windicss vite-plugin-windicss
```

```ts
// config.ts
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  bundlerConfig: {
    viteOptions: {
      plugins: [
        WindiCSS(),
      ],
    },
  },
})
```

## Install

```bash
$ npm install -D vuepress-plugin-netabare-switch

or

$ yarn add -D vuepress-plugin-netabare-switch
```

## Usage

Add `vuepress-plugin-netabare-switch` in your config file.

```javascript
plugins: [
  ['vuepress-plugin-netabare-switch'], // add
],
```

in your article file (`.md`)

```html
<NetaBareSwitch>Show spoiler</NetaBareSwitch>
```

and writing like below:

```html
## The culprit is <NetaBareSpan bare="Mr. Foo">◯◯</NetaBareSpan>

<NetaBareDiv>
  <template #default>
    Message that do not contain spoilers is here.
  </template>
  <template #bare>
    Message containing spoilers is here.
  </template>
</NetaBareDiv>

```

![NetaBare Switch](https://github.com/monsat/vuepress-plugin-netabare-switch/blob/main/doc/images/netabare-switch.gif?raw=true)

## Options

```javascript
plugins: [
  ['vuepress-plugin-netabare-switch', {
    // Prefix of keys for LocalStorage
    // default: 'netabare'
    keyPrefix: 'nb',

    // Prefix of components name
    // default: 'NetaBare'
    componentPrefix: 'NB', // -> `<NBSwitch/>`
  }],
],
```

## Component Slots and Props

### `<NetaBareSwitch>`: Toggle switch.

`#default` slot is message to toggle NetaBare

Default is in Japanese.
#### `name?: string`

using for `<input type=checkbox class="toggle-checkbox">` id and storage key

#### CSS

```html
<div :class="switchWrapperClass">
  <input type=checkbox class="toggle-checkbox" :class="buttonClass" />
  <label class="toggle-label" :class="switchBgClass" />
</div>
<label :class="labelClass">
  <slot name="default" />
</label>
```

```css
.toggle-checkbox {
  background-color: var(--c-text);
}
.toggle-checkbox:checked {
  right: 0;
  background-color: var(--c-tip-bg);
}
.toggle-checkbox + .toggle-label {
  box-sizing: border-box;
  border: 1px solid var(--c-tip);
  background-color: var(--c-tip-bg);
}
.toggle-checkbox:checked + .toggle-label {
  background-color: var(--c-tip);
}
```

### `<NetaBareDiv>`: Div of spoiler

`#default` slot is paragraph excluding spoiler.

`#bare` slot is paragraph including spoiler.

### `<NetaBareSpan>`: Span of spoiler

`#default` slot is words excluding spoiler.

`bare` **prop** is words including spoiler.

## Reference

- [VuePress](https://v2.vuepress.vuejs.org/)
- [Windi CSS](https://windicss.org/)

## License

MIT
