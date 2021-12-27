import Vue from 'vue'
import VueTestPackage from './../src/index.js'
import App from './App.vue'

Vue.use(VueTestPackage)

new Vue({
    el: '#app',
    components: {
        App
    },
    data: {
        message: 'Hello Vue!'
    }
})