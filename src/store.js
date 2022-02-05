import { v4 as uuidV4 } from 'uuid'
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY,
    REMOVE_NOTIFICATION_BY_ID
} from './actionTypes.js'
import {
    defaultStyle,
    defaultPosition,
    defaultTimeout
} from './availableOptions.js'
import {
    action,
    computed,
    observable
} from "mobx"
export default class NotifyStore {
    @observable notifications = []
    @observable defaultOptions = {
        position: defaultPosition,
        style: defaultStyle,
        timeout: defaultTimeout
    }

    @computed get getNotifications () {
        return this.notifications.map(e => ({ ...this.defaultOptions, ...e}))
    }

    @computed get eachUniqueActivePosition() {
        return [...new Set(this.getNotifications.map(e => e.position))]
    }

    @action.bound SET_DEFAULT_OPTIONS(defaultOptions) {
        this.defaultOptions = defaultOptions
    }

    @action.bound NOTIFY(message, options = {}) {
        console.log('NOTIFY', this)
        console.log('NOTIFY', message, options)
        const id = uuidV4()

        const {
            timeout = this.defaultOptions.timeout,
            position = this.defaultOptions.position,
            style = this.defaultOptions.style
        } = options

        this.notifications.push({ message, id, position, style })

        console.log('NOTIFY', 'this.notifications', this.notifications)

        setTimeout(() => {
            this.notifications = this.notifications.filter(e => e.id != id)
        }, timeout || this.defaultOptions.timeout)
    }

    @action.bound REMOVE_NOTIFICATION_BY_ID(id) {
        this.notifications = this.notifications.filter(e => e.id != id)
    }
}

// export default {
//     state: {
//         notifications: [],
//         defaultOptions: {
//             position: defaultPosition,
//             style: defaultStyle,
//             timeout: defaultTimeout
//         }
//     },
//     getters: {
//         notifications: state => state.notifications.map(e => ({ ...state.defaultOptions, ...e})),
//         eachUniqueActivePosition: (_, { notifications }) => [...new Set(notifications.map(e => e.position))]
//     },
//     mutations: {
//         addNewNotification(state, notifiaction) {
//             state.notifications.push(notifiaction)
//         },
//         removeNotificationById(state, id) {
//             state.notifications = state.notifications.filter(e => e.id != id)
//         },
//         setDefaultOptions(state, defaultOptions = {}) {
//             const {
//                 position = defaultPosition,
//                 style = defaultStyle,
//                 timeout = defaultTimeout
//             } = defaultOptions
            
//             state.defaultOptions = {
//                 position,
//                 style,
//                 timeout
//             }
//         }
//     },
//     actions: {
//         [SET_DEFAULT_OPTIONS]({ commit }, defaultOptions) {
//             commit('setDefaultOptions', defaultOptions)
//         },
//         [NOTIFY]({ commit, state, getters }, { message, options = {} }) {
//             const id = uuidV4()

//             const {
//                 timeout = state.defaultOptions.timeout,
//                 position = state.defaultOptions.position,
//                 style = state.defaultOptions.style
//             } = options

//             commit('addNewNotification', { message, id, position, style })

//             setTimeout(() => {
//                 commit('removeNotificationById', id)
//             }, timeout || state.defaultOptions.timeout)
//         },
//         [REMOVE_NOTIFICATION_BY_ID]({ commit }, id) {
//             commit('removeNotificationById', id)
//         }
//     }
// }