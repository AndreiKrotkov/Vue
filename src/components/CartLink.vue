<template>
    <div class="">
        <router-link to="/cart" class="cart-link">Корзина</router-link>
    </div>
</template>

<script>
    export default {
        name: "CartLink"
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    .cart-link {
        text-decoration: none;
        display: block;
        max-width: 161px;
        border: 2px solid #426AB2;
        padding: 8px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        /*text-transform: uppercase;*/
        color: #426AB2;
        transition: all 0.3s;
    }
    .cart-link:hover {
        color: #F2F4F5;
        background: #426AB2;
    }
</style>