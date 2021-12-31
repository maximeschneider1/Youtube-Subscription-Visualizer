//Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userLogged : "false",
        JWToken : "" // ici il
    },
    plugins: [
        createPersistedState({
          getState: (key) => Cookies.getJSON(key),
          setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
      ]
});

export default store