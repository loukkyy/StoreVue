<template>
  <div class="item-container">
    <button class="btn btn-remove" @click="removeFromCart({item: product, quantity: itemQuantity})"><font-awesome-icon icon="times" /></button>
    <div class="image">
        <img :src="itemById(itemId).image" alt="" />
    </div>
    <p>{{ itemById(itemId).name }}</p>
    <div class="quantity-controls">
      <button class="btn" @click="addToCart(product)" :disabled="!(product.qt > 0)">
        <font-awesome-icon icon="plus" />
      </button>
      <p>{{ itemQuantity }}</p>
      <button class="btn" @click="removeFromCart({item: product, quantity: 1})"><font-awesome-icon icon="minus" /></button>
    </div>

    <span>{{ totalPrice }}€</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    itemId: {
      type: Number,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      itemById: "productById",
    }),
    product() {
        return this.itemById(this.itemId);
    },
    totalPrice() {
      return this.itemById(this.itemId).price * this.itemQuantity;
    },
    //item:  this.productById(this.itemId)
  },
  methods: {
    ...mapActions("cart", {
      addToCart: "addProduct",
      removeFromCart: "removeProduct",
    }),
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsl(153, 47%, 49%);
  padding: 0.4rem;
  font-size: 1rem;
  box-shadow: 0 0 3px 2px hsl(153, 47%, 59%);
}
.image {
  height: 2rem;
  margin: 0 0.5rem;
}
img {
    max-width:100%;
    max-height:100%;
}
p {
}
.btn {
  font-size: 0.8rem;
  margin: 0 0.5rem;
}
.quantity-controls {
  display: flex;
  gap: 1rem;
}
</style>
