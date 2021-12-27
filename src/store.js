import { v4 as uuidV4 } from 'uuid'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notifications: []
    },
    mutations: {
        addNewNotification(state, notifiaction) {
            state.notifications.push(notifiaction)
        },
        removeNotificationById(state, id) {
            state.notifications = state.notifications.filter(e => e.id != id)
        }
    },
    actions: {
        notify({ commit }, { message, time }) {
            const id = uuidV4()

            commit('addNewNotification', { message, id })

            setTimeout(() => {
                commit('removeNotificationById', id)
            }, time || 3000)
        }
    }
})