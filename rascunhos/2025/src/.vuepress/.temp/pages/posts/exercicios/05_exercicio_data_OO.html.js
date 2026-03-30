import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/exercicios/05_exercicio_data_OO.html.vue"
const data = JSON.parse("{\"path\":\"/posts/exercicios/05_exercicio_data_OO.html\",\"title\":\"Exercício: Data OO\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"dumbbell\",\"date\":\"2024-11-27T20:40:00.000Z\",\"tag\":[\"java\"],\"category\":[\"exercicio\"],\"order\":5},\"git\":{\"createdTime\":1745837387000,\"updatedTime\":1745847079000,\"contributors\":[{\"name\":\"Leandro Costa\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.45,\"words\":136},\"filePathRelative\":\"posts/exercicios/05_exercicio_data_OO.md\",\"localizedDate\":\"27 de novembro de 2024\"}")
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
