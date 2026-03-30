import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/ementa.html.vue"
const data = JSON.parse("{\"path\":\"/posts/ementa.html\",\"title\":\"Plano de Curso\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2025-03-31T10:40:00.000Z\",\"tag\":[\"ementa\"],\"category\":[\"Plano de Curso\"],\"star\":true,\"index\":false},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1744033890000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"}]},\"readingTime\":{\"minutes\":1.41,\"words\":423},\"filePathRelative\":\"posts/ementa.md\"}")
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
