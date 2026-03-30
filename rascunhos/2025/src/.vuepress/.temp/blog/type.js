export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[18,19,1,20,21,2,3,22,23,15,16,4,24,25,26,27,5,6,28,29,7,30,8,31,32,33,9,10,34,35,11,12,36,37,38,13,14,0,17]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[23,0,17]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[18,19,1,20,21,2,3,22,23,15,16,4,24,25,26,27,5,6,28,29,7,30,8,31,32,33,9,10,34,35,11,12,36,37,38,13,14,0,17]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

