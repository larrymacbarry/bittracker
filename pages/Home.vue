<template>
    <div>
        <md-content class="md-accent" md-theme="red" v-if="offline" md-rounded>
            <h4>No network found</h4>
            <p>Check your internet connection</p>
        </md-content>

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

    var offline = false;

    export default {
        router: router,
        data: function () {
            return {
                offline: offline
            };
        },
        components: {
            "table-card": TableCard, "bottom-menu": BottomMenu
        },
        props: ['data', 'request', 'bus'],
        created: function () {
            window.addEventListener('online', () => {
                this.offline = false
            });
            window.addEventListener('offline', () => {
                this.offline = true
            });
        }

    }


</script>