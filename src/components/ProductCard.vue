<template>
  <div class="card">
    <div class="image">
      <!-- <img v-if="product.image" :src="require(`@/assets/images/${product.image}`)" alt="" /> -->
      <img
        v-if="product.image"
        :src="`/static/images/${product.image}`"
        alt=""
      />
      <img v-else src="" alt="" />
    </div>
    <div class="description">
      <p>{{ product.price }}€</p>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <span v-if="product.qt">Only {{ product.qt }} left!</span>
      <span v-else>Out of stock</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
};
</script>

<style scoped>
.card {
  border: 2px solid hsl(0, 0%, 50%);
  /* border-radius: 0.8em; */
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card .image {
  max-width: 50%;
}
.card .image img {
  max-width: 100%;
  border-radius: 0.8em;
}
.card:hover {
  border: 2px solid hsl(0, 0%, 70%);
  cursor: pointer;
}
</style>
