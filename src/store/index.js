import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registrations: [],
    users: [
      { id: 1, name: 'Max', registered: false },
      { id: 2, name: 'Anna', registered: false },
      { id: 3, name: 'Chris', registered: false },
      { id: 4, name: 'Sven', registered: false },
    ],
  },
  getters: {
    registrations(state) {
      return state.registrations
    },
    unregisteredUsers(state) {
      return state.users.filter((user) => {
        return !user.registered
      })
    },
    totalRegistrations(state) {
      return state.registrations.length
    },
  },
  mutations: {
    register(state, userId) {
      const user = state.users.find((user) => {
        return user.id == userId
      })
      user.registered = true
      const registration = {
        userId: userId,
        name: user.name,
      }
      state.registrations.push(registration)
    },
    unregister(state, payload) {
      const user = state.users.find((user) => {
        return user.id == payload.userId
      })
      user.registered = false
      const registration = state.registrations.find((registration) => {
        return registration.userId == payload.userId
      })
      state.registrations.splice(state.registrations.indexOf(registration), 1)
    },
  },
  actions: {
    Register({ commit }, userId) {
      setTimeout(() => {
        commit('register', userId)
      }, 100)
    },
  },
})
