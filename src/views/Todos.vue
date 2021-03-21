<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Список пользователей</h2>
                <p>Получаю по запросу, вывожу в компоненте Todoitem</p>
                <router-link to="/">Home</router-link>
                <hr>

                <div class="wrp__add-persson">
                    <button class="add-person"
                            v-on:click="addPerson"
                            v-show="!popupActive"
                    >Новый пользователь
                    </button>
                </div>
                <transition name="fade">
                    <AddTodo
                            v-on:add-todo="addTodo"
                            v-on:closePopup="closePopup"
                            v-show="isShow"
                    />
                </transition>
                <hr>
                <Loader v-if="loading" />
                <TodoList
                        v-else-if="arrPerson.length"
                        v-bind:cartItem="arrPerson"
                        v-on:remove-todo="removeTodo"
                />
                <p v-else>Список пуст</p>

                <div class="pagination">
                    <div class="pagination-arrow">
                        <button v-on:click.prevent="goToPrevPage"
                                v-if="pageNumber !== 1">prev</button>
                        <button v-on:click.prevent="goToNextPage"
                                v-if="pageNumber !== totalPages">next</button>
                    </div>

                    <div class="pagination-pages">
                        <button v-for="item in totalPages"
                                v-bind:key="item"
                                v-on:click="goToPage(item)"
                        >{{item}}</button>
                    </div>
                </div>
                <span> this id person {{idPerson}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from '../components/TodoList';
import AddTodo from "../components/AddTodo";
import Loader from "../components/Loader";
export default {
    name: "Todos",
    data() {
        return {
            arrPerson: [],
            loading: true,
            pageNumber: 1,
            totalPages: 0,
            input:'',
            arrPhone: [
                '+7 905 284 11 23',
                '+7 (495) 677 11 23',
                '+7 909 524 11 21',
                '+7 954 23 78 73',
                '+7 910 563 88 23',
                '+7 920 565 78 23',
                '+7 915 136 23 73',
                '+7 917 123 15 43',
                '+7 970 668 15 43',
                '+7 920 265 15 43',
                '+7 930 836 15 43',
                '+7 910 174 15 43',
            ],
            idPerson: [],
            isShow: false,
            popupActive: false,

        }
    },
    mounted() {
        this.getUsers();
        // setInterval(() => {
            this.getUsers();
        // }, 30000)
    },
    components: {
        TodoList, Loader, AddTodo

        // Cart: Cart
    },
    methods: {
        addPerson() {
            this.isShow = true;
            this.popupActive = true;
        },
        closePopup() {
            this.isShow = false;
            this.popupActive = false;
            console.log('Закрытие попапа');
        },
        removeTodo(id) {
            // console.log(id)
            this.arrPerson = this.arrPerson.filter(i => i.id !== id);
        },
        addTodo(obj) {
            this.arrPerson.unshift(obj);
            this.isShow = false;
            this.popupActive = false;
            console.log('Закрытие попапа');
        },
        goToNextPage() {
            this.pageNumber++;
            this.getUsers();
        },
        goToPrevPage() {
            this.pageNumber--;
            this.getUsers();
        },
        goToPage(item) {
            this.pageNumber = item;
            this.getUsers();
        },
        getUsers() {
            fetch('https://reqres.in/api/users?page='+this.pageNumber)
                .then(response => response.json())
                .then(json => {
                    // setInterval(()=> {
                    // console.log(json);
                    // console.log(json.data);

                    for(let i=0; i < json.data.length; i++){
                        const random = Math.floor(Math.random() * this.arrPhone.length);
                        json.data[i].tel = this.arrPhone[random];
                        this.idPerson.push(json.data[i].id);
                    }

                    this.arrPerson = json.data;
                    // this.cartItem['test'] = 1;
                    this.loading = false;
                    this.totalPages = json.total_pages;
                    // }, 15000)
                })
        },
    }
}
</script>

<style>
    .pagination {
        max-width: 600px;
        margin: 0 auto 120px auto;
    }
    .pagination-arrow {
        margin-right: 40px;
    }
    .pagination-arrow button {
        font-family: monospace;
        border: 1px solid rgba(64, 64, 64, 0.2);
        padding: 5px;
    }
    .pagination-pages button {
        font-family: monospace;
        border: 1px solid rgba(64, 64, 64, 0.2);
        padding: 5px 20px;
    }
    .pagination-pages button:not(:last-child) {
        margin-right: 20px;
    }
    /* Кнопка добавить нового пользователя*/
    .wrp__add-persson {
        text-align: end;
    }
    .add-person {
        font-family: Roboto, monospace, sans-serif;
        font-weight: 600;
        font-size: 16px;
        border: 1px solid rgba(64, 64, 64, 0.2);
        padding: 5px 10px;
        background: transparent;
        color: #426AB2;
        transition: all .3s;
    }
    .add-person:hover {
        color: white;
        background: #426AB2;
        /*color: #426AB2;*/
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

</style>