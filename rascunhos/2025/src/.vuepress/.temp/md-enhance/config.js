import CodeDemo from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@_2c0398d374c50cee17f0d2e92da431b5/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@_2c0398d374c50cee17f0d2e92da431b5/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
