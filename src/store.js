import { v4 as uuidV4 } from 'uuid'
import Vue from 'vue'
import Vuex from 'vuex'
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY,
    REMOVE_NOTIFICATION_BY_ID
} from './actionTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notifications: [],
        defaultOptions: {
            position: 'top-center',
            style: 'basic',
            time: 3000
        }
    },
    getters: {
        notifications: state => state.notifications.map(e => ({ ...state.defaultOptions, ...e})),
        eachUniqueActivePosition: (_, { notifications }) => [...new Set(notifications.map(e => e.position))]
    },
    mutations: {
        addNewNotification(state, notifiaction) {
            state.notifications.push(notifiaction)
        },
        removeNotificationById(state, id) {
            state.notifications = state.notifications.filter(e => e.id != id)
        },
        setDefaultOptions(state, defaultOptions) {
            const {
                position,
                style,
                time
            } = defaultOptions
            
            state.defaultOptions = {
                position,
                style,
                time
            }
        }
    },
    actions: {
        [SET_DEFAULT_OPTIONS]({ commit }, defaultOptions) {
            commit('setDefaultOptions', defaultOptions)
        },
        [NOTIFY]({ commit, state }, { message, options }) {
            const id = uuidV4()

            const {
                time = state.defaultOptions.time,
                position = state.defaultOptions.position,
                style = state.defaultOptions.style
            } = options

            commit('addNewNotification', { message, id, position, style })

            setTimeout(() => {
                commit('removeNotificationById', id)
            }, time || state.defaultOptions.time)
        },
        [REMOVE_NOTIFICATION_BY_ID]({ commit }, id) {
            commit('removeNotificationById', id)
        }
    }
})