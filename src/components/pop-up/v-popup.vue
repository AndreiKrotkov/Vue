<template>
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
                    <el-input placeholder="Пожалуйста введите email" v-model="inputEmail" v-bind:class="{error: isErrorEmail}"></el-input>
                    <el-input placeholder="Пожалуйста введите пароль" v-model="inputPass" v-bind:class="{error: isErrorPass}"></el-input>
                </div>
<!--                show-password-->
            </div>
            <div class="v-popup__btn">
                <button v-on:click="addPerson">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-popup",
        components: {
        },
        data() {
            return {
                inputEmail: '',
                inputPass:'',
                isErrorEmail: false,
                isErrorPass: false,
                inputValArr: {
                    first_name: '',
                    last_name: '',
                    email: 'test@test.ru',
                    tel: '+7 909 777 99 55',
                }

            }
        },
        methods: {
            // addTodo(obj) {
            //     this.cartItem.push(obj);
            // },
            closePopup() {
                this.$emit('closePopup');
            },
            addPerson() {
                let inputEmailLenght = this.inputEmail.length;
                let inputPassLenght = this.inputPass.length;
                this.inputValArr.first_name = this.inputEmail;
                this.inputValArr.last_name = this.inputPass;
                console.log(this.inputValArr)
                let checkErrorEmail = inputEmailLenght === 0  ? this.isErrorEmail = true : this.isErrorEmail = false;
                let checkErrorPass = inputPassLenght === 0  ? this.isErrorPass = true : this.isErrorPass = false;

                if(!checkErrorEmail || !checkErrorPass) {
                    this.$emit('closePopup');
                    console.log('Ураа');
                } else {
                    console.log('отправка не возможна')
                }
            }
        }
    }
</script>

<style>
    /*.v-popup {*/
    /*    display: flex;*/
    /*    justify-content: flex-end;*/
    /*}*/
    /*.v-popup-container {*/
    /*    max-width: 450px;*/
    /*    padding: 40px;*/
    /*    border: 1px solid rgba(64, 64, 64, 0.2);*/
    /*    border-radius: 4px;*/
    /*}*/

    /*.v-popup__header {*/
    /*    display: flex;*/
    /*    justify-content: space-around;*/
    /*    margin-bottom: 1rem;*/
    /*}*/
    /*.v-popup__header span {*/
    /*    font-size: 20px;*/
    /*    font-family: monospace;*/
    /*}*/

    /*.v-popup__content {*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    margin-bottom: 2em;*/
    /*}*/
    /*.v-popup__btn {*/
    /*    text-align: end;*/
    /*}*/
    /*.v-popup__btn button {*/
    /*    border: 1px solid rgba(64, 64, 64, 0.2);*/
    /*    padding: 5px 15px;*/
    /*    border-radius: 4px;*/
    /*}*/
    /*.div {*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*}*/
    /*.v-close {*/
    /*    position: relative;*/
    /*    padding: 10px;*/
    /*}*/
    /*.v-close span {*/
    /*    width: 20px;*/
    /*    height: 2px;*/
    /*    background: #426AB2;*/
    /*    position: absolute;*/
    /*    cursor: pointer;*/
    /*}*/
    /*.v-close-top {*/
    /*    transform: rotate(45deg);*/
    /*}*/
    /*.v-close-bt {*/
    /*    transform: rotate(-45deg);*/
    /*}*/
</style>