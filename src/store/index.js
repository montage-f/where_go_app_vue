import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './constants';

import {storage} from '@/tools';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: storage.get('city') || '北京',
    },
    mutations: {
        [types.SET_CITY](state, params) {
            state.city = params;
            storage.set('city', params);
        },
    },
    actions: {},
});
export {types};
