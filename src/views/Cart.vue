<template>
    <div>
    <h1 class="title-route">Your cart</h1>
    <p>Under construction</p>
        <ul v-for="item in cartItems" :key="item.id">
            <li>{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            cartItems: Object
        }
    }
</script>

<style scoped>
    p {
        text-align: center;
    }
</style>