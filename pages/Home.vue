<template>
    <div>
        <router-view v-bind:data="data" v-bind:request="request" v-on:setCurrencies="setCurrencies"></router-view>

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
        props: ['data', 'request'],
        methods: {
            setCurrencies(val) {
                this.closeModal = !this.closeModal;
                this.$emit('setCurrencies', val);
            }
        }

    }
</script>