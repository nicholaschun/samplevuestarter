import Vue from 'vue'
import toasted from 'vue-toasted'
import App from './App.vue'

Vue.use(toasted)

new Vue({
    el: '#app',
    render: h =>  h(App)
})