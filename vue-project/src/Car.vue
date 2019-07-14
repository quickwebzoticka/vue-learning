<template>
    <div>
        <slot name="title"></slot>    

        <hr>

        <slot name="main"></slot>

        <hr>

        <button @click="increaseCounter">Increase Counter</button>

        <div>{{ counter }}</div>
    </div>
</template>


<script>
import {eventEmitter} from './main.js'

export default {
    data() {
        return {
            counter: 0,
        }
    },
    props: {
        carName: String,
    },
    methods: {
        increaseCounter() {
            eventEmitter.$emit('updateCounter')
            console.log('clicked from component Car.vue')
        }
    },
    created() {
        eventEmitter.$on('increaseCounter', (num) => {
            this.counter += num;
        })
    }
}
</script>

<style scoped>
    h2 {
        color: red;
    }
    div {
        border: 1px solid black;
    }
</style>



