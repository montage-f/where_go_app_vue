/**Created by montage_fz on 2019-09-29**/
<template>
    <div class="Header">
        <div class="abs"
             @click="$router.go(-1)"
             v-if="showAbs"
        >
            <i class="iconfont icon">&#xe6a5;</i>
        </div>
        <div class="fixed"
             v-else
             :style="{opacity:opacity}"
        >
            <i class="iconfont icon" @click="$router.go(-1)">&#xe6a5;</i>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        components: {},
        data() {
            return {
                showAbs: true,
                opacity: 0,
            };
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        computed: {},
        methods: {
            handleScroll() {
                const scrollTop = document.documentElement.scrollTop;
                let opacity = scrollTop / 140;
                this.opacity = opacity > 1 ? 1 : opacity;
                this.showAbs = scrollTop < 60;
            },
        },
    };
</script>

<style scoped lang="less">
    @import "~@/styles/variable.less";

    .Header {
        .abs {
            position: absolute;
            left: .4rem;
            top: .4rem;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: .6rem;
            background: rgba(0, 0, 0, .8);
            text-align: center;

            .icon {
                color: #fff;
                font-size: 25px;
                line-height: 1.2rem;
            }

        }

        .fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 86px;
            background: @bgColor;
            text-align: center;
            line-height: 86px;
            color: #fff;

            .icon {
                float: left;
                font-size: 25px;
                padding-left: 20px;
            }
        }
    }
</style>
