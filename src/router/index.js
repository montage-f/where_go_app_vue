import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/';
import City from '@/views/City';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        }, {
            path: '/city',
            name: 'City',
            component: City,
        }, {
            path: '/detail/:id',
            name: 'Detail',
            // 当整个文件过大的时候, 我们可以采用异步组件, 进行代码的拆分
            component: () => import('@/views/Detail'),
        }, {
            path: '/live',
            name: 'Live',
            component: () => import('@/views/Live'),
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    
});
