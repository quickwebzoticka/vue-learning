<template>
    <div class="car">
        <h3>car name: {{ carName }} </h3>
        <p>car year {{ carYear }} </p>
    </div>
</template>


<script>
export default {
    props: ['carName', 'carYear'],
}
</script>

<style>
    .car {
        border: 1px solid black;
    }
    .car h3 {
        color: red;
    }
    .car p {
        color: green
    }
</style>


