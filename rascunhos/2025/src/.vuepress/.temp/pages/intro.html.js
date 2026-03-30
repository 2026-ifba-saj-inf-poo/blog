import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"Pagina de apresentação\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"circle-info\",\"article\":false},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1744033890000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"}]},\"readingTime\":{\"minutes\":0.06,\"words\":18},\"filePathRelative\":\"intro.md\"}")
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
