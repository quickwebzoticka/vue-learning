<template>
  <div>
    <button @click="changeColor">colorChange</button>
    <app-counter v-colored:background.delay="color"></app-counter>
    <app-counter v-colored:color.font.delay="color"></app-counter>
    <div v-font>local font</div>
    <app-car>
      <h2 slot="title">Carname: {{ carName }}</h2>
      <p slot="main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, similique!</p>
    </app-car>
  </div>
</template>

<script>

import Car from './Car.vue'
import Counter from './Counter.vue'


export default {
  data() {
    return {
      carName: 'Mazda',
      color: 'red',
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  },
  methods: {
    changeColor() {
      this.color = "green";
      console.log(this.color)
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '40px';
      }
    }
  }
}
</script>

<style scoped>
  
</style>
