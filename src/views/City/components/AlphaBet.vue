/**Created by montage_fz on 2019-09-28**/
<template>
    <ul class="AlphaBet">
        <li
            v-for="(item,key) of cities"
            :key="key">
            {{key}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'AlphaBet',
        props: {
            cities: {
                type: Object,
                default: () => ({}),
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
    @import "~@/styles/variable.less";

    .AlphaBet {
        position: absolute;
        right: 0;
        bottom: 0;
        width: .8rem;
        top: 1.58*2rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        li {
            padding: .3rem 0;
            color: @bgColor;
            text-align: center;
        }
    }
</style>
