/**Created by montage_fz on 2019-10-05**/
<template>
    <div class="Live">
        生命周期测试
    </div>
</template>

<script>
    export default {
        name: 'Live',
        components: {},
        data() {
            return {
                num: 1,
            };
        },
        beforeCreate() {
            // 当前生命周期无法获取methods里面的方法
            try {
                this.init('我是beforeCreate生命周期');
            } catch (e) {
                console.log('当前生命周期无法获取methods里面的方法');
            }
        },
        created() {
            try {
                this.init('我是created生命周期');
            } catch (e) {
                console.log('当前生命周期无法获取methods里面的方法');
            }
        },
        computed: {},
        methods: {
            init(value) {
                console.log(value, this.num);
            },
        },
    };
</script>

<style scoped lang="less">
    .Live {
    }
</style>
