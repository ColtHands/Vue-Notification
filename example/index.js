import Vue from 'vue'
import VueTestPackage from './../src/index.js'
import App from './App.vue'

Vue.use(VueTestPackage, {
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