import { defineUserConfig } from "vuepress";
import umlPlugin from 'markdown-it-plantuml';
import container from 'markdown-it-container';
import table_captions from 'markdown-it-table-captions'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "pt-BR",
  title: "20261 POO",
  description: "Material das Aulas",

  extendsMarkdown: (md) => {
    md.use(umlPlugin, {
      openMarker: '```plantuml',
      closeMarker: '```',
      //server: 'https://kroki.io/plantuml/'
    })
    md.use(table_captions)
    md.use(container, 'figure', {
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^figure\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          // Abre a tag <figure> e, se houver legenda, já prepara o <figcaption>
          const caption = m[1] ? `<figcaption>${md.utils.escapeHtml(m[1])}</figcaption>` : '';
          return `<figure>\n${caption}\n`;
        } else {
          // Fecha a tag </figure>
          return '</figure>\n';
        }
      }
    })
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
