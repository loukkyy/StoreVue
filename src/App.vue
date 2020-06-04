<template>
  <div id="app">
    <Header class="header" />
    <router-view class="content" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Satisfy');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
.header {
  grid-area: header;
}
.content {
  grid-area: content;
  background-color: hsl(198, 66%, 62%);
}
.footer {
  grid-area: footer;
}
.btn {
  background-color: hsl(0, 0%, 90%);
  color: black;
  padding: 0.25em 1em;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
  border-radius: 0.2em;
  outline: none;
}
.btn:focus,
.btn:hover {
  background-color: hsl(0, 0%, 70%);
}
.btn:disabled {
  background-color: hsl(0, 0%, 40%);
  cursor: not-allowed;
}
.title-route {
  font-family: 'Satisfy';
  text-align: center;
  margin: 1rem;
}
</style>
