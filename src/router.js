import Vue from 'vue'
import Router from 'vue-router'
import Home from './Views/Home'

Vue.use(Router);

export default new Router({

    routes : [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./Views/About.vue')
        },
        {
            path: '/random',
            name: 'random',
            component: () => import('./Views/Random.vue')
        },
        {
            path: '/subscriptions',
            name: 'Subscriptions',
            component: () => import('./Views/Subscriptions.vue')
        },
    ]
})