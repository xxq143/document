import { defineConfig } from "vitepress";
import taskLists from "markdown-it-task-lists";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "交流平台",
  titleTemplate: ":title",
  description: "交流平台",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/document/",
  srcDir: "./src",
  cleanUrls: true,
  outDir: "./dist",
  cacheDir: "./.cache",
  markdown: {
    config: (md) => {
      md.use(taskLists, { enabled: false, label: false, labelAfter: false });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "简介", link: "/docs/start" },
    ],

    sidebar: [
      {
        text: "简介",
        collapsed: false,
        items: [
          { text: "开始", link: "/docs/start" },
          { text: "目录", link: "/docs/category" },
        ],
      },
      {
        text: "类别",
        collapsed: true,
        items: [
          { text: "自媒体", link: "/docs/self-midia" },
          { text: "电商", link: "/docs/E-commerce" },
          {
            text: "实体店",
            link: "/docs/shop",
            collapsed: true,
            items: [
              { text: '网吧', link: "/items/cybercafe" },
              { text: '棋牌室', link: "/items/chess-room" },
              { text: '游戏工作室', link: "/items/game-studio" },
              { text: '桌游', link: "/items/board-game" },
            ]
          },
          {
            text: "地摊",
            link: "/docs/vendor",
            collapsed: true,
            items: [
              { text: '早餐', link: "/items/breakfast" },
              { text: '烧烤', link: "/items/barbecue" },
            ]
          },
          {
            text: "独立开发",
            link: "/docs/vendor",
            collapsed: true,
            items: [
              { text: '游戏制作', link: "/items/game-develop" },
              { text: '视频剪辑', link: "/items/video-clip" },
            ]
          },
          { text: "其他", link: "/docs/other" },
        ],
      },
      // {
      //   text: "其他",
      //   collapsed: true,
      //   items: [{ text: "代办列表", link: "/other/todo-list" }],
      // },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          "/": {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "文档记录",
      // copyright: 'Copyright © 2019-present Evan You'
    },
  },
});
