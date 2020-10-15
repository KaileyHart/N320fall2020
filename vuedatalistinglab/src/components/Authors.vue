<template>
  <div>
    <h1>
      AUTHORS<br />
      AND <br />MY FAVORITE BOOKS BY THEM.
    </h1>

    <div>
      <div v-bind:key="author.id" v-for="author in authors" class="author">
        <p><strong>Author Name:</strong> {{ author.authorName }}</p>
        <p><strong>Still Alive?</strong> {{ author.alive }}</p>
        <p><strong>Favorite Book:</strong> {{ author.bookName }}</p>
        <p><strong>Book Publish Date:</strong> {{ author.publishDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authors",
  props: ["authors"],

  data: function() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #000;
  text-shadow: 3px 2px 2px #7c7c7c;
}

.author {
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 8px 10px 8px #7c7c7c;
  margin-top: 30px;
  max-width: 350px;
  padding: 20px;
}

.author p {
  color: #000;
  text-align: left;
}
</style>
