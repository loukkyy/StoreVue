<template>
  <div class="home">
    <h1 class="title-route">Product List</h1>
    <ProductList productList="ProductList" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  // name: "Products",
  components: {
    ProductList
  }
};
</script>

<style scoped></style>
