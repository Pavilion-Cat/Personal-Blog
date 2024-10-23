import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "燕栖屿",
  description: "茫茫海屿，有燕而居",

  theme,

  plugins: [
    docsearchPlugin({
      // 配置项
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});