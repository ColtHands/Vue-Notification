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
            style: 'basic'
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
            if(validateOptions(options)) {
                commit('setDefaultOptions', options)
            } else {
                console.warn('Vue-Notify: there are problems with your options config', validateOptions.errors)
                // validateOptions.errors.forEach(e => { console.warn(e.message) })
            }
        },
        [NOTIFY]({ commit }, { message, options }) {
            if(validateOptions(options)) {
                const id = uuidV4()

                const { time } = options
    
                commit('addNewNotification', { message, id })
    
                console.log('notifying', message, options)
    
                setTimeout(() => {
                    commit('removeNotificationById', id)
                }, time || 3000)
            } else {
                console.warn('Vue-Notify: there are problems with your options config', validateOptions.errors)
                // validateOptions.errors.forEach(e => { console.warn(e.message) })
            }
        },
        [REMOVE_NOTIFICATION_BY_ID]({ commit }, id) {
            commit('removeNotificationById', id)
        }
    }
})