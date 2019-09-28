/**
 * Created by montage_fz on 2019-09-28
 */
import Value from 'less/lib/less/tree/value';

export default {
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            return localStorage.getItem(key);
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    remove(key) {
        localStorage.removeItem(key);
    },
};
