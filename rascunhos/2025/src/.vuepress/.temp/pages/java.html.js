import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/java.html.vue"
const data = JSON.parse("{\"path\":\"/java.html\",\"title\":\"Testando a Compilação de Java\",\"lang\":\"pt-BR\",\"frontmatter\":{},\"git\":{},\"readingTime\":{\"minutes\":0.25,\"words\":75},\"filePathRelative\":\"java.md\"}")
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
