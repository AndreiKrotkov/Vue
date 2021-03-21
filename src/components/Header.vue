<template>
    <div class="v-header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <header>
                        <div class="logo">
                            <img src=".././assets/logo.png" alt="">
                        </div>
                        <CartLink />
                    </header>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import CartLink from "./CartLink";
    export default {
        name: "v-header",
        components: {
            CartLink
        }
    }
</script>

<style>
@media screen and (min-width: 320px){
    .v-header {
        background: #F2F4F5;
        border-bottom: 2px solid #426AB2;
        margin-bottom: 20px;
    }
    header {
        display: flex!important;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
    }
    .logo img {
        max-height: 70px;
    }

}

</style>