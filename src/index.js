import NotifyComponent from './components/Notify.vue'
import store from './store.js'
import { SET_DEFAULT_OPTIONS, NOTIFY } from './actionTypes.js'

const Notify = (message, options) => {
    store.dispatch(NOTIFY, { message, options })
}

export default {
    install(Vue, options) {
        if (this.installed) { return }
        this.installed = true

        // NOTE setup params sending into vuex
        store.dispatch(SET_DEFAULT_OPTIONS, options)

        Vue.component('notify', NotifyComponent)

        Vue.prototype['$notify'] = Notify
        Vue['notify'] = Notify
    }
}