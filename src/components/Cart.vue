<template>
    <div class="v-cart">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Приветствую в корзине! Тут пока что ничего нет (</h1>
                </div>
                <div class="col-12">
                    <router-link to="/">На главную</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "cart",
        data () {
            return {
                info: null
            };
        },
        components: {
            // axios: axios
        },
        mounted() {
        }
    }
</script>

<style>

</style>