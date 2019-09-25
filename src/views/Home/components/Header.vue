/**Created by MonTage_fz on 2019/9/25**/
<template>
    <div class="Header">
        <div class="header-left">
            hello world
        </div>
        <div class="header-input">

        </div>
        <div class="header-right">

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
        color: red;
        font-size:35px;
    }
</style>
