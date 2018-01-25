<template>
    <div>
        <md-table v-model="data" md-sort="name" md-sort-order="asc" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Change</h1>
            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Currencies" md-sort-by="fCurrency">{{ item.fCurrency }}/{{ item.sCurrency }}
                </md-table-cell>
                <md-table-cell md-label="Value" md-sort-by="value">{{ item.sSymbol }} {{ item.value }}</md-table-cell>
                <md-table-cell md-label="Open" md-sort-by="open">{{ item.sSymbol }} {{ item.open }}</md-table-cell>
                <template v-if="item.change >= 0">
                    <md-table-cell md-label="Change" md-sort-by="change" class="green">{{ roundNumber(item.change, 4) }} ({{
                        (Math.sign(item.change)) * roundNumber(item.change / item.value, 2)}}%)
                    </md-table-cell>
                </template>
                <template v-else>
                    <md-table-cell md-label="Change" md-sort-by="change" class="red">{{ roundNumber(item.change, 4) }} ({{
                        (Math.sign(item.change)) * roundNumber(item.change / item.value, 2)}}%)
                    </md-table-cell>
                </template>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        name: 'TableCard',
        methods: {
            roundNumber(num, scale) {
                if (!("" + num).includes("e")) {
                    return +(Math.round(num + "e+" + scale) + "e-" + scale);
                } else {
                    var arr = ("" + num).split("e");
                    var sig = ""
                    if (+arr[1] + scale > 0) {
                        sig = "+";
                    }
                    var i = +arr[0] + "e" + sig + (+arr[1] + scale);
                    var j = Math.round(i);
                    var k = +(j + "e-" + scale);
                    return k;
                }
            }
        }
    }
</script>