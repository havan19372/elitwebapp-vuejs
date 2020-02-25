import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        isAuthenticated: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        }
    },
    actions: {
        userJoin({ commit }) {
            commit('setUser', 'user');
            commit('setIsAuthenticated', true);
            router.push('/about');
        },
        userLogin({ commit }, { email, password }) {
            // if ( email == 'a@gmail.com' && password == 'aaaaaa' )
            // {
            commit('setUser', 'user');
            commit('setIsAuthenticated', true);
            router.push('/about');
            // } else {
            // router.push('/');
            // }
        },
        userSignOut({ commit }) {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
