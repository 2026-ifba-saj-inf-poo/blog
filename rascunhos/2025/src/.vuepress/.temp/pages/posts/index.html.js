import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"Posts\",\"lang\":\"pt-BR\",\"frontmatter\":{\"title\":\"Posts\",\"article\":false,\"feed\":false,\"sitemap\":false},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
