import Notify from './components/Notify.vue'
import Vuex from 'vuex'
import notifyStore from './store.js'
import { observer } from "mobx-vue";
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY
} from './actionTypes.js'

const NotifyFn = function(message, options) {
    console.log('Notify', Vue.extend(Notify))
    Notify.notifyState.NOTIFY({ message, options })
}

export default {
    install(Vue, options) {
        if (this.installed) { return }
        this.installed = true
        
        Vue.use(Vuex)
        
        // const storeInstance = new Vuex.Store(notifyStore)
        
        // storeInstance.dispatch(SET_DEFAULT_OPTIONS, options)
        
        // Vue.prototype.$notifyStore = storeInstance
        Vue.prototype.$notify = Vue.extend(Notify).notifyState.NOTIFY(message, options)
        // Vue.prototype.data = new notifyStore()

        Vue.component('Notify', Vue.extend(Notify))
    }
}