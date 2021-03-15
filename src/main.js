import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import VueCookies from 'vue-cookies-reactive'

import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuelidate)

Vue.use(VueCookies)

Vue.$cookies.config('1d')
Vue.axios.defaults.baseURL = 'http://localhost:8000/'

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
