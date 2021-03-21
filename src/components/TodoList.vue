<template>
    <div>
        <ul class="list">
            <TodoItem
                v-for="(el, i) of cartItem"
                v-bind:elemArr="el"
                v-bind:index="i"
                v-bind:key="el.id"
                v-on:removeElem="deleteElem"
            />
        </ul>

<!--        <button class="add-person"-->
<!--                v-on:click="addPerson"-->
<!--                v-show="!popupActive"-->
<!--        >Add-Person-->
<!--        </button>-->
        <transition name="fade">
<!--            <PopApp v-show="isShow"-->
<!--                v-on:closePopup="closePopup"-->
<!--            />-->
        </transition>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    // import PopApp from "../components/pop-up/v-popup";


    export default {
        name: "TodoList",
        data() {
            return {
                isShow: false,
                popupActive: false,
            };
        },
        components: {
            TodoItem
        },
        props: ["cartItem"],
        methods: {
            deleteElem(id) {
                this.$emit('remove-todo', id)
            },
            // addPerson() {
            //     this.isShow = true;
            //     this.popupActive = true;
            // },

        }
    }
</script>

<style>
.list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 20px 0;
    margin: 0;
    list-style: none;
}

</style>