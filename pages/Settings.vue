<template>
    <div>
        <md-field>
            <label for="theme">Theme color</label>
            <md-select v-model="themeColor" name="theme" id="theme">
                <md-option value="red">Red</md-option>
                <md-option value="purple">Purple</md-option>
                <md-option value="indigo">Indigo</md-option>
                <md-option value="green">Green</md-option>
                <md-option value="yellow">Yellow</md-option>
                <md-option value="black">Black</md-option>
            </md-select>
        </md-field>
        <md-field>
            <label for="market">Change market</label>
            <md-select v-model="changeMarket" name="market" id="market">
                <md-option value="CCCAGG">CCCAGG</md-option>
                <md-option value="Coinbase">Coinbase</md-option>
                <md-option value="BTCChina">BTCChina</md-option>
                <md-option value="Bitstamp">Bitstamp</md-option>
                <md-option value="OKCoin">OKCoin</md-option>
                <md-option value="Poloniex">Poloniex</md-option>
                <md-option value="Cexio">Cexio</md-option>
                <md-option value="BTCE">BTCE</md-option>
                <md-option value="Cexio">Cexio</md-option>
                <md-option value="BitTrex">BitTrex</md-option>
                <md-option value="Kraken">Kraken</md-option>
                <md-option value="Bitfinex">Bitfinex</md-option>
            </md-select>
        </md-field>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                themeColor: this.theme,
                changeMarket: this.market
            }
        },
        props: ['theme', 'market', 'bus'],
        watch: {
            themeColor: function (val) {
                this.$emit('changeTheme', val);
                localStorage.setItem("theme", val)
            },
            changeMarket: function (val) {
                this.bus.$emit('changeMarket', val);
                localStorage.setItem("market", val)
            }
        }
    }
</script>