import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from './Views/Home'

Vue.use(Router);
Vue.use(Vuex);
Vue.config.devtools = true


export default new Router({

    routes : [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/oauth/:token',
            name: 'OauthRedirect',
            component: () => import('./components/OauthRedirect.vue')
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
            path: '/default',
            name: 'default',
            component: () => import('./components/Default.vue')
        },
        {
            path: '/subscriptions',
            name: 'Subscriptions',
            component: () => import('./Views/Subscriptions.vue')
        },
    ]
})