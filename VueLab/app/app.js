//Book Component that shows the title, author and cover of the book
Vue.component("book", {
  props: ["title", "author", "cover"],
  template: `<div><h3> {{title}}</h3>
  <h4>{{author}}</h4>
  <p>{{cover}}</p></div>`,
});

//New Vue Instance
var app = new Vue({
  el: "#app",
  data: {
    shown: true,
  },
});
