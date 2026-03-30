import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Inicio\",\"lang\":\"pt-BR\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"house\",\"title\":\"Inicio\",\"heroImage\":\"logo.svg\",\"heroText\":\"Aulas de POO\",\"heroFullScreen\":true,\"bgImage\":\"./assets/bg/background.webp\"},\"git\":{\"createdTime\":1744033890000,\"updatedTime\":1746451735000,\"contributors\":[{\"name\":\"leandro-costa\",\"username\":\"leandro-costa\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1,\"url\":\"https://github.com/leandro-costa\"},{\"name\":\"Leandro Costa\",\"username\":\"\",\"email\":\"leandro.costa@ifba.edu.br\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.37,\"words\":111},\"filePathRelative\":\"README.md\"}")
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
