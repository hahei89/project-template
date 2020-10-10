import Vue from 'vue'

import '../../include'

import View from './view/index.vue'

const app = new Vue({
  store,
  render: h => h(View)
})
app.$mount('#app')
