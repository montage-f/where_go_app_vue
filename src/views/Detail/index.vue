/**Created by montage_fz on 2019-09-29**/
<template>
    <div class="Detail">
        <Banner></Banner>
        <Header></Header>
        <div class="content">
            <List :list=list></List>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner';
    import Header from './components/Header';
    import List from './components/List';

    export default {
        name: 'Detail',
        components: {
            Banner,
            Header,
            List,
        },
        data() {
            return {
                list: [{
                    title: '成人票',
                    children: [{
                        title: '成人三馆门票',
                        children: [{
                            title: '成人3馆门票',
                        }, {
                            title: '成人5馆门票',
                        }, {
                            title: '成人8馆门票',
                        }],
                    }, {
                        title: '成人五馆门票',
                    }, {
                        title: '成人八馆门票',
                    }],
                }, {
                    title: '学生票',
                }, {
                    title: '儿童票',
                }, {
                    title: '特惠票',
                }],
            };
        },
        created() {
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    .Detail {
        height: 400rem;

    }
</style>
