<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <div v-if="!cartIsEmpty" key="cartNotEmpty">
        <span class="totalPrice">Total {{ totalPrice }}€</span>
        <ul class="cart-list">
          <transition-group name="list">
            <li v-for="item in cartItems" :key="item.id" class="cart-item">
              <CartItem :itemId="item.id" :itemQuantity="item.quantity" />
            </li>
          </transition-group>
        </ul>
      </div>
      <div v-else key="cartEmpty">
        <p>Your cart is empty</p>
      </div>
    </transition>
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
    ...mapGetters(["productById"]),
    cartIsEmpty() {
      return this.cartItems.length === 0;
    },
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        let product = this.productById(item.id);
        total += product.price * item.quantity;
        // current + next.price, 0
      });
      return total;
    },
  },
};
</script>

<style scoped>
.cart-list {
  min-width: 30vw;
}
.empty-cart {
  background-color: #42b983;
}
.cart-item {
  list-style: none;
  margin: 0.5rem 0;
}
.totalPrice {
  font-size: 2rem;
}
</style>
