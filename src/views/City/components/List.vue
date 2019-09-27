/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="List">
        <VanList
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad">
            <Cell class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
            <Cell class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </Cell>
        </VanList>
    </div>
</template>

<script>
    import {List, Cell} from 'vant';

    export default {
        name: 'List',
        components: {
            VanList: List,
            Cell,
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
            };
        },
        created() {
        },
        computed: {},
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            },
        },
    };
</script>

<style scoped lang="less">
    .List {
        flex: 1;
        overflow-y: auto;

        .border-topbottom, .border-bottom {
            &:before {
                border-color: #777;
            }

            &:after {
                border-color: #777;
            }
        }

        .title {
            line-height: 1.28rem;
            background: #eeeeee;
            padding-left: .4rem;
            color: #666;
            font-size: .36*2rem;
        }

        .button-list {
            padding: .2rem 1.2rem .2rem .2rem;
            overflow: hidden;

            .button-wrapper {
                float: left;
                width: 33.33%;

                .button {
                    padding: .2rem 0;
                    text-align: center;
                    margin: .2rem;
                    border: .02rem solid #ccc;
                    border-radius: 5px;
                }
            }
        }

        .item-list {
            .item {
                line-height: .76*2rem;
                padding-left: .4rem;
            }
        }

        .van-list {
            .van-cell.area {
                padding: 0;
                font-size: 30px;
            }
        }
    }
</style>
