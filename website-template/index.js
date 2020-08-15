import Vue from 'vue'

import '../../include'

import View from './view/index.vue'
import store from './store'

const app = new Vue({
  store,
  render: h => h(View)
})
app.$mount('#app')
