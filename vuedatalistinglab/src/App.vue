<template>
<!--
DONE: Create your own JSON data structure for a collection of your own. ( acorns? One Piece Figures? Ms. Marvel comics? Guitars? )
DONE: Create a Vue application using either the CLI or Codesandbox

Load the data into the application and pass the data into a component
Display the data in that component in a v-for list
-->
  <div id="app">
    

    <Authors v-bind:authors="this.authors"  />
   
  </div>
</template>

<script>

import Authors from './components/Authors.vue'

export default {
  name: 'App',
  components: {
   
    Authors
  },
  data: function ()  {
    return {
      authors: null,
   
     
    }
  },
  mounted: function () {
    fetch("data/data.json")
    .then((response) => response.json())
    .then(json => {
      this.authors = json;
      console.log(json);
    })
    .catch((err) => 
    {
      console.log(err)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
