/**Created by MonTage_fz on 2019/9/26**/
<template>
    <div class="Recommend">
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom"
                v-for="(item,index) of hotList"
                :key="index">
                <img
                    :src="item.imgUrl"
                    alt="" class="item-img"
                />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.price}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Recommend',
        props: {
            hotList: {
                type: Array,
                default: () => ([]),
            },
        },
        components: {},
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
