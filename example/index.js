import Vue from 'vue'
import Vuex from 'vuex'
import VueNotify, { NotificationVuexPlugin } from './../dist/bundle.js'
import App from './App.vue'

Vue.use(Vuex)

Vue.use(VueNotify, {
    timeout: 300000,
    style: 'danger-light'
})

const store = new Vuex.Store({
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