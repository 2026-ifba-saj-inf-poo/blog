import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/category/exercicio/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/exercicio/\",\"title\":\"exercicio Category\",\"lang\":\"pt-BR\",\"frontmatter\":{\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"title\":\"exercicio Category\",\"blog\":{\"type\":\"category\",\"name\":\"exercicio\",\"key\":\"category\"},\"layout\":\"Blog\"},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null}")
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
