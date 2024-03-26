import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "D",
  titleTemplate: ':title - C',
  description: "文档记录",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/document/',
  srcDir: './src',
  cleanUrls: false,
  outDir: './dist',
  cacheDir: './.cache',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'docs', link: 'docs/example' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'example', link: 'docs/example' },
          { text: 'css', link: 'docs/css' },
          { text: 'oop', link: 'docs/oop' },
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          "/": {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '文档',
      // copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
