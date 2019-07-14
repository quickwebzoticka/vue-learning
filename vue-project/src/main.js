import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color'
import List from './List.vue'

Vue.directive('colored', ColorDirective)
Vue.filter('uppercase', value => value.toUpperCase())

Vue.component('app-list', List)

Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate');
    
  }
})

export const eventEmitter = new Vue()


new Vue({
  el: '#app',
  render: h => h(App)
})


