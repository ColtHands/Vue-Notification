import Vue from 'vue'
import VueNotify from './../src/index.js'
import App from './App.vue'

Vue.use(VueNotify, {
    position: 'top-right',
    style: 'warn',
    mockErr: true
})

new Vue({
    el: '#app',
    components: {
        App
    },
    data: {
        message: 'Hello Vue!'
    }
})