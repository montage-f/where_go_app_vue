/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="Search">
        <div class="search-write">
            <label>
                <input
                    class="search-input"
                    type="text"
                    placeholder="输入城市名或拼音"
                    v-model="keyword"
                />
            </label>
        </div>
        <div class="content" v-if="keyword">
            <ul>
                <router-link
                    tag="li"
                    class="search-item border-bottom"
                    v-for="(item,index) of list"
                    :key="index"
                    to="/"
                >
                    <p @click="handleClickCity(item)">
                        {{item.name}}
                    </p>
                </router-link>
                <li
                    class="search-item border-bottom"
                    v-if="hasList"
                >
                    没有匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import {types} from '@/store';

    export default {
        name: 'Search',
        props: {
            cities: {
                type: Object,
                default: () => ({}),
            },
        },
        components: {},
        data() {
            return {
                keyword: '',
                list: [],
                timer: null,
            };
        },
        created() {
        },
        watch: {
            keyword(value) {
                this.timer && clearTimeout(this.timer);
                if (!value) {
                    this.list = [];
                    return;
                }
                this.timer = setTimeout(() => {
                    this.list = Object.keys(this.cities)
                        .reduce((p, i) => {
                            return [...p, ...this.cities[i]];
                        }, [])
                        .reduce((p, i) => {
                            const isTrue = i.name.includes(value) || i.spell.includes(value);
                            isTrue && p.push(i);
                            return p;
                        }, []);
                    this.timer = null;
                }, 300);
            },
        },
        computed: {
            hasList() {
                return !this.list.length;
            },
        },
        methods: {
            ...mapMutations([
                types.SET_CITY,
            ]),
            handleClickCity({name}) {
                this[types.SET_CITY](name);
                this.keyword = '';
            },
        },
    };
</script>

<style scoped lang="less">
    @import '~@/styles/variable.less';

    .Search {

        .search-write {
            height: .72*2rem;
            padding: 0 .2rem;
            background: @bgColor;

            .search-input {
                width: 100%;
                text-align: center;
                height: .62*2rem;
                line-height: .62*2rem;
                color: #666;
                box-sizing: border-box;
                border-radius: 5px;
                border: 0;
                padding: 0 .5rem;
            }
        }

        .content {
            z-index: 5;
            position: absolute;
            top: 1.58*2rem;
            left: 0;
            right: 0;
            bottom: 0;
            background: #eee;
            overflow: auto;

            .search-item {
                line-height: .62*2rem;
                padding-left: .4rem;
                color: #666;
                background: #fff;
            }
        }

    }
</style>
