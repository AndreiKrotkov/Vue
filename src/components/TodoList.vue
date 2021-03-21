<template>
    <div class="TodoList">
        <ul class="list">
            <TodoItem
                v-for="(el, i) of cartItem"
                v-bind:elemArr="el"
                v-bind:index="i"
                v-bind:key="el.id"
            />
        </ul>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        data() {
            return {

            };
        },
        components: {
            TodoItem
        },
        props: ["cartItem"],
    }
</script>

<style>
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 0 20px 0;
        margin: 0;
        list-style: none;
    }
</style>