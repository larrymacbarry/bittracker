import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import defaultData from '.././default/config.json';
import cccStreamer from '.././js/ccc-streamer-utilities'

//main template
import App from '.././app.vue';
import Alert from '.././components/alert.vue';
import routes from '.././routes/routes';

const router = new VueRouter({routes});

Vue.use(VueMaterial);
Vue.use(VueRouter);

let socket = io.connect('https://streamer.cryptocompare.com/');
//Use SubscriptionId 0 for TRADE, 2 for CURRENT and 5 for CURRENTAGG

// event bus
const bus = new Vue();

let vm = new Vue({
    router: router,
    el: '#app',
    components: {App, Alert},
    template: '<App :data="data" :request="request" :bus="bus" :market="market"><alert :bus="bus"></alert></App>',
    data: {
        data: [],
        request: "",
        bus: bus,
        market: "",
        storedReq: "",
        storedMarket: ""
    },
    methods: {
        toInteger: function (val) {
            return parseInt(val, 10);
        },
    },
    created: function () {
        this.data = [];
        this.storedReq = JSON.parse(localStorage.getItem("request"));
        this.request = (this.storedReq) ? this.storedReq : defaultData.request;
        this.storedMarket = localStorage.getItem("market");
        this.market = (this.storedMarket) ? this.storedMarket : defaultData.market;
        // saving context
        let that = this;

        document.addEventListener('DOMContentLoaded', function () {
            let subscription = [];

            that.request.forEach(function (v) {
                subscription = ['5~' + that.market + '~' + v.fCurrency + '~' + v.sCurrency];
                socket.emit('SubAdd', {subs: subscription});
            });

            socket.on("m", function (message) {
                let messageType = message.substring(0, message.indexOf("~"));
                let res = {};
                if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
                    res = CCC.CURRENT.unpack(message);
                    dataUnpack(res);
                }
            });

            let dataUnpack = function (d) {
                let from = d['FROMSYMBOL'],
                    to = d['TOSYMBOL'];

                let item = {
                    fCurrency: from,
                    sCurrency: to,
                    value: d['PRICE'],
                    open: d['OPEN24HOUR'],
                    change: parseInt(d['PRICE']) - parseInt(d['OPEN24HOUR']),
                };

                if (that.data.length > 0) {
                    let currencyPushed = false;
                    that.data.forEach(function (v, i) {
                        if (item.fCurrency == that.data[i].fCurrency
                            && item.sCurrency == that.data[i].sCurrency) {

                            for (let key in that.data[i]) {
                                if (item[key]) that.data[i][key] = item[key];
                            }
                            Vue.set(vm.data, i, that.data[i]);
                            currencyPushed = true;
                        }
                    });
                    if (!currencyPushed) that.data.push(item);
                } else {
                    that.data.push(item);
                }
                localStorage.setItem('data', JSON.stringify(that.data));
            }
        });

        // get
        window.addEventListener('offline', () => {
            this.data = JSON.parse(localStorage.getItem('data'));
        });

        // market change event handler
        this.bus.$on('changeMarket', (market) => {
            that.market = market
        });

        // add new currency event handler
        this.bus.$on('addCurrency', (item) => {
            let subscription = [];
            let alreadyExist = false;
            that.request.forEach((el, i) => {
                if (el.fCurrency == item.fCurrency && el.sCurrency == item.sCurrency) {
                    alreadyExist = true;
                }
            });

            if (!alreadyExist) {

                that.request.unshift(item);
                localStorage.setItem("request", JSON.stringify(this.request)); // setting up currencies we want to show

                that.request.forEach(function (v, i) {
                    subscription.push('5~' + that.market + '~' + v.fCurrency + '~' + v.sCurrency)
                });

                socket.emit('SubAdd', {subs: subscription});
            }
            else {
                this.bus.$emit('showAlert');
            }
        });

        // delete currency event handler
        this.bus.$on('deleteCurrency', (item) => {
            let index = '';
            let subscription = [];

            that.request.forEach((el, i) => {
                if (el.fCurrency == item.fCurrency && el.sCurrency == item.sCurrency) {
                    index = i;
                    that.request.splice(i, 1);
                }
                that.request = this.request.filter(value => Object.keys(value).length !== 0);
            });
            that.data = [];
            localStorage.setItem("request", JSON.stringify(this.request)); // setting up currencies we want to show

            that.request.forEach(function (v, i) {
                subscription.push('5~' + that.market + '~' + v.fCurrency + '~' + v.sCurrency)
            });

            let subsDel = ['5~' + that.market + '~' + item.fCurrency + '~' + item.sCurrency];

            socket.emit('SubRemove',  { subs: subsDel});
            socket.emit('SubAdd', {subs: subscription});
        });
    },
});

