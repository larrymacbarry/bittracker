<template>
    <div>
        <md-table v-model="arr" :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder"
                  :md-sort-fn="customSort" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Edit currencies</h1>

                <add-dial :dialTitle="dialTitle" :addButton="addButton" :bus="bus">
                    <add-form :request="request" :bus="bus"></add-form>
                </add-dial>

            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <!--<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>-->
                <md-table-cell md-label="Currencies" md-sort-by="fCurrency">{{ item.fCurrency }}/{{ item.sCurrency }}
                </md-table-cell>
                <md-table-cell md-label="Value" md-sort-by="value">{{ item.value }}</md-table-cell>
                <md-table-cell md-label="Open" md-sort-by="open">{{ item.open }}</md-table-cell>
                <md-table-cell md-label="Delete">
                    <md-button v-on:click="deleteCurrency(item)">
                        <md-icon>delete</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    import AddDial from '.././components/add-dial.vue';
    import AddForm from '.././components/add-form.vue';

    export default {
        components: {"add-dial": AddDial, "add-form": AddForm},
        props: ['data', 'request', 'bus'],
        name: 'TableCard',
        data: () => ({
            currentSort: 'fCurrency',
            currentSortOrder: 'asc',
            arr: [],
            dialTitle: "Add currency",
            addButton: "Add",
        }),
        methods: {
            deleteCurrency(item) {
                this.bus.$emit('deleteCurrency', item)
            },
            // round number
            roundNumber(num, scale) {
                if (!("" + num).includes("e")) {
                    return +(Math.round(num + "e+" + scale) + "e-" + scale);
                } else {
                    let arr = ("" + num).split("e");
                    let sig = "";
                    if (+arr[1] + scale > 0) {
                        sig = "+";
                    }
                    let i = +arr[0] + "e" + sig + (+arr[1] + scale);
                    let j = Math.round(i);
                    let k = +(j + "e-" + scale);
                    return k;
                }
            },
            customSort(value) {
                return value.sort((a, b) => {
                    const sortBy = this.currentSort;
                    if (this.currentSortOrder === 'desc') {
                        return a[sortBy].toString().localeCompare(b[sortBy].toString())
                    }
                    return b[sortBy].toString().localeCompare(a[sortBy].toString())
                })
            },
        },
        watch: {
            data: function (val) {
                let that = this;
                this.arr = JSON.parse(JSON.stringify(that.data));
                // make sense if number of rows is >=2
                if (this.arr.length > 1) {
                    //this.customSort(this.arr);
                    this.arr.sort((a, b) => {
                        const sortBy = this.currentSort;
                        if (this.currentSortOrder === 'desc') {
                            return a[sortBy].toString().localeCompare(b[sortBy].toString())
                        }
                        return b[sortBy].toString().localeCompare(a[sortBy].toString())
                    })
                }
            },
        }
    }
</script>