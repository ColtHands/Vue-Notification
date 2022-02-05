import Notify from './components/Notify.vue'
import Vuex from 'vuex'
import notifyStore from './store.js'
import { observer } from "mobx-vue";
import {
    SET_DEFAULT_OPTIONS,
    NOTIFY
} from './actionTypes.js'

const NotifyFn = function(message, options) {
    console.log('asd', message, options)
    this.state.NOTIFY('asd')
}

export default {
    install(Vue, options) {
        if (this.installed) { return }
        this.installed = true
        // Vue.prototype.state = new notifyStore()
        
        Vue.prototype.$notify = NotifyFn

        observer(Vue.component('Notify', Vue.extend(Notify, {
            data() {
                return { state: new notifyStore(), state: 'asAAAAAd' }
            }
        })))
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   