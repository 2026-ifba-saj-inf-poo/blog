import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_875d00e5a72c8e915db73ca8021caf21/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+plugin-catalog@2._0879513a3dd0d604559d0a08b3d92ec7/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { Blog, BloggerInfo, SocialMedias, setupBlog } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_875d00e5a72c8e915db73ca8021caf21/node_modules/vuepress-theme-hope/lib/bundle/exports/blog.js";
import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_875d00e5a72c8e915db73ca8021caf21/node_modules/vuepress-theme-hope/lib/bundle/styles/blog/bundle.scss";

import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a6ecf5644293394727ee1f6d992c5706/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a6ecf5644293394727ee1f6d992c5706/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a6ecf5644293394727ee1f6d992c5706/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_875d00e5a72c8e915db73ca8021caf21/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    Blog,
  }
};
