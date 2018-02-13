<template>
    <div class="page-container md-layout-column">
        <md-toolbar class="md-primary" v-on:changeTheme="changeTheme" :md-theme="theme">
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">{{pageTitle}}</span>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" :md-theme="theme">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">Menu</span>
            </md-toolbar>

            <md-list>
                <router-link to="/">
                    <md-list-item @click="showNavigation = false">
                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">Home</span>
                    </md-list-item>
                </router-link>

                <router-link to="/settings">
                    <md-list-item @click="showNavigation = false">
                        <md-icon>settings</md-icon>
                        <span class="md-list-item-text">Settings</span>
                    </md-list-item>
                </router-link>

                <router-link to="/about">
                    <md-list-item @click="showNavigation = false">
                        <md-icon>info</md-icon>
                        <span class="md-list-item-text">About</span>
                    </md-list-item>
                </router-link>
            </md-list>
        </md-drawer>

        <md-content class="md-layout-item page-container" :md-theme="theme">
            <router-view
                    :bus="bus"
                    :request="request"
                    :data="data"
                    :theme="theme"
                    :market="market"
                    @changeTheme="changeTheme"
            ></router-view>
        </md-content>

        <slot></slot>
    </div>
</template>

<script>
    var theme = '';
    if (localStorage.getItem("theme")) theme = localStorage.getItem("theme");

    export default {
        name: 'App',
        data: () => ({
            menuVisible: false,
            showNavigation: false,
            showSidepanel: false,
            theme: theme,
        }),
        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible;
            },
            changeTheme(val) {
                this.theme = val;
            }
        },
        computed: {
            pageTitle: function () {
                return this.$route.name
            }
        },
        props: ['data', 'request', 'bus', 'market'],
    }
</script>