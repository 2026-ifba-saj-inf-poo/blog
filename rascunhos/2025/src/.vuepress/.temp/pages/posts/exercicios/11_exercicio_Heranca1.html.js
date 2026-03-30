import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/exercicios/11_exercicio_Heranca1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/exercicios/11_exercicio_Heranca1.html\",\"title\":\"Exercício de Herança 1\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"dumbbell\",\"date\":\"2025-07-28T11:02:00.000Z\",\"tag\":[\"heranca\"],\"category\":[\"exercicio\"],\"order\":12},\"git\":{\"createdTime\":1753713946000,\"updatedTime\":1754339502000,\"contributors\":[{\"name\":\"Leandro Souza\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":3}]},\"readingTime\":{\"minutes\":0.58,\"words\":174},\"filePathRelative\":\"posts/exercicios/11_exercicio_Heranca1.md\"}")
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
