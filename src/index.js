import Notify from './components/Notify.vue'
import Vuex from 'vuex'
import store from './store.js'
import { SET_DEFAULT_OPTIONS, NOTIFY } from './actionTypes.js'

const NotifyFn = function(message, options) {
    console.log('NOTIFY!')
    console.log('this.$store', this.$store)
    console.log('this.$store.state', this.$store.state)
    console.log('this.$store.getters', this.$store.getters)
    console.log('this.$store.state.defaultOptions', this.$store.state.defaultOptions)
    // this.$store.dispatch(NOTIFY, { message, options })
}

const NotificationVuexPlugin = store => {
    store.$notify = Notify
}

export default {
    install(Vue, options) {
        if (this.installed) { return }
        this.installed = true

        Vue.use(Vuex)

        const storeInstance = new Vuex.Store(store)

        new Vue({
            store: storeInstance
        })

        // Vue.prototype['$store'] = storeInstance
        // Vue['$store'] = storeInstance
        // Vue['store'] = storeInstance

        // Vue.store.registerModule('notify', store)

        // console.log('Vue.$store', Vue.$store)
        // console.log('Vue.$store.state', Vue.$store.state)
        // console.log('Vue.prototype.$store', Vue.prototype.$store)
        // console.log('Vue.store', Vue.store)
        // console.log('Vue.store.state', Vue.store.state)
        // console.log('this', this)

        
        storeInstance.dispatch(SET_DEFAULT_OPTIONS, options)

        console.log('storeInstance', storeInstance)
        console.log('storeInstance.state', storeInstance.state)
        console.log('storeInstance.state.defaultOptions', storeInstance.state.defaultOptions)

        // const NotifyConstructor = Vue.extend(Notify)
        // const NotifyComponent = new NotifyConstructor({
        //     store: storeInstance
        // })
        
        // Vue.component('Notify', Vue.extend(Notify))
        Vue.extend({
            components: {
                Notify
            }
        })

        Vue.prototype['$notify'] = NotifyFn
        Vue['notify'] = NotifyFn
    }
}

export {
    NotificationVuexPlugin
}