/**Created by MonTage_fz on 2019/9/26**/
<template>
    <div class="Weekend">
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom"
                v-for="(item,index) of weekendList"
                :key="index">
                <div class="item-image-wrapper">
                    <img
                        :src="item.imgUrl"
                        alt="" class="item-img"
                    />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Weekend',
        props: {
            weekendList: {
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

    .Weekend {
        .title {
            margin-top: .4rem;
            line-height: 1.6rem;
            background: #eee;
            text-indent: .2rem;
        }

        .item-image-wrapper {
            height: 0;
            overflow: hidden;
            padding-bottom: 33.9%;

            .item-img {
                width: 100%;
            }
        }

        .item-info {
            padding: .2rem;

            .item-title {
                line-height: 1.08rem;
                font-size: .64rem;
                .ellipsis();
            }

            .item-desc {
                line-height: 1.2rem;
                color: #ccc;
                .ellipsis();
            }
        }
    }
</style>
