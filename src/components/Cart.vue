<template>
  <div>
    <div v-if="!cartIsEmpty">
      <span class="totalPrice">Total {{ totalPrice }}</span>
      <ul v-for="item in cartItems" :key="item.id" class="item-list">
        <li><CartItem :itemId="item.id" :itemQuantity="item.quantity" /></li>
      </ul>
    </div>
    <div v-else>
      <p>Your cart is empty {{ cartIsEmpty }}</p>
      <p>{{ cartItems }}</p>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("cart", {
      cartItems: "getProducts",
    }),
    cartIsEmpty() {
      return this.cartItems.length === 0;
    },
    totalPrice() {
      return 100
    },
  },
};
</script>

<style scoped>
.item-list,
.empty-cart {
  margin: 0.5rem;
}
.empty-cart {
  background-color: #42b983;
}
li {
  list-style: none;
}
.totalPrice {
  font-size: 2rem;
}
</style>
