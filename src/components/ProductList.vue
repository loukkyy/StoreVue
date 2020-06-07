<template>
  <div class="product-container">
    <!-- :to="{path:`/products/${product.id}`, query: { productItem: product }}" -->
    <router-link
      v-for="product in products"
      :key="product.id"
      :to="{ name: 'ProductDetail', params: { id: product.id } }"
      :class="[product.displayClass, productItemClass]"
    >
      <!-- <ProductCard :product="product" /> -->

      <ProductCard>
        <template v-slot:image>
          <img v-if="product.image" :src="product.image" alt="" />
        </template>

        <template v-slot:description>
          <p>{{ product.price }}€</p>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <span v-if="product.qt">Only {{ product.qt }} left!</span>
          <span v-else>Out of stock</span>
        </template>
      </ProductCard>
      <!-- click.prevent to avoid default behaviour of router-link -->
      <button
        @click.prevent="addToCart(product)"
        class="btn"
        :disabled="!(product.qt > 0)"
      >
        Buy
      </button>
    </router-link>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
      productItemClass: "product-item",
    };
  },
  methods: {
    ...mapActions(['fetchAllProducts']),
    ...mapActions("cart", {
        addToCart: "addProduct"
      })
  },
  computed: {
    ...mapGetters(['products'])

  },
  created() {
    console.log("dispatch");
    // this.$store.dispatch("fetchAllProducts");
    this.fetchAllProducts();
  },
};
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  align-items: stretch;
  grid-auto-rows: minmax(200px);
  grid-auto-flow: dense;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 2rem;
}
.product-item {
  color: #eee;
  box-shadow: 0 0 2px 1px hsl(198, 66%, 52%);
}
.product-item:hover {
  animation: card-pop-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes card-pop-up {
  to {
    background-color: hsl(198, 66%, 63%);
    box-shadow: 0 0 1rem 5px hsl(198, 66%, 52%);
  }
}
.product-item .card {
  height: 100%;
  border: none;
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
  bottom: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
}
</style>
