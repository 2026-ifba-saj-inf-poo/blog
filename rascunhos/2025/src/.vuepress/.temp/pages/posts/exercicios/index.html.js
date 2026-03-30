import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/exercicios/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/exercicios/\",\"title\":\"Exercicios\",\"lang\":\"pt-BR\",\"frontmatter\":{\"title\":\"Exercicios\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
