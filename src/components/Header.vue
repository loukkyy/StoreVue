<template>
  <Header>
    <div id="nav">
      <img src="@/assets/logo.svg" alt="logo.svg" class="logo" />
      <div id="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
      </div>
      <div class="cart-container">
        <button @click="showCart = !showCart" class="btn cart-btn">
          <font-awesome-icon icon="shopping-cart" />
          <span class="item-count-badge">{{ itemsInCartCount }}</span>
        </button>
        <transition name="fade">
          <Cart v-if="showCart" class="cart-pop-up" />
        </transition>
      </div>
    </div>
  </Header>
</template>

<script>
import Cart from "@/components/Cart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Cart,
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    goToCart() {
      // this.$router.pus
    },
  },
  computed: {
    ...mapGetters("cart", {
      cartProducts: "getProducts",
      itemsInCartCount: "getItemsCount",
    }),
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
#nav-links {
}
#nav-links a {
  display: inline-block;
  height: 100%;
  font-weight: bold;
  color: hsl(267, 73%, 60%);
  text-decoration: none;
  padding: 2rem 0.8rem;
}
#nav-links a:hover {
  background-color: hsl(267, 73%, 60%);
  color: hsl(267, 73%, 3%);
}

#nav-links a.router-link-exact-active {
  color: #42b983;
}

.header {
  grid-area: header;
  background-color: hsl(267, 73%, 3%);
}
.logo {
  height: 4rem;
  margin: 0.8rem;
}
.cart-container {
  display: flex;
  position: relative;

}
.cart-icon {
  margin: 2rem 1rem;
}
.cart-btn {
  color: white;
  font-size: 1.5rem;
  background-color: transparent;
}
.cart-btn:hover,
.cart-btn:focus {
  color: rgb(190, 190, 190);
  background-color: transparent;
}
.cart-pop-up {
  position: absolute;
  right: 0;
  top: 100px;
  z-index: 1;
  margin-right: 0.5rem;
}
.item-count-badge {
  margin: 0.5rem;
}
</style>
