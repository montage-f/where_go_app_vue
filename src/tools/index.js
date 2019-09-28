/**
 * Created by MonTage_fz on 2019/9/25
 */
import fastClick from 'fastclick';
// 解决点击事件
fastClick.attach(document.body);
import axios from './axios';
import storage from './storage';

export default (Vue) => {
    Vue.prototype.$axios = axios;
    Vue.prototype.$storage = storage;
}
export {
    axios,
    storage,
};
