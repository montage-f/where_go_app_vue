import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles';
import tools from './tools';

Vue.config.productionTip = false;
Vue.use(tools);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
