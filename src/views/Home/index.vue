<template>
    <div class="Home">
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
        name: 'Home',
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
        // 当使用activated的时候, 每一个组件都会多两个声明周期函数,
        // 一个是activated, 另一个是deactivated
        activated() {
            const {path} = this.$route;
            if (path === '/') {
                this.init();
            }
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
    .Home {
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
