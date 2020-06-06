import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: () =>
      import(
        /* webpackChunkName: "productdetail" */ "../views/ProductDetail.vue"
      ),
    children: [
      {
        path: "edit",
        component: () =>
          import(
            /* webpackChunkName: "productedit" */ "../views/ProductEdit.vue"
          )
      }
    ],
    props: true
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/_404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
