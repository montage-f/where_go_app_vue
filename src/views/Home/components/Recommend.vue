/**Created by MonTage_fz on 2019/9/26**/
<template>
    <div class="Recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom"
                v-for="(item,index) of recommendList"
                :key="index">
                <img
                    :src="item.imgUrl"
                    alt="" class="item-img"
                />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        components: {},
        data() {
            return {
                recommendList: [
                    {
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },{
                        title: '阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评阿玛瑞岛 满分好评',
                        desc: '马尔代夫阿玛瑞豪沃达度假酒店',
                        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/5d0a54f9-6e1a-421d-a58d-b73505a0b7fe.jpg_180x120_61932a4f.jpg',
                    },
                ],
            };
        },
        created() {
        },
        computed: {},
        methods: {},
    };
</script>

<style scoped lang="less">
    @import '~@/styles/mixins.less';

    .Recommend {
        font-size: 28px;

        .title {
            margin-top: .4rem;
            line-height: 1.6rem;
            background: #eee;
            text-indent: .4rem;
        }

        .item {
            display: flex;
            overflow: hidden;
            height: 3.8rem;

            .item-img {
                width: 3.4rem;
                height: 3.4rem;
                padding: .2rem;
            }

            .item-info {
                flex: 1;
                padding: .2rem;
                min-width: 0;

                .item-title {
                    line-height: 1.08rem;
                    .ellipsis();
                }

                .item-desc {
                    line-height: .8rem;
                    color: #ccc;
                    .ellipsis();
                }

                .item-button {
                    line-height: .88rem;
                    margin-top: .4rem;
                    background: #ff9300;
                    padding: 0 .4rem;
                    border-radius: .12rem;
                    color: #fff;
                    border: 0;
                }

            }
        }
    }
</style>
