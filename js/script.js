import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

let currencies = {},
    pageTitle = "Main";

let app = new Vue({
    el: '#app',
    name: 'Reveal',
    data: {
        menuVisible: false,
        pageTitle: pageTitle,
        currencies: currencies
    }
});

function loadCurrencies () {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR', true);
    xhr.send();

    xhr.onreadystatechange = function() { // (3)
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            app.currencies = JSON.parse(xhr.response);
        }
    };
}

setInterval(function(){
    loadCurrencies ();
}, 500);






