import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import defaultData from '.././default/config.json';

//main template
import App from '.././app.vue';
import routes from '.././routes/routes';


const router = new VueRouter({routes});

Vue.use(VueMaterial);
Vue.use(VueRouter);

let data = [],
    request = defaultData.request.currencies;


let vm = new Vue({
    router: router,
    el: '#app',
    components: {App},
    template: '<App v-bind:data="data"/>',
    data: {
        data: data,
    },
    methods: {
        toInteger: function (val) {
            return parseInt(val, 10);
        }
    }
});

setInterval(function () {
    request.forEach((c, i) => {
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

                    if (!data[i]) {
                        data.push(curData);
                    } else {
                        if (JSON.stringify(vm.data) !== JSON.stringify(curData)) {
                            Vue.set(vm.data, i, curData);
                        }
                    }
                },
                error => console.log(`Rejected: ${error}`)
            );
    });
}, 200);

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







