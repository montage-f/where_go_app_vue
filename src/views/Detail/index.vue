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
                list: [],
            };
        },
        created() {
            this.init();
        },
        computed: {},
        watch: {
        },
        methods: {
            async init() {
                const {id} = this.$route.params;
                const {data: {data: {categoryList}}} = await this.$axios.get('/api/detail.json', {
                    params: {id},
                });
                this.list = categoryList;
            },
        },
    };
</script>

<style scoped lang="less">
    .Detail {
        height: 400rem;

    }
</style>
