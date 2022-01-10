import Vue from 'vue'
import Vuex from 'vuex'
import VueNotify, { NotificationVuexPlugin } from './../src/index.js'
import App from './App.vue'

Vue.use(Vuex)

Vue.use(VueNotify, {
    time: 300000
})

const store = new Vuex.Store({
    plugins: [NotificationVuexPlugin],
    actions: {
        callNotificationFromStore() {
            this._vm.$notify('notification from store')
        },
        clickFromStoreUsingPlugin() {
            this.$notify('notification sent from store prototype function')
        }
    }
})

new Vue({
    store,
    el: '#app',
    components: {
        App
    }
})