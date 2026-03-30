import { hasGlobalComponent } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a6ecf5644293394727ee1f6d992c5706/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vueuse+core@13.7.0_vue@3.5.18/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_a06223971d6d01bc97c3a15bf055d220/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
