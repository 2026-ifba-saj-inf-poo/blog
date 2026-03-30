import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/code/exercicioComputador/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/code/exercicioComputador/\",\"title\":\"Exercicio Computador\",\"lang\":\"pt-BR\",\"frontmatter\":{\"title\":\"Exercicio Computador\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
