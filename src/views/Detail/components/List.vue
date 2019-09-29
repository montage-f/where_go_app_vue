/**Created by montage_fz on 2019-09-29**/
<template>
    <div class="List">
        <div class="item"
             v-for="(item,index) of list"
             :key="index"
        >
            <div class="title">
                <span class="icon"></span>
                {{item.title}}
            </div>
            <template v-if="item.children">
                <List :list="item.children"></List>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        props: {
            list: {
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
    .List {
        .item {
            padding: 0 .4rem;

            .title {
                line-height: 1.6rem;
                font-size: .64rem;
                padding: 0 .4rem;
            }
        }
    }
</style>
