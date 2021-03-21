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
        font-family: Roboto, monospace, sans-serif;
        display: block;
        max-width: 161px;
        border: 2px solid #426AB2;
        padding: 6px 8px;
        border-radius: 5px;
        line-height: 17px;
        font-weight: 600;
        text-align: center;
        color: #426AB2;
        transition: all 0.3s;
    }
    .cart-link:hover {
        color: #F2F4F5;
        background: #426AB2;
        text-decoration: none;
    }
</style>