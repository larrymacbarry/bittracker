<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="saveCurrency">
            <md-content>
                <div class="md-layout md-layout md-gutter">
                    <div class="md-layout-item md-size-100">
                        <md-field>
                            <label for="from-currency">From currency</label>
                            <md-select id="from-currency" v-model="fromCurrency" :disabled="sending">
                                <template v-for="coin in coinList">
                                    <md-option :value="coin">{{coin}}</md-option>
                                </template>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-gutter md-size-100">
                        <md-field>
                            <label for="to-currency">To currency</label>
                            <md-select id="to-currency" v-model="toCurrency" :disabled="sending">
                                <template v-for="coin in coinList">
                                    <md-option :value="coin" :disabled="coin==disabledCur">{{coin}}</md-option>
                                </template>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-gutter md-size-100">
                        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

                        <md-button type="submit" class="md-primary" :disabled="sending">Add currency change</md-button>
                    </div>
                </div>
            </md-content>
        </form>
    </div>
</template>

<script>
    import defaultData from '.././default/config.json';

    let coinList = defaultData.coins;

    export default {
        name: 'FormValidation',
        data: () => {
            return {
                fromCurrency: defaultData.coins[0],
                toCurrency: defaultData.coins[defaultData.coins.length - 1],
                sending: false,
                coinList: coinList,
            }
        },
        computed: {
            disabledCur: function() {return this.fromCurrency},  // disabling second currency same as first
        },
        methods: {
            saveCurrency() {
                this.sending = true;
                this.bus.$emit('onCloseModal');
                this.bus.$emit('addCurrency', {
                    "fCurrency": this.fromCurrency,
                    "sCurrency": this.toCurrency
                });
                this.sending = false;

                this.fromCurrency = defaultData.coins[0];
                this.toCurrency = defaultData.coins[defaultData.coins.length - 1];

            }
        },
        props: ['request', 'bus']
    }
</script>

<style lang="scss" scoped>
    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
</style>