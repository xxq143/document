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
          { text: 'example', link: 'docs/example' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
