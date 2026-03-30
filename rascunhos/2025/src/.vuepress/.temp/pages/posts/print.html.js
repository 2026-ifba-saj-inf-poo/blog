import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/print.html.vue"
const data = JSON.parse("{\"path\":\"/posts/print.html\",\"title\":\"Versão para Impressão\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"print\",\"date\":\"2025-12-01T13:00:00.000Z\",\"article\":false,\"index\":false},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1763981351000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":15,\"url\":\"https://github.com/leandro-costa\"},{\"name\":\"Leandro Costa\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":3},{\"name\":\"Leandro Souza\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":26}]},\"readingTime\":{\"minutes\":0.17,\"words\":51},\"filePathRelative\":\"posts/print.md\"}")
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
