/**Created by montage_fz on 2019-09-29**/
<template>
    <div class="Detail">
        <Banner></Banner>
        <Header></Header>
    </div>
</template>

<script>
    import Banner from './components/Banner';
    import Header from './components/Header';

    export default {
        name: 'Detail',
        components: {
            Banner,
            Header,
        },
        data() {
            return {};
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
