import comp from "D:/IFBA/20250IntPoo/blog/src/.vuepress/.temp/pages/posts/java.html.vue"
const data = JSON.parse("{\"path\":\"/posts/java.html\",\"title\":\"Testando a Compilação de Java\",\"lang\":\"pt-BR\",\"frontmatter\":{},\"git\":{},\"readingTime\":{\"minutes\":0.25,\"words\":75},\"filePathRelative\":\"posts/java.md\",\"javaCompileResults\":{\"./code/abstract/AutenticadorDeUsuario.java\":{\"status\":\"error\",\"stderr\":\"D:\\\\IFBA\\\\20250IntPoo\\\\blog\\\\src\\\\posts\\\\code\\\\abstract\\\\AutenticadorDeUsuario.java:2: error: cannot find symbol\\r\\n    public boolean autentica ( Usuario u ) {\\r\\n                               ^\\r\\n  symbol:   class Usuario\\r\\n  location: class AutenticadorDeUsuario\\r\\n1 error\\r\\n\",\"sourceCode\":\"public class AutenticadorDeUsuario {\\r\\n    public boolean autentica ( Usuario u ) {\\r\\n        // implementação\\r\\n    }\\r\\n}\\r\\n\"}}}")
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
