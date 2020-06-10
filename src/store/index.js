import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { CartModule } from "@/modules/CartModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    loadProducts: (state, products) => (state.products = products),
    decrementProductInventory: (state, productId) => {
      const product = state.products.find(p => p.id === productId);
      product.qt--;
    },
    incrementProductInventory: (state, { id: productId, qt: quantity }) => {
      const product = state.products.find(p => p.id === productId);
      product.qt += quantity;
    }
  },
  actions: {
    fetchAllProducts: ({ commit }) =>
      axios
        .get("/static/data.json")
        .then((response) => commit("loadProducts", response.data)),
    fetchOneProduct({ commit }, productId) {
      axios.get("/static/data.json").then((response) => {
        const product = response.data.filter((data) => data.id == productId)[0];
        commit("loadProducts", product);
      });
    },
  },
  getters: {
    products: (state) => state.products,
    productById: (state) => (productId) => state.products.find((p) => p.id === productId),
  },
  namespaced: true,
  modules: {
    cart: CartModule
  },
});
