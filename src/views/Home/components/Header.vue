/**Created by MonTage_fz on 2019/9/25**/
<template>
    <div class="Header">
        <div class="header-left">
            返回
        </div>
        <div class="header-input">
            1
        </div>
        <div class="header-right">
            城市
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
    // 设计稿给的是750px
    // 我们将html的字体大小设置为75px
    // 那么 1rem = html font-size 75px
    .Header {
        color: #fff;
        height: 86px;
        align-items: center;
        display: flex;
        background: #00bcd4;

        .header-left {
            width: 64px;
        }

        .header-input {
            flex: 1;
            background: #ffffff;
            border-radius: 5px;
        }


        .header-right {
            width: 124px;
        }
    }
</style>
