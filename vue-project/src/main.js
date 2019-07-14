import Vue from 'vue'
import App1 from './App.vue'

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App1)
})


