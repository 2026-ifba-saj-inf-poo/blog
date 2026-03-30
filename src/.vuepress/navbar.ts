import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Publicações",
    icon: "edit",
    link: "/article/",
  },
  {
    text: "Categoria",
    icon: "list",
    link: "/category/",
  },
  {
    text: "Tag",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "Exercícios",
    icon: "dumbbell",
    link: "/category/exercicio/",
  },
  {
    text: "Trabalho",
    icon: "code-pull-request",
    link: "/category/trabalho/",
  },
  {
    text: "Para Entrega",
    icon: "paper-plane",
    link: "/category/entrega/",
  },
  {
    text: "Timeline",
    icon: "clock",
    link: "/timeline/",
  },
]);
