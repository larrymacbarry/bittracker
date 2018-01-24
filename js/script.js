import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

new Vue({
    el: '#app',
    name: 'Reveal',
    data: {
        menuVisible: false,
        message: "app"
    }
});

let arr = [
    [
        "banana", "orange", "pineapple"
    ],
     [
        "potato", "tomato", "cucumber"
    ]
];

let newArr = arr.map(function callback(c, i, arr) {
    return c.join() + " is tasty";
});

console.log(newArr);