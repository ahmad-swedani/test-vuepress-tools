---
author:
  avatar: https://avatars.githubusercontent.com/u/14368755?v=4
  email: null
  name: hxdyj
  url: null
  username: hxdyj
bugs: https://github.com/hxdyj/vuepress-plugin-code-style-recommend/issues
category: plugin
date: '2021-12-29T04:07:55.224Z'
deprecated: false
description: vuepress-plugin-code-style-recommend
downloads: null
homepage: https://github.com/hxdyj/vuepress-plugin-code-style-recommend#readme
keywords:
- vuepress-plugin-code-style-recommend
license: false
maintainers: null
name: vuepress-plugin-code-style-recommend
npm: https://www.npmjs.com/package/vuepress-plugin-code-style-recommend
publisher:
  avatar: null
  email: 951540966@qq.com
  name: null
  url: null
  username: hxdyj
repository: https://github.com/hxdyj/vuepress-plugin-code-style-recommend
score: 0.4942290519797618
stars: 0
unstable: true
version: 0.0.11
watchers: 0

---

> This is [VuePress@2](https://v2.vuepress.vuejs.org/zh/) plugin for show style-guide code. like https://v3.cn.vuejs.org/style-guide/

![](./img/style-guide.png)

## Usage

### Add plugin

vuepress `config.ts`

```ts
{
	plugins: [
		[
			'vuepress-plugin-code-style-recommend',
			{
				goodText: '', //good style title, default is '正面例子'
				badText: '', //bad style title, default is '反面例子'
			},
		],
	]
}
```

### Use in markdown file

good

```md
::: codeStyle good

other markdown content.

:::
```

bad

```md
::: codeStyle bad

other markdown content.

:::
```
