import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/exercicios/01_exercicio_java_caelum.html.vue"
const data = JSON.parse("{\"path\":\"/posts/exercicios/01_exercicio_java_caelum.html\",\"title\":\"Exercício: Fixação de sintaxe\",\"lang\":\"pt-BR\",\"frontmatter\":{\"icon\":\"dumbbell\",\"date\":\"2025-04-14T10:45:11.000Z\",\"tag\":[\"java\"],\"category\":[\"exercicio\",\"entrega\"],\"order\":2},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1744639740000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":3,\"url\":\"https://github.com/leandro-costa\"}]},\"readingTime\":{\"minutes\":1.33,\"words\":399},\"filePathRelative\":\"posts/exercicios/01_exercicio_java_caelum.md\"}")
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
