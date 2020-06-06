<template>
  <div>
    <h1 class="title-route">Product Info</h1>
    <div class="product-box">
      <div class="image">
        <img :src="product.image" alt="" />
      </div>
      <div class="description">
        <h2>{{ product.name }}</h2>
        <br />
        <p><strong>Price:</strong> {{ product.price }}€</p>
        <br />
        <p>
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aliquam obcaecati modi, quas itaque incidunt libero
          magnam, mollitia vitae dolorum in placeat quibusdam! Molestiae
          laboriosam possimus tenetur placeat mollitia sapiente nam!
        </p>
        <br />
        <p><strong>Rating:</strong> {{ product.rating }}/5</p>
        <br />
        <span v-if="product.qt">Only {{ product.qt }} left!</span>
        <span v-else>Out of stock</span>
      </div>
      <div class="lateral-panel">
        <button class="btn" @click="addToCart()" :disabled="!(product.qt > 0)">
          Add to cart
        </button>
        <button
          class="btn"
          @click="$router.push({ path: `${product.id}/edit` })"
        >
          Edit product
        </button>
        <router-view class="edit-box" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: ""
    };
  },
  methods: {
    addToCart() {
      this.product.qt--;
    }
  },
  mounted: function() {
    axios.get("/static/data.json").then(response => {
      this.product = response.data.filter(
        data => data.id == this.$route.params.id
      )[0];
    });
  }
};
</script>

<style scoped>
.product-box {
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 40vh auto;
  grid-template-areas:
    "image lateral-panel"
    "description description";
}
.image {
  grid-area: image;
  text-align: center;

}
.image img {
  max-height: 100%;
  max-width: 100%;
}
.description {
  grid-area: description;
  padding: 1rem;
}
.lateral-panel {
  grid-area: lateral-panel;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.btn {
  border: 2px solid hsl(267, 73%, 3%);
  border-radius: 0.8rem;
  background-color: transparent;
  color: hsl(267, 73%, 3%);
  margin: 1rem;
}
.btn:hover {
  border-color: hsl(267, 73%, 50%);
  color: hsl(267, 73%, 50%);
}
.edit-box {
  border: 1px solid hsl(267, 73%, 3%);
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  flex: 1;
}
</style>
