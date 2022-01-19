import { v4 as uuidV4 } from 'uuid'
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY,
    REMOVE_NOTIFICATION_BY_ID
} from './actionTypes.js'
import { defaultStyle, defaultPosition } from './availibleOptions.js'

export default {
    state: {
        notifications: [],
        defaultOptions: {
            position: defaultPosition,
            style: defaultStyle,
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
        setDefaultOptions(state, defaultOptions = {}) {
            const {
                position = defaultPosition,
                style = defaultStyle,
                time = 3000
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
            console.log(SET_DEFAULT_OPTIONS)
            commit('setDefaultOptions', defaultOptions)
        },
        [NOTIFY]({ commit, state, getters }, { message, options = {} }) {
            console.log("NOTIFY", state, getters)

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
}