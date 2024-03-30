import { defineConfig } from "vitepress";
import taskLists from "markdown-it-task-lists";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人文档",
  titleTemplate: ":title",
  description: "文档记录",
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
        collapsed: true,
        items: [{ text: "开始", link: "/docs/start" }],
      },
      {
        text: "前端",
        collapsed: true,
        items: [
          { text: "canvas", link: "/frontend/canvas" },
          { text: "css", link: "/frontend/css" },
          { text: "html", link: "/frontend/html" },
          { text: "javascript", link: "/frontend/javascript" },
          { text: "oop", link: "/frontend/oop" },
          { text: "svg", link: "/frontend/svg" },
        ],
      },
      {
        text: "后端",
        collapsed: true,
        items: [
          { text: "gin", link: "/backend/gin" },
          { text: "golang", link: "/backend/golang" },
          { text: "node", link: "/backend/node" },
        ],
      },
      {
        text: "组件",
        collapsed: true,
        items: [{ text: "组件A", link: "/components/test" }],
      },
      {
        text: "其他",
        collapsed: true,
        items: [{ text: "代办列表", link: "/other/todo-list" }],
      },
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
