import Vuex from 'vuex'
import NotifyComponent from './Notify.vue'
import store from './store.js'

export default {
    install(Vue, args = {}) {
        if (this.installed) { return }
        this.installed = true
        Vue.use(Vuex)
        Vue.store = store

        Vue.component('notify', NotifyComponent)

        const Notify = params => {
            store.dispatch('notify', params)
        }

        Vue.prototype['$notify'] = Notify
        Vue['notify'] = Notify
    }
}