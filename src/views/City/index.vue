/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="City">
        <Header></Header>
        <Search></Search>
        <List
            :cities="cities"
            :hotCities="hotCities"
        ></List>
        <AlphaBet
            :cities="cities"
        ></AlphaBet>
    </div>
</template>

<script>

    import Header from './components/Header';
    import Search from './components/Search';
    import List from './components/List';
    import AlphaBet from './components/AlphaBet';

    export default {
        name: 'City',
        components: {
            Header,
            Search,
            List,
            AlphaBet,
        },
        data() {
            return {
                cities: {},
                hotCities: [],
            };
        },
        async created() {
            const {data: {ret, data: {hotCities, cities}}} = await this.$axios.get('/api/city.json');
            if (ret) {
                this.cities = cities;
                this.hotCities = hotCities;
            }

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
        position: relative;
    }
</style>
