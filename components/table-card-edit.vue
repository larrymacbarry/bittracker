<template>
    <div>
        <md-table v-model="arr" :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder"
                  :md-sort-fn="customSort" md-card>
            <md-table-toolbar>
                <h1 class="md-title">Edit currencies</h1>

                <add-dial v-bind:dialTitle="dialTitle" v-bind:addButton="addButton"
                          v-bind:closeModal="closeModal">
                    <add-form v-on:setCurrencies="setCurrencies" v-bind:request="request"></add-form>
                </add-dial>

            </md-table-toolbar>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <!--<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>-->
                <md-table-cell md-label="Currencies" md-sort-by="fCurrency">{{ item.fCurrency }}/{{ item.sCurrency }}
                </md-table-cell>
                <md-table-cell md-label="Value" md-sort-by="value">{{ item.sSymbol }} {{ item.value }}</md-table-cell>
                <md-table-cell md-label="Open" md-sort-by="open">{{ item.sSymbol }} {{ item.open }}</md-table-cell>
                <template v-if="item.change >= 0">
                    <md-table-cell md-label="Change" md-sort-by="change" class="green">{{ roundNumber(item.change, 4) }}
                        ({{
                        (Math.sign(item.change)) * roundNumber(item.change / item.value, 2)}}%)
                    </md-table-cell>
                </template>
                <template v-else>
                    <md-table-cell md-label="Change" md-sort-by="change" class="red">{{ roundNumber(item.change, 4) }}
                        ({{
                        (Math.sign(item.change)) * roundNumber(item.change / item.value, 2)}}%)
                    </md-table-cell>
                </template>
                <md-table-cell md-label="Delete">
                    <md-button v-on:click="deleteCurrency"><md-icon >delete</md-icon></md-button>
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
        props: ['data', 'request'],
        name: 'TableCard',
        data: () => ({
            currentSort: 'id',
            currentSortOrder: 'asc',
            arr: [],
            dialTitle: "Add currency",
            addButton: "Add",
            closeModal: true
        }),
        methods: {
            deleteCurrency (item) {
                console.log("yeah");
                console.log(item);
            },
            setCurrencies(val) {
                this.closeModal = !this.closeModal;
                this.$emit('setCurrencies', val);
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
            }
            ,
            customSort(value) {
                return value.sort((a, b) => {
                    const sortBy = this.currentSort;

                    if (this.currentSortOrder === 'desc') {
                        return a[sortBy].localeCompare(b[sortBy])
                    }

                    return b[sortBy].localeCompare(a[sortBy])
                })
            }
            ,
            console(inf) {
                console.log(inf);
            }
        }
        ,
        watch: {
            data: function (val) {
                this.arr = JSON.parse(JSON.stringify(this.data));

                // make sense if number of rows is >=2
                if (this.arr.length > 1) {
                    //this.customSort(this.arr);
                    return this.arr.sort((a, b) => {
                        let sortBy = this.currentSort;

                        if (this.currentSortOrder === 'desc') {
                            return a[sortBy].localeCompare(b[sortBy])
                        }

                        return b[sortBy].localeCompare(a[sortBy])
                    })
                }
            }
            ,
        }
    }
</script>