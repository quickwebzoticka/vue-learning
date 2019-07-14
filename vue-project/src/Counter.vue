<template>
<div>
    <h1>Component: Counter.vue</h1>
    <h2>Counter: {{ counter }}</h2>
    <button @click="increseCounter">increase Counter</button>
</div>
</template>


<script>
import { eventEmitter } from './main';
export default {
    data() {
        return {
            counter: 0,
        }
    },
    created() {
        eventEmitter.$on('updateCounter', () => {
            this.counter++;
        })
    },
    methods: {
        increseCounter() {
            eventEmitter.$emit('increaseCounter', 10);
        }
    }
}
</script>


<style scoped>
    div {
        border: 1px solid black;
    }
</style>
