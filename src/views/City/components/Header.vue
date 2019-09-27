/**Created by montage_fz on 2019-09-27**/
<template>
    <div class="Header">
        城市选择
        <div
            class="iconfont header-icon"
            @click="$router.go(-1)"
        >
            &#xe6a5;
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
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

    .Header {
        height: .86*2rem;
        line-height: .86*2rem;
        text-align: center;
        color: #fff;
        background: @bgColor;
        font-size: .4*2rem;
        position: relative;

        .header-icon {
            position: absolute;
            left: 0;
            top: 0;
            width: .64*2rem;
            font-size: .4*2rem;
        }
    }
</style>
