import DefaultTheme from "vitepress/theme";
import type { Theme } from 'vitepress'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css"; // element plus 暗黑模式
import "./custom.css"; // vitepress自定义样式
import Layout from "./Layout.vue"; // 覆盖默认的布局组件

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(ElementPlus);
  },
} satisfies Theme
