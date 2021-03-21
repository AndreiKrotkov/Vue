<template>
    <div>
        <h2>Добро пожаловать в тестовый магазин Vue!</h2>
        <p>Здесь я тренеруюсь</p>

        <router-link to="/todos">Тестовое задание</router-link>
<!--        <router-link to="/cart">Корзина</router-link>-->

        <hr>
    </div>
</template>


<script>
    export default {
        name: "Home",
        components: {
        }
    }
</script>

<style scoped>

</style>