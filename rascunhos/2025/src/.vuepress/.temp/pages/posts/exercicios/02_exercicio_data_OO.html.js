import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/exercicios/02_exercicio_data_OO.html.vue"
const data = JSON.parse("{\"path\":\"/posts/exercicios/02_exercicio_data_OO.html\",\"title\":\"Exercício: Data OO\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"dumbbell\",\"date\":\"2025-04-14T11:45:11.000Z\",\"tag\":[\"java\"],\"category\":[\"exercicio\"],\"order\":3},\"git\":{\"createdTime\":1745837387000,\"updatedTime\":1752497379000,\"contributors\":[{\"name\":\"Leandro Costa\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":3},{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"},{\"name\":\"Leandro Souza\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.45,\"words\":136},\"filePathRelative\":\"posts/exercicios/02_exercicio_data_OO.md\"}")
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
