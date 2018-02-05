<template>
    <div>
        <md-dialog-alert
                :md-active.sync="on"
                md-content="This change is already exist!"
                md-confirm-text="Ok"/>
    </div>
</template>

<script>
    export default {
        name: 'DialogAlert',
        props: ['bus'],
        data: function() {
            return {on: false}
        },
        created: function () {
            // add new currency event handler
            this.bus.$on('showAlert', () => {
                this.on = true;
            })
        }
    }
</script>