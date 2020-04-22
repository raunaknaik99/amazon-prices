import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: "",
    error: "",
    userId: "",
    logoutTimer: null
  },
  getters: {
    isAuthenticated(state) {
      return state.token !== "";
    },
    user(state) {
      return state.user
    },
  },
  mutations: {
    authUser(state, userData) {
      state.error = "";
      state.token = userData.token;
      state.userId = userData.userId;
    },
    register(state) {
      state.error = "";
    },
    log_error(state, errorData) {
      state.error = errorData.error;
    },
    clearAuthData(state) {
      state.token = "";
      state.user = {};
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    auto_login({
      commit
    }) {
      if (this.state.idToken) {
        console.log('auto login not required; already logged in');
        return;
      }
      const token = localStorage.getItem("token");
      if (!token) {
        console.log('auto login not possible; no token stored');
        return
      }
      const expirationDate = Date.parse(localStorage.getItem('expirationDate'))
      const now = new Date().getTime();
      if (now > expirationDate) {
        console.log('auto login not possible; token not valid anymore');
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", {
        token,
        userId
      })
    },

    setLogoutTimer({
      dispatch,
      state
    }, expirationDate) {
      state.logoutTimer = setTimeout(() => {
        dispatch('logout');
      }, expirationDate * 1000);
    },

    async login({
      commit,
      dispatch,
      state
    }, user) {
      try {
        const res = await axios.post("/login", user);
        if (res.data.success) {
          const token = res.data.token;
          const userId = res.data.user._id;
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          localStorage.setItem("expirationDate", expirationDate);
          axios.defaults.headers.common['Authorization'] = token;
          commit('authUser', {
            token,
            userId
          });
          if (state.logoutTimer !== null) {
            clearTimeout(state.logoutTimer);
            state.logoutTimer = null;
          }
          dispatch('setLogoutTimer', res.data.expiresIn);
          return res
        }
      } catch (err) {
        commit('log_error', {
          error: err.response.data.error
        });
      }
    },

    async register({
      commit
    }, userData) {
      commit('register_request');
      try {
        let res = await axios.post("/register", userData);
        if (res.data.success) {
          commit("register");
          return res;
        }
      } catch (err) {
        commit('log_error', {
          error: err.response.data.error
        });
      }
    },

    logout({
      commit
    }) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      delete axios.defaults.headers.common['Authorization'];
      commit("clearAuthData");
    },

    async fetchUser({
      commit,
      state
    }) {
      if (!state.token) {
        return
      }
      const userId = state.userId;
      try {
        let res = await axios.get(`/profile?userId=${userId}`);
        const data = res.data;
        commit("storeUser", data.user);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
})