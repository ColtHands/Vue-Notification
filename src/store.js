import { v4 as uuidV4 } from 'uuid'
import Vue from 'vue'
import Vuex from 'vuex'
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY, REMOVE_NOTIFICATION_BY_ID
} from './actionTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notifications: [],
        options: {
            defaultPosition: 'top-center',
            defaultType: 'basic'
        }
    },
    mutations: {
        addNewNotification(state, notifiaction) {
            state.notifications.push(notifiaction)
        },
        removeNotificationById(state, id) {
            state.notifications = state.notifications.filter(e => e.id != id)
        },
        setDefaultOptions(state, options) {
            state.options = options
        }
    },
    actions: {
        [SET_DEFAULT_OPTIONS]({ commit }, options) {
            // TODO check for option object
            commit('setDefaultOptions', options)
        },
        [NOTIFY]({ commit }, { message, options }) {
            const id = uuidV4()
            const { time } = options

            commit('addNewNotification', { message, id })

            setTimeout(() => {
                commit('removeNotificationById', id)
            }, time || 3000)
        },
        [REMOVE_NOTIFICATION_BY_ID]({ commit }, id) {
            commit('removeNotificationById', id)
        }
    }
})