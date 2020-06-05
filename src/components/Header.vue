<template>
  <Header>
    <div id="nav">
      <img src="@/assets/logo.svg" alt="logo.svg" class="logo">
      <div id="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
      </div>
      <router-link to="/cart"><img src="@/assets/cart_icon.svg" alt="cart-icon" class="cart-icon" /></router-link>
    </div>
  </Header>
</template>

<script>
export default {};
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
  padding: 2rem .8rem;
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
  margin: .8rem;
}
.cart-icon {
    margin: 2rem 1rem;
}
</style>
