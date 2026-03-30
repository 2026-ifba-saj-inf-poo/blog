import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/print.html.vue"
const data = JSON.parse("{\"path\":\"/print.html\",\"title\":\"Linguagens e paradigmas de programação\",\"lang\":\"pt-BR\",\"frontmatter\":{},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1750038166000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":4,\"url\":\"https://github.com/leandro-costa\"},{\"name\":\"Leandro Costa\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":5},{\"name\":\"Leandro Souza\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.1,\"words\":31},\"filePathRelative\":\"print.md\",\"localizedDate\":\"7 de abril de 2025\"}")
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
