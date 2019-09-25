<template>
    <div class="home">
        <Header />
        <Swipe :autoplay="3000" indicator-color="white">
            <SwipeItem v-for="item of images" :key="item">
                <img :src="item" alt="">
            </SwipeItem>
        </Swipe>
        <Icons></Icons>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/views/Home/components/Header';
    import Icons from '@/views/Home/components/Icons';
    import {Swipe, SwipeItem} from 'vant';

    export default {
        name: 'home',
        components: {
            Header,
            Icons,
            Swipe,
            SwipeItem,
        },
        data() {
            return {
                images: [
                    'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/0fa39f9f5e66189e85b5c6e54278587d.jpg_750x200_86c8f2d8.jpg',
                    'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/ec181bec292abc847f16f50d02311db6.jpg_750x200_2b910352.jpg',
                    'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/249dfa53de67b8824a96f9821e58f30d.jpg_750x200_48bf24d9.jpg',
                    'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/502edc9723264c9dc53d26d2ca9680e0.jpg_750x200_b4981e1c.jpg',
                ],
            };
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
