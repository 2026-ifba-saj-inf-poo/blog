import { CodeTabs } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_83cab53cf7ae6eab1720dd5c3c96d570/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_83cab53cf7ae6eab1720dd5c3c96d570/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+plugin-markdown-t_83cab53cf7ae6eab1720dd5c3c96d570/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
