---
author:
  avatar: https://avatars.githubusercontent.com/u/48642166?v=4
  email: hi@yue.dev
  name: Yue Wang
  url: null
  username: hiyue
bugs: https://github.com/HiYue/vuepress-plugin-robotstxt/issues
category: plugin
date: '2019-07-20T10:57:06.190Z'
deprecated: false
description: Robots.txt file generator plugin for vuepress
downloads: null
homepage: https://github.com/HiYue/vuepress-plugin-robotstxt#readme
keywords:
- vuepress-plugin
- robots.txt
- vue
- vuepress
- robots.txt generator for vuepress
license: false
maintainers: null
name: vuepress-plugin-robots
npm: https://www.npmjs.com/package/vuepress-plugin-robots
publisher:
  avatar: null
  email: hi@yue.dev
  name: null
  url: null
  username: hiyue
repository: https://github.com/HiYue/vuepress-plugin-robotstxt
score: 0.34731778753169174
stars: 9
unstable: false
version: 1.0.1
watchers: 9

---

# Robots.txt file plugin for Vuepress

## Install
* NPM
```bash
npm install vuepress-plugin-robots
```

## Usage
### Vuepress v0.x
> NOT SUPPORT

### Vuepress v1.x

Put your options in .vuepress/config.js file, **please note: host option is mandatory**.

```javascript
// .vuepress/config.js

module.exports = {
  plugins: {
    'robots': {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */   
        host: "https://your-website",
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,      
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */ 
        sitemap: "/sitemap.xml",
        /**
         * @policies
         * Optional, by default: null
         */ 
        policies: [
            {
                userAgent: '*',
                disallow: [
                    '/admin','/login'
                ],
                allow: [    // Optional: Allowed paths. 
                    'products','blog'
                ]
            }
        ]
    },
  }
}
```

## Thanks
Thanks to [generate-robotstxt](https://github.com/itgalaxy/generate-robotstxt)

## Changelog

## License
MIT