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
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions(['fetchAllProducts']),
  },
  created() {
    this.fetchAllProducts();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Satisfy");

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
  border: 2px solid #eee;
  border-radius: 0.8rem;
  background-color: transparent;
  color: #eee;
  margin: 0.4rem;
}
.btn:focus {
  background-color: transparent;
}
.btn:hover {
  border-color: hsl(198, 66%, 52%);
  color: hsl(198, 66%, 52%);
  background-color: #eee;
  font-weight: bold;
}
.btn:disabled {
  border-color: hsl(198, 66%, 72%);
  color: hsl(198, 66%, 72%);
  background-color: transparent;
  font-weight: normal;
  cursor: not-allowed;
}
.title-route {
  font-family: "Satisfy";
  text-align: center;
  margin: 1rem;
}
</style>
