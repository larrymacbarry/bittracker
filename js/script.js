import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

new Vue({
    el: '#app',
    name: 'Reveal',
    data: {
        menuVisible: false
    }
});


