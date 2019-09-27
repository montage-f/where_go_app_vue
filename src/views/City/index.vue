/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="City">
        <Header></Header>
        <Search></Search>
    </div>
</template>

<script>
    import Header from './components/Header';
    import Search from './components/Search';

    export default {
        name: 'City',
        components: {
            Header,
            Search,
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
    .City {
    }
</style>
