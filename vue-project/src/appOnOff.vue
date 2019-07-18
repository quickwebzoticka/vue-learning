<template>
    <div>
        <div class="button"
            :class="{'on': value}"    
            @click="switched(true)"
        >On</div>
        <div class="button"
            :class="{'off': !value}"
            @click="switched(false)"
        >Off</div>
    </div>
</template>


<script>
export default {
    props: ['value'],
    methods: {
        switched(newVal) {
            this.$emit('input', newVal)
        }
    }
}
</script>

<style scoped>
.button{
    padding: 20px;
    background: #999;
}

.button.on{
    background: green;
}

.button.off{
    background: red;
}
</style>

