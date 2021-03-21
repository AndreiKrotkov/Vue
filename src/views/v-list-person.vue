<template>
    <div class="v-list-person">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="link-home">
                        <router-link to="/">На главную</router-link>
                    </div>
                    <div class="list-title">
                        <h2>Список пользователей</h2>
                    </div>
                    <div class="wrp__add-persson">
                        <button class="add-person"
                                v-on:click="openPopup"
                                v-show="!popupActive"
                        >Новый пользователь
                        </button>
                    </div>
                    <div class="wrp_input">
                        <label for="inputPerson"> Поле ввода
                            <input type="text" v-model="searchPerson" id="inputPerson">
                        </label>
                    </div>
                    <AddTodo
                            v-on:add-todo="addTodo"
                            v-on:closePopup="closePopup"
                            v-show="isShow"
                    />
                    <Loader v-if="loading" />
                    <TodoList
                            v-else-if="arrPerson.length"
                            v-bind:cartItem="filterPerson"
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from '../components/TodoList';
import AddTodo from "../components/AddTodo";
import Loader from "../components/Loader";
export default {
    name: "v-list-person",
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
            isShow: false,
            popupActive: false,
            searchPerson: ''
        }
    },
    mounted() {
        this.getUsers();
        setInterval(() => {
            this.updateUsers();
        }, 60000);
    },
    computed: {
        idPerson() {
            return this.arrPerson.map(el => el.id);
        },
        filterPerson() {
            if(!this.searchPerson.length) {
                return this.arrPerson;
            } else {
                return this.arrPerson.filter((el) => {
                    return el.first_name.toLowerCase().indexOf(this.searchPerson.toLowerCase()) !== -1;
                })
            }
        }
    },
    components: {
        TodoList, Loader, AddTodo
    },
    methods: {
        // Функция открывания попапа для добавления пользователя
        openPopup() {
            this.isShow = true;
            this.popupActive = true;
        },
        // Функция закрытия попапа для добавления пользователя
        closePopup() {
            this.isShow = false;
            this.popupActive = false;
        },
        // Функция добавления пользователя
        addTodo(obj) {
            this.arrPerson.unshift(obj);
            this.isShow = false;
            this.popupActive = false;
        },
        // Функции пагинации и перехода по страницам
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
        // Функция на получение списка пользователей
        getUsers() {
            fetch('https://reqres.in/api/users?page='+this.pageNumber)
                .then(response => response.json())
                .then(json => {
                    for(let i=0; i < json.data.length; i++){
                        const random = Math.floor(Math.random() * this.arrPhone.length);
                        json.data[i].tel = this.arrPhone[random];
                    }
                    this.arrPerson = json.data;
                    this.loading = false;
                    this.totalPages = json.total_pages;
                }).catch((er) => {
                console.log(er);
            });
        },
        // Функция на обновление списка пользователей
        updateUsers() {
            fetch('https://reqres.in/api/users?page='+this.pageNumber)
                .then(response => response.json())
                .then(json => {
                    for(let i=0; i < json.data.length; i++){
                        let isFound = this.idPerson.find((id) => {
                            return id === json.data[i].id
                        });
                        if(!isFound) {
                            this.arrPerson.push(json.data[i])
                        }
                    }
                }).catch((er) => {
                    console.log(er);
                });
            }
    }
}
</script>

<style>
    .wrp_input {
        text-align: end;
        margin-bottom: 20px;
    }
    .wrp_input input {
        border: 1px solid rgba(64, 64, 64, 0.2);
        border-radius: 4px;
    }
    .wrp_input input:focus {
        outline: none;
        border: 1px solid #426AB2;
    }
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
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(64, 64, 64, 0.2);
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
    }

    .link-home {
        text-align: end;
    }
    .link-home a {
        font-weight: 600;
        color: #426AB2;
        border: 1px solid rgba(64, 64, 64, 0.2);
        border-radius: 4px;
        padding: 5px 10px;
        transition: all 0.5s;
        text-decoration: none;

    }
    .link-home a:hover {
        color: white;
        background: #426AB2;
    }

    .list-title {
        width: fit-content;
        color: #426AB2;
        font-family: Roboto, monospace, sans-serif;
        margin: 0 auto ;
        border-bottom: 2px solid;
    }

</style>