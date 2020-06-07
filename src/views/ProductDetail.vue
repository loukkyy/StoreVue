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
        <button class="btn" @click="addToCart(product)" :disabled="!(product.qt > 0)">
          Add to cart
        </button>
        <button
          class="btn"
          @click="edit"
        >
          Edit product
        </button>
        <router-view class="edit-box" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      // product: ""
    };
  },
  methods: {
    ...mapActions("cart", {
      addToCart: "addProduct",
    }),
    edit() {
      this.$router.push({ path: `${this.product.id}/edit` });
    }
  },
  computed: {
    product() {
      return this.$store.getters.products[this.$route.params.id - 1];
    },
  },
  mounted() {
    // component should fetch latest state in prod
    // this.$store.dispatch("fetchOneProduct", this.$route.params.id);
  },
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
.edit-box {
  border: 1px solid hsl(267, 73%, 3%);
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  flex: 1;
}
</style>
