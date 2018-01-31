<template>
    <div :md-theme="themeColor">
        <md-field :md-theme="themeColor">
            <label for="theme">Theme color</label>
            <md-select v-model="themeColor" name="theme" id="theme">
                <md-option value="red">Red</md-option>
                <md-option value="purple">Purple</md-option>
                <md-option value="indigo">Indigo</md-option>
                <md-option value="green">Green</md-option>
                <md-option value="yellow">Yellow</md-option>
                <md-option value="black">Black</md-option>
                <md-option value="white">White</md-option>
            </md-select>
        </md-field>
    </div>
</template>
<script>
    export default {
        data: () => ({
            themeColor: this.theme
        }),
        props: [
            'theme'
        ],
        computed: {
//            themeColor: function() {
//                return this.theme
//            }
        },
        watch: {
            themeColor: function (val) {
                console.log(val)
                this.$emit('changeTheme', val);
                localStorage.setItem("theme", val)
            }
        }
    }
</script>