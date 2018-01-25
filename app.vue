<template>
    <md-app md-mode="reveal">
        <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">{{pageTitle}}</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span>Navigation</span>

                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button md-dense" @click="toggleMenu">
                        <md-icon>keyboard_arrow_left</md-icon>
                    </md-button>
                </div>
            </md-toolbar>

            <md-list>
                <a href="/">
                    <md-list-item>

                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">Home</span>
                    </md-list-item>
                </a>

                <a href="/settings/">
                    <md-list-item>

                        <md-icon>settings</md-icon>
                        <span class="md-list-item-text">Settings</span>
                    </md-list-item>
                </a>

                <a href="/about/">
                    <md-list-item>

                        <md-icon>info</md-icon>
                        <span class="md-list-item-text">About</span>
                    </md-list-item>
                </a>
            </md-list>
        </md-app-drawer>

        <md-app-content class="md-layout-item page-container">
            <table-card v-bind:data="data" v-bind:menuVisible="menuVisible"></table-card>
        </md-app-content>
    </md-app>
</template>

<script>
    import TableCard from './components/table-card.vue';

    export default {
        components: {
            "table-card": TableCard
        },
        name: 'App',
        data: () => ({
            menuVisible: false
        }),
        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible
            }
        },
        props: ['data', 'pageTitle']
    }
</script>