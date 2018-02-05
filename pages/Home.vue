<template>
    <div>
        <router-view :bus="bus" v-bind:data="data" v-bind:request="request"></router-view>

        <bottom-menu></bottom-menu>

    </div>
</template>
<script>
    import VueRouter from 'vue-router';
    import routes from '.././routes/routes-bmenu';
    const router = new VueRouter({routes});
    import TableCard from '.././components/table-card.vue';
    import BottomMenu from '.././components/bottom-menu.vue';

    export default {
        router: router,
        components: {
            "table-card": TableCard, "bottom-menu": BottomMenu
        },
        props: ['data', 'request', 'bus'],
        methods: {
        }

    }
</script>