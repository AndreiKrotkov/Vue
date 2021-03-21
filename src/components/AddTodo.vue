<template>
    <div class="AddTodo">
        <transition name="fade">
            <div class="v-popup">
                <div class="v-popup-container">
                    <div class="v-popup__header">
                        <h3>Добавить нового пользователя</h3>
                        <div class="v-close" v-on:click="closePopup">
                            <span class="v-close-top"></span>
                            <span class="v-close-bt"></span>
                        </div>
                    </div>
                    <div class="v-popup__content">
                        <slot></slot>
                        <div class="div">
                            <form v-on:submit.prevent="onSubmit">
                                <div class="wrp__input">
                                    <el-input placeholder="Имя" v-model="name" v-bind:class="{error: isErrorEmail}"></el-input>
                                    <el-input placeholder="Фамиия" v-model="lastName" v-bind:class="{error: isErrorPass}"></el-input>
                                    <button type="submit">Добавить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
          return {
              name: '',
              lastName: '',
              isErrorEmail: false,
              isErrorPass: false,
          };
        },
        methods: {
            onSubmit () {
                console.log('submit', this.title);
                let nameLenght = this.name.length;
                let lastNameLenght = this.lastName.length;
                let checkErrorName = nameLenght === 0  ? this.isErrorEmail = true : this.isErrorEmail = false;
                let checkErrorLastName = lastNameLenght === 0  ? this.isErrorPass = true : this.isErrorPass = false;

                if(!checkErrorName && !checkErrorLastName) {
                    const newTodo = {
                        // id: Date.now(),
                        avatar: "https://reqres.in/img/faces/3-image.jpg",
                        first_name: this.name,
                        last_name: this.lastName,
                        email: 'janet.weaver@reqres.in',
                        tel: '+ 7 909 546 77 88',
                        completed: false
                    };
                    this.$emit('add-todo', newTodo);
                    this.name = '';
                    this.lastName = '';

                    // this.$emit('closePopup');
                    console.log('Ураа');
                } else {
                    console.log('отправка не возможна')
                }
                // if(this.name.trim() && this.lastName.trim()) {
                //     const newTodo = {
                //         // id: Date.now(),
                //         avatar: "https://reqres.in/img/faces/3-image.jpg",
                //         first_name: this.name,
                //         last_name: this.lastName,
                //         email: 'janet.weaver@reqres.in',
                //         tel: '+ 7 909 546 77 88',
                //         completed: false
                //     }
                //     this.$emit('add-todo', newTodo);
                //     this.name = '';
                //     this.lastName = '';
                // }
            },
            closePopup() {
                this.$emit('closePopup');
            },
        }
    }
</script>

<style>
    /*form {*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    max-width: 60%;*/
    /*    margin: 0 auto 10px auto;*/
    /*}*/
    .wrp__input {
        display: flex;
        flex-direction: column;
        width: 70%;
        margin: 0 auto;
    }
    input {

    }
    button {
        border: 1px solid rgba(64, 64, 64, 0.2);
        border-radius: 4px;
        background: #426AB2;
        color: white;
        padding: 10px 0;
    }
    .el-input {
        margin-bottom: 1rem;
    }
    .error input {
        border-color: red;
        border-radius: 4px;
    }

    .v-popup {
        display: flex;
        justify-content: flex-end;
    }
    .v-popup-container {
        max-width: 450px;
        padding: 40px;
        border: 1px solid rgba(64, 64, 64, 0.2);
        border-radius: 4px;
    }

    .v-popup__header {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .v-popup__header span {
        font-size: 20px;
        font-family: monospace;
    }

    .v-popup__content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
    }
    .v-popup__btn {
        text-align: end;
    }
    .v-popup__btn button {
        border: 1px solid rgba(64, 64, 64, 0.2);
        padding: 5px 15px;
        border-radius: 4px;
    }
    .div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .v-close {
        position: relative;
        padding: 10px;
    }
    .v-close span {
        width: 20px;
        height: 2px;
        background: #426AB2;
        position: absolute;
        cursor: pointer;
    }
    .v-close-top {
        transform: rotate(45deg);
    }
    .v-close-bt {
        transform: rotate(-45deg);
    }

</style>