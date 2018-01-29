<template>
    <div>
        <h1>home</h1>
        <table-card v-bind:data="data"></table-card>
    </div>
</template>
<script>
    import TableCard from '.././components/table-card.vue';

    export default {
        components: {
            "table-card": TableCard
        },
        props: ['data'],
    }
</script>