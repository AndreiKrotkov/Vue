<template>
    <li class="card-item">
<!--        <div class="person"> Person {{index + 1}}</div>-->
        <img :src="elemArr.avatar" alt="avatar">
        <div class="wrp__person" v-bind:class="{active: isActive}">
            <div class="person-prev" v-on:click.prevent="showPerson">
                <span class="first-name">{{elemArr.first_name}}</span>
                <span class="last-name">{{elemArr.last_name}}</span>
                <div class="arrow">
                    <img src="../img/arrow.svg" alt="">
                </div>
            </div>
            <div class="person-details" v-show="isActive">
                <div class="wrp__group-details">
                    <span class="name">Email:</span>
                    <span>{{elemArr.email}}</span>
                </div>
                <div class="wrp__group-details">
                    <span class="name">Phone:</span>
                    <span>{{elemArr.tel}}</span>
<!--                    <span>{{newCartitem.id}}</span>-->
                </div>
            </div>
        </div>

<!--        <div class="card-btn">-->
<!--            <button v-on:click="$emit('removeElem', newCartitem['id'])">&times;</button>-->
<!--        </div>-->
    </li>
</template>

<!--                <input type="checkbox" v-on:change="newCartitem.completed = !newCartitem.completed">-->
<!--                <strong>{{index + 1}}</strong>-->
<!--            <button v-on:click="$emit('removeElem', newCartitem.id)">&times;</button>-->
<!--<span v-bind:class="{done: newCartitem.completed}">-->
<!--                {{newCartitem.name}}-->
<!--            </span>-->

<script>
    export default {
        name: "TodoItem",
        data() {
            return {
                isActive: false,
            }
        },



        methods: {
            showPerson: function () {
                this.isActive = !this.isActive
            },
        },
        props: ['elemArr'],
        // filters: {
        //     uppercase(val) {
        //         console.log(val);
        //         return val.toUpperCase()
        //     }
        // }
    }
</script>

<style>
    .card-item {
        display: flex;
        justify-content: space-between;
        flex-basis: 415px;
        margin: 0 auto 10px auto;
    }
    .card-item:not(:last-child) {
        margin-bottom: 15px;
    }
    .wrp__person {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid rgba(64, 64, 64, 0.2);
        border-left: none;
        /*background: #DBF3FF;*/
        border-radius: 0 3px 3px 0;
    }

    .person-prev {
        display: flex;
        padding: 10px 15px;
        cursor: pointer;
        transition: all .3s;
        position: relative;
        z-index: 0;
        border-bottom: 1px solid rgba(64, 64, 64, 0.2);
    }
    .person-prev .arrow {
        position: absolute;
        z-index: -1;
        right: 12px;
        top: calc(50% - 12px);
        transition: all 0.3s;
    }
    .person-prev span {
        font-weight: 600;
    }
    .person-prev:hover {
        background: #DBF3FF;
    }
    .person-prev .first-name {
        margin-right: 20px;
    }

    .person-details {
        padding: 10px 15px;
        text-align: left;

    }

    .wrp__group-details .name {
        min-width: 50px;
        margin-right: 20px;
    }
    .wrp__group-details span {
        font-family: monospace;
    }



    .active .person-prev {
        background: #DBF3FF;
    }
    .active .arrow {
        transform: rotate(-180deg);
    }
    .wrp__card-content {
        min-width: 220px;
        text-align: start;
    }
    /*.name, .user-name {*/
    /*    margin-bottom: 10px;*/
    /*}*/
    span {
        display: inline-block;
    }
    /*span:not(:last-child) {*/
    /*    margin-right: 20px;*/
    /*}*/
    /*span:first-child {*/
    /*    min-width: 50px;*/
    /*}*/
    span input {
        margin-right: 10px;
    }
    .card-btn button {
        cursor: pointer;
        height: fit-content;
    }
    .done {
        text-decoration: line-through;
    }



    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>