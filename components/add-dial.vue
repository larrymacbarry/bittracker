<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>{{dialTitle}}</md-dialog-title>

            <slot></slot>
        </md-dialog>

        <md-button class="md-primary md-raised" @click="showDialog = true">{{addButton}}</md-button>
    </div>
</template>

<script>

    export default {
        name: 'DialogCustom',
        data: function () {
            return {showDialog: false}
        },
        props: ['dialTitle', 'addButton', 'closeModal', 'bus'],
        created: function () {
            this.bus.$on('onCloseModal', () => {
                console.log("close");
                console.log(this);
                this.showDialog = false;
            })
        },
    }
</script>

<style lang="scss" scoped>
    .md-dialog {
        max-width: 768px;
    }
</style>