//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userLogged : "false",
        JWToken : ""
    }
});

export default store