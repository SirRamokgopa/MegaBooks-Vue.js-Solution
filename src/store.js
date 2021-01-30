import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index.js";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        authUser: null
    },
    getters: {
        user(state) {
            return state.authUser
        }
    },
    mutations: {
        setUser(state, user) {
            state.authUser = user;
        }
    },
    actions: {
        changeAuthState({ commit }, user) {
            if (user) {
                commit("setUser", user);
                router.push({ name: "Dashboard" });
            } else {
                commit("setUser", null);
                router.push({ name: "Login" });
            };
        }
    }
});