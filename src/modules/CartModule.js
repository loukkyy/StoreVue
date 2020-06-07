export const CartModule = {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        pushToCart: (state, product) => {
            const cartProduct = state.products.find ( p => p.id === product.id);
            if (!cartProduct) {
                state.products.push({id: product.id, quantity: 1});
            } else {
                cartProduct.quantity++;
            }
            }
    },
    actions: {
        addProduct: ({commit}, product) => {
            if(product.qt > 0) {
                commit('pushToCart', product)
                commit('decrementProductInventory' , product.id, {root: true})
            }
        }
    },
    getters: {
        getProducts: state => state.products
    },
}