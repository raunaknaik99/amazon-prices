import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    status: "",
    token: "",
    isLoggedIn: false
  },
  mutations: {
    login_request(state) {
      state.status = "loading";
    },
    login_success(state, token, user) {
      state.token = token;
      state.user = user;
      state.status = "finished";
      state.isLoggedIn = true;
    },
    register_request(state) {
      state.status = "loading";
    },
    register_success(state) {
      state.status = "finished"
    }
  },
  actions: {
    async login({
      commit
    }, user) {
      commit('login_request');
      let res = await axios.post("/accounts/login", user);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        axios.defaults.headers.common['Authorization'] = token;
        commit('login_success', token, user);
      }
      return res;
    },
    async register({
      commit
    }, userData) {
      commit('register_request');
      let res = await axios.post("/accounts/register", userData);
      if (res.data.success) {
        commit("register_success");
      }
      return res;
    }
  },
  modules: {}
})