import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import defaultData from '.././default/config.json';

//main template
import App from '.././app.vue';

import Alert from '.././components/alert.vue';

import routes from '.././routes/routes';

const router = new VueRouter({routes});

Vue.use(VueMaterial);
Vue.use(VueRouter);

let data = [],
    request = defaultData.request,
    storedReq = JSON.parse(localStorage.getItem("request"));

if (storedReq) {
    request = JSON.parse(localStorage.getItem("request"));
}

// event bus
const bus = new Vue();

let vm = new Vue({
    router: router,
    el: '#app',
    components: {App, Alert},
    template: '<App :data="data" :request="request" :bus="bus"><alert :bus="bus"></alert></App>',
    data: {
        data: data,
        request: request,
        bus: bus
    },
    methods: {
        toInteger: function (val) {
            return parseInt(val, 10);
        },
    },
    created: function () {
        // saving context
        let that = this;

        // add new currency event handler
        this.bus.$on('addCurrency', (item) => {
            let alreadyExist = false;
            that.request.forEach((el, i) => {
                if (el.fCurrency == item.fCurrency && el.sCurrency == item.sCurrency) {
                    alreadyExist = true;
                }
            });

            if (!alreadyExist) {
                this.request.unshift(item);
                localStorage.setItem("request", JSON.stringify(this.request)); // setting up currencies we want to show
            }
            else {
                this.bus.$emit('showAlert');
            }
        });

        // delete currency event handler
        this.bus.$on('deleteCurrency', (item) => {
            let index = '';

            this.request.forEach((el, i) => {
                if (el.fCurrency == item.fCurrency && el.sCurrency == item.sCurrency) {
                    console.log(true);
                    index = i;
                    this.request.splice(i, 1);
                }
                this.request = this.request.filter(value => Object.keys(value).length !== 0);
            });
            this.data = [];
            localStorage.setItem("request", JSON.stringify(this.request)); // setting up currencies we want to show
        });

        setInterval(() => {
            this.data = this.data.filter(value => Object.keys(value).length !== 0);
            this.request.forEach((c, i) => {
                compareCurrencies(c.fCurrency, c.sCurrency)
                    .then(
                        (response) => {
                            let curData = {
                                'id': i.toString(),
                                'fCurrency': (c.fCurrency).toString(),
                                'sCurrency': (c.sCurrency).toString(),
                                'fSymbol': (JSON.parse(response)['DISPLAY'].FROMSYMBOL).toString(),
                                'sSymbol': (JSON.parse(response)['DISPLAY'].TOSYMBOL).toString(),
                                'value': (JSON.parse(response)['RAW'].PRICE).toString(),
                                'open': (JSON.parse(response)['RAW'].OPEN24HOUR).toString(),
                                'change': (JSON.parse(response)['RAW'].CHANGE24HOUR).toString(),
                                'volume': (JSON.parse(response)['RAW'].VOLUME24HOUR).toString(),
                            };
                            if (!this.data[i]) {
                                this.data.push(curData);
                            } else {
                                if (JSON.stringify(vm.data) !== JSON.stringify(curData)) {
                                    Vue.set(vm.data, i, curData);
                                }
                            }
                        },
                        error => console.log(`Rejected: ${error}`)
                    );
            });
        }, 500);
    }
});


function compareCurrencies(fC, sC) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://min-api.cryptocompare.com/data/generateAvg?fsym=' + fC + '&tsym=' + sC + '&e=CCCAGG', true);
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };
        xhr.send();
    });
}