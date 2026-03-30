import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/02_introducao.html.vue"
const data = JSON.parse("{\"path\":\"/posts/02_introducao.html\",\"title\":\"Linguagens e paradigmas de programação\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2025-04-07T11:50:00.000Z\",\"tag\":[\"java\",\"paradigmas\"],\"category\":[\"aula\"],\"order\":2},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1744033890000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"}]},\"readingTime\":{\"minutes\":12.47,\"words\":3740},\"filePathRelative\":\"posts/02_introducao.md\"}")
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
