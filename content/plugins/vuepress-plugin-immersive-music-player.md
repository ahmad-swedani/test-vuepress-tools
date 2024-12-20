---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/87564791?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM0NDAsIm5iZiI6MTczNDY3MjI0MCwicGF0aCI6Ii91Lzg3NTY0NzkxIn0.i08vsHgBGIW0DiyUQnc7gl8ait6mcokWr-S0IujNEKk&v=4
  email: ~
  name: ~
  url: ~
  username:
    name: simonzhangs
bugs: https://github.com/simonzhangs/vuepress-plugin-immersive-music-player/issues
category: plugin
date: '2022-05-08T12:58:00.455Z'
deprecated: false
description: An immersive and personalized vuepress music plugin | 一个沉浸式个性化的vuepress 音乐插件
downloads: ~
homepage: https://github.com/simonzhangs/vuepress-plugin-immersive-music-player#readme
keywords:
  - vue
  - vuepress
  - plugin
  - music
  - music-bar
  - 插件
  - vuepress插件
  - 音乐
  - bgm
  - player
  - immersive
license: ~
maintainers:
  - email: 2863389578@qq.com
    username: simonzhangs
name: vuepress-plugin-immersive-music-player
npm: https://www.npmjs.com/package/vuepress-plugin-immersive-music-player
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: 2863389578@qq.com
    username: simonzhangs
repository: https://github.com/simonzhangs/vuepress-plugin-immersive-music-player
score: 0.5207561576159168
stars: 2
unstable: false
version: 1.2.4
watchers: 2

---

# vuepress-plugin-immersive-music-player

[![downloads](https://img.shields.io/npm/dm/vue-slider-component.svg)](https://www.npmjs.com/package/vuepress-plugin-immersive-music-player)
[![npm-version](https://img.shields.io/npm/v/vue-slider-component.svg)](https://img.shields.io/npm/v/vue-slider-component.svg)

> 🎚 一个沉浸式个性化的vuepress 音乐插件

[English](https://github.com/simonzhangs/vuepress-plugin-immersive-music-player/blob/main/README-EN.md) | 简体中文

更新日志[CHANGELOG](https://github.com/simonzhangs/vuepress-plugin-immersive-music-player/blob/main/CHANGELOG.md)。

## 🌟 Version 1.1.X

### 新特性
- 支持自定义配置播放歌单
- 支持自定义配置播放进度条主题
- 🌟 new! 支持用户界面直接输入歌单ID替换播放歌单，博客访问者可以在浏览博客时输入选择播放的歌单

#### 安装

```bash
$ yarn add vuepress-plugin-immersive-music-player
# npm install vuepress-plugin-immersive-music-player --save
```

#### 注意事项
- `npm run build` 构建生成了dist文件夹，插件便生效了，部署到自己服务器即可。

## ✨ 特性
- 🍖 个性化播放进度条
- 👗 全局播放器
- 🍒 基于网易云接口
- 🔧 配置简单易上手


## 🎯 安装
```bash
$ yarn add vuepress-plugin-immersive-music-player
# npm install vuepress-plugin-immersive-music-player --save
```


## 🚀 Vuepress配置

### Add to .vuepress/config.js

```js
module.exports = {
  plugins: [
    //...
    ['vuepress-plugin-immersive-music-player',{
      sliderStyle:{theme: 'isSpitRainbow'},
      playListID: 633015043,
    }]
    //...
  ]
};
```
### sliderStyle

用于配置播放进度条主题，目前共四个主题：`isSpitRainbow`,`isRainbow`,`isNyancat`,`isMario`;效果图如下：

- `isSpitRainbow`:
![`isSpitRainbow`](https://cdn.jsdelivr.net/gh/simonzhangs/image-hosting@master/vue-plugin-example/spitRainbow-example.7iblvhk8l5o0.webp)

- `isRainbow`:
![`isRainbow`](https://cdn.jsdelivr.net/gh/simonzhangs/image-hosting@master/vue-plugin-example/rainbow-exapmle.60mrbyhx2cc0.webp)

- `isNyancat`:
![`isNyancat`](https://cdn.jsdelivr.net/gh/simonzhangs/image-hosting@master/vue-plugin-example/nyancat-example.3zqlf6pdhny0.webp)

- `isMario`:
![mario-example](https://cdn.jsdelivr.net/gh/simonzhangs/image-hosting@master/vue-plugin-example/mario-example.3bmtxznwesc0.webp)

### playListID

用于配置播放器播放歌单，输入网易云中你想听的歌单ID即可；歌单ID可以参考[HowlerMusic网站-基于网易云接口在线播放器](http://woaitouxiang.top)

## 📚 文档

在线文档：TODO

在线例子：[demo](https://simonzhangs.github.io/)

插件配置效果： [在线地址](https://simonzhangs.github.io/)

## 更新日志

每个版本的[CHANGELOG](https://github.com/simonzhangs/vuepress-plugin-immersive-music-player/blob/main/CHANGELOG.md)。


## License

[MIT]