import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/tag/greenfoot/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/greenfoot/\",\"title\":\"Tag: greenfoot\",\"lang\":\"pt-BR\",\"frontmatter\":{\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"title\":\"Tag: greenfoot\",\"blog\":{\"type\":\"category\",\"name\":\"greenfoot\",\"key\":\"tag\"},\"layout\":\"Blog\"},\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null}")
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
