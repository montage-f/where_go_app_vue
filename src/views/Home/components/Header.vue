/**Created by MonTage_fz on 2019/9/25**/
<template>
    <div class="Header bg-color">
        <div class="header-left">
            <i class="iconfont">&#xe6a5;</i>
        </div>
        <div class="header-input">
            <i class="iconfont">&#xe607;</i>
            输入城市/游玩/景点主题
        </div>
        <router-link to="/city" tag="div" class="header-right">
            城市<i class="iconfont">&#xe608;</i>
        </router-link>
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

    // 引入 variable css, 定义了全局的样式类
    @import '~@/styles/variable.less';

    // 设计稿给的是750px
    // 我们将html的字体大小设置为75px
    // 那么 1rem = html font-size 75px
    .Header {
        color: #fff;
        height: 86px;
        align-items: center;
        display: flex;
        background: @bgColor;

        .iconfont {
            font-size: 32px;
        }

        .header-left {
            width: 64px;
            text-align: center;
        }

        .header-input {
            flex: 1;
            background: #ffffff;
            border-radius: 5px;
            height: 64px;
            line-height: 64px;
            margin-left: 20px;
            color: #ccc;
            padding-left: 20px;
        }

        .header-right {
            width: 124px;
            text-align: center;
            font-size: 24px;
        }

    }
</style>
