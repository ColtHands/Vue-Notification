import NotifyComponent from './components/Notify.vue'
import store from './store.js'
import { SET_DEFAULT_OPTIONS, NOTIFY } from './actionTypes.js'

const Notify = (message, options) => {
    store.dispatch(NOTIFY, { message, options })
}

const NotificationVuexPlugin = stre => {
    stre.$notify = Notify
}

export default {
    install(Vue, options) {
        if (this.installed) { return }
        this.installed = true

        
        store.dispatch(SET_DEFAULT_OPTIONS, options)
        
        Vue.component('notify', NotifyComponent)

        Vue.prototype['$notify'] = Notify
        Vue['notify'] = Notify
    }
}

export {
    NotificationVuexPlugin
}