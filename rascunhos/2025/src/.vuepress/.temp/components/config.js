import { hasGlobalComponent } from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a6ecf5644293394727ee1f6d992c5706/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-plugin-components@_7a53cd9c2ad499d17a41ec643151b0cd/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/vuepress-plugin-components@_7a53cd9c2ad499d17a41ec643151b0cd/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/IFBA/20250IntPoo/blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_a6ecf5644293394727ee1f6d992c5706/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
