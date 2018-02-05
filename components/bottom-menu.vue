<template>
    <div>
            <md-bottom-bar md-type="shift">
                <router-link to="/"><md-bottom-bar-item id="bottom-bar-item-home" md-label="View" md-icon="home"></md-bottom-bar-item></router-link>
                <router-link to="/edit"><md-bottom-bar-item id="bottom-bar-item-pages" md-label="Edit" md-icon="edit"></md-bottom-bar-item></router-link>
            </md-bottom-bar>
    </div>
</template>

<script>
    export default {
        name: 'Shift'
    }
</script>

<style lang="scss" scoped>
    .phone-viewport {
        width: 322px;
        height: 200px;
        display: inline-flex;
        align-items: flex-end;
        overflow: hidden;
        border: 1px solid rgba(#000, .26);
        background: rgba(#000, .06);
    }
</style>