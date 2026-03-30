import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/exercicios/00_exercicio_java_w3c.html.vue"
const data = JSON.parse("{\"path\":\"/posts/exercicios/00_exercicio_java_w3c.html\",\"title\":\"Exercício Java no W3C\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"dumbbell\",\"date\":\"2025-04-14T10:40:11.000Z\",\"tag\":[\"java\"],\"category\":[\"exercicio\"],\"order\":1},\"git\":{\"createdTime\":1744627807000,\"updatedTime\":1744627807000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"}]},\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"posts/exercicios/00_exercicio_java_w3c.md\"}")
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
