<template>
    <div>
        <md-table md-card>
            <md-table-toolbar>
                <h1 class="md-title">Change</h1>
            </md-table-toolbar>

            <md-table-row>
                <md-table-head>Currencies</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Daily changes</md-table-head>
            </md-table-row>

            <template v-for="(value, key) in data">
                <md-table-row>
                    <md-table-cell>{{ key }}/USD</md-table-cell>
                    <md-table-cell>{{ value }}</md-table-cell>
                    <md-table-cell>+10</md-table-cell>
                </md-table-row>
            </template>
        </md-table>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        name: 'TableCard'
    }
</script>