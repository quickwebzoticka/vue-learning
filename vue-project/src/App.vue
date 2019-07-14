<template>
  <div>
    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <hr>

    <app-list></app-list>
  </div>
</template>

<script>

import Car from './Car.vue'
import Counter from './Counter.vue'
import listMixin from './listMixin.js'


export default {
  mixins: [listMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style scoped>
  
</style>
