<template>
  <div class="product-container">
      <!-- :to="{path:`/products/${product.id}`, query: { productItem: product }}" -->
    <router-link
      v-for="product in products"
      :key="product.id"
      :to="{name: 'ProductDetail', params: {id: product.id}}"
      :class="[product.displayClass, productItemClass]"
      :query="product"
    >
      <ProductCard :product="product" />
      <!-- click.prevent to avoid default behaviour of router-link -->
      <button @click.prevent="addToCart(product)" class="btn" :disabled="!(product.qt > 0)">Add to cart</button>
    </router-link>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import axios from 'axios';
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      cartItems: [],
      products: [],
      productItemClass: "product-item",
    };
  },
  methods: {
    addToCart(product) {
      product.qt--;
      this.cartItems.push(product);
      console.log("item added to cart");
      console.log(this.cartItems);
    },
  },
  mounted: function() {
    axios.get('/static/data.json')
    .then((response) => {
      this.products = response.data;
      console.log(this.products[0]);
    });
  }
};
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  align-items: stretch;
  grid-auto-rows: minmax(200px);
  grid-auto-flow: dense;
  gap: 10px;
  padding: 10px;
  background-color: hsl(198, 66%, 58%);
  box-shadow: 0 0 1rem 1rem hsl(198, 66%, 52%);;
  margin: 2rem;
}
.product-item {
  /* max-width: 100%; */
  border-color: white;
  color: #eee;
}
.product-item .card {
  height: 100%;
}
/* For large screens only */
@media (min-width: 650px) {
  .tall {
    grid-row: span 2;
  }
  .wide {
    grid-column: span 2;
  }
}
a {
  color: black;
  text-decoration: none;
  position: relative;
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: .8rem;
}
</style>
