<template>
    <div class="item-container">
        <button class="btn btn-remove"><font-awesome-icon icon="times" /></button>
        <img :src="itemById(itemId).image" alt="">
        <p>{{itemById(itemId).name}}</p>
        <div class="quantity-controls">
        <button class="btn "><font-awesome-icon icon="plus" /></button>
        <span>{{itemQuantity}}</span>
        <button class="btn"><font-awesome-icon icon="minus" /></button>
        <span>{{ totalPrice }}</span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        props: {
            itemId: {
            type: Number,
            required: true
            },
            itemQuantity: {
            type: Number,
            required: true
            }
        },
        computed: {
            ...mapGetters({
                itemById: 'productById'
            }),
            totalPrice() {
                return (this.itemById(this.itemId).price * this.itemQuantity)
            }
            //item:  this.productById(this.itemId)
        },
    }
</script>

<style scoped>
.item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(153, 47%, 49%);
    padding: 0.4rem;
    font-size: 1rem;
    min-width: 20vw;
    box-shadow: 0 0 3px 2px hsl(153, 47%, 59%);
}
img {
    height: 24px;
}
p {
}
.btn {
    font-size: 0.8rem;
    margin: 0;
}
</style>