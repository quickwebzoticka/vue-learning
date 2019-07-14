<template>
    <div>
        <slot name="title"></slot>    

        <hr>

        <slot name="main"></slot>
    </div>
</template>


<script>
export default {
    props: {
        carName: String,
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



