import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/10_datas.html.vue"
const data = JSON.parse("{\"path\":\"/posts/10_datas.html\",\"title\":\"API de data do Java\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2025-07-28T11:00:00.000Z\",\"tag\":[\"java\",\"datas\"],\"category\":[\"aula\"],\"order\":10},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1753705670000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"},{\"name\":\"Leandro Souza\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1}]},\"readingTime\":{\"minutes\":2.77,\"words\":830},\"filePathRelative\":\"posts/10_datas.md\"}")
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
