import { v4 as uuidV4 } from 'uuid'
import Vue from 'vue'
import Vuex from 'vuex'
import validateOptions from './validateOptions.js'
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
            state.defaultOptions = defaultOptions
        }
    },
    actions: {
        [SET_DEFAULT_OPTIONS]({ commit }, defaultOptions) {
            if(validateOptions(defaultOptions)) {
                commit('setDefaultOptions', defaultOptions)
            } else {
                console.warn('Vue-Notify: there are problems with your options config', validateOptions.errors)
            }
        },
        [NOTIFY]({ commit, state }, { message, options }) {
            console.log(NOTIFY, message, options)
            if(validateOptions(options)) {
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
            } else {
                console.warn('Vue-Notify: there are problems with your options config', validateOptions.errors)
            }
        },
        [REMOVE_NOTIFICATION_BY_ID]({ commit }, id) {
            commit('removeNotificationById', id)
        }
    }
})