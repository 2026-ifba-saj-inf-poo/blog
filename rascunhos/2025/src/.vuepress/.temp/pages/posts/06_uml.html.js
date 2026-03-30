import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/06_uml.html.vue"
const data = JSON.parse("{\"path\":\"/posts/06_uml.html\",\"title\":\"UML\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2025-06-02T10:30:00.000Z\",\"tag\":[\"UML\"],\"category\":[\"aula\"],\"order\":6},\"git\":{\"createdTime\":1748950887000,\"updatedTime\":1759751303000,\"contributors\":[{\"name\":\"Leandro Costa\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1},{\"name\":\"Leandro Souza\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.1,\"words\":331},\"filePathRelative\":\"posts/06_uml.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
