<template>
  <div>
    <!-- <app-counter></app-counter> -->
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
      carName: 'Mazda'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style scoped>
  
</style>
