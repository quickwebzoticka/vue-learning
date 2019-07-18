<template>
  <div>
    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <hr>

    <app-list></app-list>

    <hr>

    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>

    <hr>

    <div>
      <label>
        <input type="checkbox" value="vk" v-model="social">
        <span>VK</span>
      </label>
      <label>
        <input type="checkbox" value="instagram" v-model="social">
        <span>Instagram</span>
      </label>
      <label>
        <input type="checkbox" value="tiktok" v-model="social">
        <span>tiktok</span>
      </label>

      <div>
        <ul>
          <li v-for="s of social">{{ s }}</li>
        </ul>
      </div>
    </div>

    <div>
      <label>
        <input type="radio" value="vk" v-model="socialRadio">
        <span>VK</span>
      </label>
      <label>
        <input type="radio" value="instagram" v-model="socialRadio">
        <span>Instagram</span>
      </label>
      <label>
        <input type="radio" value="tiktok" v-model="socialRadio">
        <span>tiktok</span>
      </label>

      <div>
        {{ socialRadio }}
      </div>
    </div>

    <div>
      <select v-model="socialRadio">
        <option
          :key="s"
          v-for="s of socialNets"
        >{{ s }}</option>
      </select>
    </div>

    <div>
      <input type="text" v-model.number="age"> {{ age }}
    </div>

    <hr>

    <div>
      <app-onoff v-model="switched"></app-onoff>

      <div v-if="switched">Component enabled</div>
      <div v-else>Cmpoent disabled</div>
    </div>
  </div>
</template>

<script>

import Car from './Car.vue'
import Counter from './Counter.vue'
import listMixin from './listMixin.js'
import appOnOff from './appOnOff'


export default {
  mixins: [listMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  },
  data() {
    return {
      age: 25,
      textarea: 'Initial text',
      social: ['vk'],
      socialRadio: 'vk',
      socialNets: ['vk', 'instagram', 'tiktok'],
      switched: true
    }
  },
  components: {
    'app-onoff': appOnOff
  }
}
</script>

<style scoped>
  p {
    white-space: pre;
  }
  textarea {
    width: 400px;

    height: 100px;
  }


</style>
