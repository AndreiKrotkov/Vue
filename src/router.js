import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/list-person",
            component: () => import('./views/v-list-person.vue')
        },
        {
            path: "/cart",
            component: () => import('./views/Cart.vue')
        }
    ]
})