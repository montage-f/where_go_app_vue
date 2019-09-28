/**Created by montage_fz on 2019-09-27**/
<template>
    <IndexBar class="List">
        <Cell class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{city}}</div>
                </div>
            </div>
        </Cell>
        <Cell class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <router-link
                    class="button-wrapper"
                    tag="div"
                    v-for="(item,index) of hotCities"
                    :key="index"
                    to="/"
                >
                    <div class="button"
                         @click="handleClickCity(item)">
                        {{item.name}}
                    </div>
                </router-link>
            </div>
        </Cell>
        <template
            v-for="(item,key,index) of cities"
        >
            <index-anchor
                :index="key"
                :key="key" />
            <Cell class="area" :key="index">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <router-link
                        class="item border-bottom"
                        tag="div"
                        v-for="(innerItem,index) of item"
                        :key="index"
                        to="/"
                    >
                        <p @click="handleClickCity(innerItem)">
                            {{innerItem.name}}
                        </p>
                    </router-link>
                </div>
            </Cell>
        </template>
    </IndexBar>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {types} from '@/store';
    import {IndexBar, IndexAnchor, Cell} from 'vant';

    export default {
        name: 'List',
        props: {
            cities: {
                type: Object,
                default: () => ({}),
            },
            hotCities: {
                type: Array,
                default: () => ([]),
            },
        },
        components: {
            Cell,
            IndexBar,
            IndexAnchor,
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
        computed: {
            ...mapState({
                city: state => state.city,
            }),
        },
        methods: {
            ...mapMutations([
                types.SET_CITY,
            ]),
            handleClickCity({name}) {
                this[types.SET_CITY](name);
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

        /deep/ .van-index-bar__index {
            font-size: 20px;
            padding: 10px 0;
        }

        .item-list {
            .item {
                line-height: .76*2rem;
                padding-left: .4rem;
            }
        }

        .van-cell.area {
            padding: 0;
            font-size: 30px;
        }
    }
</style>
