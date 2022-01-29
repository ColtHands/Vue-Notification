import Notify from './components/Notify.vue'
import Vuex from 'vuex'
import notifyStore from './store.js'
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY
} from './actionTypes.js'

const NotifyFn = function(message, options) {
    this.$notifyStore.dispatch(NOTIFY, { message, options })
}

export default {
    install(Vue, options) {
        if (this.installed) { return }
        this.installed = true
        
        Vue.use(Vuex)
        
        const storeInstance = new Vuex.Store(notifyStore)
        Vue.prototype.$notifyStore = storeInstance
        
        storeInstance.dispatch(SET_DEFAULT_OPTIONS, options)
        
        Vue.component('Notify', Vue.extend(Notify))
        
        Vue.prototype.$notify = NotifyFn
    }
}

// const NotificationVuexPlugin = (store) => {
//     store.$notify = NotifyFn
// }

// export {
//     NotificationVuexPlugin
// }