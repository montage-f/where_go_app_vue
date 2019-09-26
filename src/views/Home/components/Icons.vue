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
                    <span></span>
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
        components: {
            Swipe,
            SwipeItem,
        },
        data() {
            return {
                iconList: [
                    {
                        title: '签证·wifi',
                        class: '',
                    }, {
                        title: '出境游',
                        class: '',
                    }, {
                        title: '一日游',
                        class: '',
                    }, {
                        title: '美食林',
                        class: '',
                    }, {
                        title: '汽车票',
                        class: '',
                    }, {
                        title: '邮轮游',
                        class: '',
                    }, {
                        title: '超级巴士',
                        class: '',
                    }, {
                        title: '攻略',
                        class: '',
                    }, {
                        title: '第二页',
                        class: '',
                    },
                ],
            };
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

        .van-swipe-item {
            width: 100%;
            display: flex;
            flex-wrap: wrap-reverse;
        }

        .icon {
            float: left;
            width: 25%;
            height: 50%;
            display: flex;
            flex-direction: column;
            font-size: 32px;

            span {
                display: block;
                height: 120px;
                margin-bottom: 10px;
                background: url('http://s.qunarzz.com/touch_home/images/entrances.png') no-repeat -90px -60px;
            }

            p {
                text-align: center;
            }

        }
    }
</style>
