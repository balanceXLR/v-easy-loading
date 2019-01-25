import Vue from 'vue'
import App from './App.vue'
import VEasyLoading from '../dist/bundle.js'

Vue.use(VEasyLoading)

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})