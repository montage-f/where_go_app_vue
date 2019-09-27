/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="City">
        <Header></Header>
        <Search></Search>
        <List></List>
    </div>
</template>

<script>
    import Header from './components/Header';
    import Search from './components/Search';
    import List from './components/List';

    export default {
        name: 'City',
        components: {
            Header,
            Search,
            List,
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
