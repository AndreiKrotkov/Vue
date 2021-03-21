<template>
    <li class="card-item">
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
                </div>
            </div>
        </div>
    </li>
</template>

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
    }
</script>

<style>
    .card-item {
        display: flex;
        flex-basis: 500px;
        margin-bottom: 25px;
    }
    .card-item img {
        max-height: 128px;
    }

    .wrp__person {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid rgba(64, 64, 64, 0.2);
        border-left: none;
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
    span {
        display: inline-block;
    }

    span input {
        margin-right: 10px;
    }
    .card-btn button {
        cursor: pointer;
        height: fit-content;
    }
</style>