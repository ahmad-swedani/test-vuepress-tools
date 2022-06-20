---
author:
  avatar: https://avatars.githubusercontent.com/u/85532421?v=4
  email: info@greenimp.co.uk
  name: GreenImp Media
  url: http://greenimp.co.uk
  username: dice-roller
bugs: https://github.com/dice-roller/vuepress-plugin/issues
category: plugin
date: '2021-11-26T22:57:51.362Z'
deprecated: false
description: Plugin for VuePress that allows rolling dice
downloads: null
homepage: https://github.com/dice-roller/vuepress-plugin
keywords:
- vuepress
- dice
- roll
license: MIT License
maintainers: null
name: '@dice-roller/vuepress-plugin-dice-roller'
npm: https://www.npmjs.com/package/%40dice-roller%2Fvuepress-plugin-dice-roller
publisher:
  avatar: null
  email: lee@greenimp.co.uk
  name: null
  url: null
  username: greenimp
repository: https://github.com/dice-roller/vuepress-plugin
score: 0.3583240560253957
stars: 0
unstable: true
version: 0.1.10
watchers: 0

---

<p align="center">
    <img src="http://greenimp.github.io/rpg-dice-roller/dice-roller-logo.png" alt="RPG Dice Roller" style="max-width: 100%;" width="200"/>
</p>

# RPG Dice Roller Vuepress Plugin

Plugin for [VuePress](https://vuepress.vuejs.org/) that allows rolling dice.

It is built upon this [RPG dice roller](https://github.com/GreenImp/rpg-dice-roller), and is used in the [documentation](https://greenimp.github.io/rpg-dice-roller).


## Install

Install the plugin:

```bash
npm install -D @dice-roller/vuepress-plugin
# Or
yarn add -D @dice-roller/vuepress-plugin
```

Then add the plugin to your Vuepress config file:

```javascript
module.exports = {
  plugins: [
    '@dice-roller/vuepress-plugin-dice-roller',
  ],
};
```


## Usage

You can add a die roller anywhere by using the following markdown syntax:

```
::: roll :::
```

You can even specify the default notation with:

```
::: roll {notation} :::
```

For example:

```
::: roll 4d6 ::
```

```
::: roll (2*6)d10 / (4 - d20) :::
```
