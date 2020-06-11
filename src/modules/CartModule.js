export const CartModule = {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    pushToCart: (state, item) => {
      const cartProduct = state.products.find((p) => p.id === item.id);
      if (!cartProduct) {
        state.products.push({ id: item.id, quantity: 1 });
      } else {
        cartProduct.quantity++;
      }
    },
    removeFromCart: (state, { item, quantity }) => {
      const cartProduct = state.products.find((p) => p.id === item.id);
      if (cartProduct) {
        cartProduct.quantity -= quantity;
        if (cartProduct.quantity === 0) {
          state.products = state.products.filter(
            (item) => item.id !== cartProduct.id
          );
        }
      }
    },
  },
  actions: {
    addProduct: ({ commit }, product) => {
      if (product.qt > 0) {
        commit("pushToCart", product);
        commit("decrementProductInventory", product.id, { root: true });
      }
    },
    removeProduct: ({ commit }, { item, quantity }) => {
      commit("removeFromCart", { item, quantity });
      const productId = item.id;
      commit(
        "incrementProductInventory",
        { id: productId, qt: quantity },
        { root: true }
      );
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getItemsCount: (state) =>
      state.products.reduce((total, item) => total + item.quantity, 0),
  },
};
