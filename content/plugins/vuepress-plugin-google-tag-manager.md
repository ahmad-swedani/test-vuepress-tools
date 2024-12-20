---
author:
  avatar: >-
    https://private-avatars.githubusercontent.com/u/15069983?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NzM5ODAsIm5iZiI6MTczNDY3Mjc4MCwicGF0aCI6Ii91LzE1MDY5OTgzIn0.gX6iX1YhguKWyYPBGgMEoj1qx2_yp6W-BlImpzhS5PE&v=4
  email: ~
  name: ~
  url: ~
  username:
    email: omerbuyukcelik@gmail.com
    name: Ömer Büyükçelik
    username: bykclk
bugs: https://github.com/bykclk/vuepress-plugin-google-tag-manager/issues
category: plugin
date: '2020-12-06T10:15:51.320Z'
deprecated: false
description: vuepress-plugin-google-tag-manager plugin for vuepress
downloads: ~
homepage: https://github.com/bykclk/vuepress-plugin-google-tag-manager#readme
keywords:
  - documentation
  - vue
  - vuepress
  - generator
license: ~
maintainers:
  - email: omerbuyukcelik@gmail.com
    username: bykclk
name: vuepress-plugin-google-tag-manager
npm: https://www.npmjs.com/package/vuepress-plugin-google-tag-manager
publisher:
  avatar: ~
  email: ~
  name: ~
  url: ~
  username:
    email: omerbuyukcelik@gmail.com
    username: bykclk
repository: https://github.com/bykclk/vuepress-plugin-google-tag-manager
score: 0.3248130564201722
stars: 7
unstable: true
version: 0.0.5
watchers: 7

---

# vuepress-plugin-google-tag-manager

> vuepress-plugin-google-tag-manager plugin for vuepress

## Install

```
npm i vuepress-plugin-google-tag-manager --save
```
or
```
yarn add vuepress-plugin-google-tag-manager
```

## Configuration

```javascript
module.exports = {
  plugins: ['vuepress-plugin-google-tag-manager'] 
}
```

## Options

### gtm

- Type: `string`
- Default: `undefined`

Provide the Google Tag Manager ID to enable integration.

## Documentation

Once the configuration is completed, you can access vue gtm instance in your components like that :

```javascript
export default {
  name: 'MyComponent',
  data() {
    return {
      someData: false
    };
  },
  methods: {
    onClick: function() {
      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: 'Calculator',
        action: 'click',
        label: 'Home page SIP calculator',
        value: 5000,
        noninteraction: false // Optional
      });
    }
  },
  mounted() {
    this.$gtm.trackView('MyScreenName', 'currentpath');
  }
};
```

The passed variables are mapped with GTM data layer as follows

```
dataLayer.push({
	'event': event || 'interaction',
	'target': category,
	'action': action,
	'target-properties': label,
	'value': value,
	'interaction-type': noninteraction,
	...rest
});
```