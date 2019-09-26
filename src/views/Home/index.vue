<template>
    <div class="home">
        <Header />
        <Swipe :autoplay="3000" indicator-color="white">
            <SwipeItem v-for="item of images" :key="item">
                <img :src="item" alt="">
            </SwipeItem>
        </Swipe>
        <Icons :iconList="iconList"></Icons>
        <Recommend :hotList="hotList"></Recommend>
        <Weekend :weekendList="weekendList"></Weekend>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/views/Home/components/Header';
    import Icons from '@/views/Home/components/Icons';
    import Recommend from '@/views/Home/components/Recommend';
    import Weekend from '@/views/Home/components/Weekend';
    import {Swipe, SwipeItem} from 'vant';

    export default {
        name: 'home',
        components: {
            Header,
            Icons,
            Swipe,
            SwipeItem,
            Recommend,
            Weekend,
        },
        data() {
            return {
                images: [],
                iconList: [],
                hotList: [],
                weekendList: [],
            };
        },
        created() {
            this.init();
        },
        methods: {
            async init() {
                const {data: {data}} = await this.$axios.get('/api/index.json');
                const {hotList, iconList, swiperList, weekendList} = data;
                this.images = swiperList;
                this.iconList = iconList;
                this.hotList = hotList;
                this.weekendList = weekendList;
            },
        },
    };
</script>
<style lang="less" scoped>
    .home {
        width: 100%;

        /deep/ .van-swipe__indicator {
            width: 20px;
            height: 20px;
        }

        img {
            width: 100%;
        }
    }

</style>
