import Vue from 'vue'
import VueNotify from './../src/index.js'
import App from './App.vue'

Vue.use(VueNotify, {
    defaultPosition: 'top-center',
    defaultStyle: 'basic'
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