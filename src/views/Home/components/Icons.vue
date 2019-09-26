/**Created by MonTage_fz on 2019/9/25**/
<template>
    <div class="Icons">
        <Swipe
            :autoplay="3000"
            indicator-color="white"
        >
            <SwipeItem
                v-for="(itemList,index) of pages"
                :key="index"
            >
                <div class="icon"
                     v-for="(item,index) of itemList"
                     :key="index"
                >
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </div>
            </SwipeItem>
        </Swipe>
    </div>
</template>

<script>
    import {Swipe, SwipeItem} from 'vant';

    export default {
        name: 'Icons',
        props: {
            iconList: {
                type: Array,
                default: () => ([]),
            },
        },
        components: {
            Swipe,
            SwipeItem,
        },
        data() {
            return {};
        },
        created() {
        },
        computed: {
            pages() {
                return this.iconList.reduce((p, i, index) => {
                    let page = Math.floor(index / 8);
                    if (!Array.isArray(p[page])) {
                        p[page] = [];
                    }
                    p[page].push(i);
                    return p;
                }, []);
            },

        },
        methods: {},
    };
</script>

<style scoped lang="less">
    .Icons {
        height: 316px;
        width: 100%;

        /deep/ .van-swipe-item {
            width: 100%;
            display: flex;
            flex-wrap: wrap-reverse;
        }

        .icon {
            width: 25%;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 32px;

            img {
                display: block;
                width: 50%;
                margin-bottom: 10px;
            }

            p {
                text-align: center;
            }

        }
    }
</style>
