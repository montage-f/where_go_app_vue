/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="Search">
        <input
            class="search-input"
            type="text" placeholder="输入城市名或拼音" />
    </div>
</template>

<script>
    export default {
        name: 'Search',
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
    @import '~@/styles/variable.less';

    .Search {
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
            padding:0 .5rem;
        }
    }
</style>
