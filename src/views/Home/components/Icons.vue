/**Created by MonTage_fz on 2019/9/25**/
<template>
    <div class="Icons">
        <div class="icon"
             v-for="item of 8">
            <span>
            </span>
            <p>热门景点</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Icons',
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
    .Icons {
        display: flex;
        flex-wrap: wrap-reverse;
        height: 316px;

        .icon {
            float: left;
            width: 25%;
            height: 50%;
            display: flex;
            flex-direction: column;
            font-size: 32px;

            span {
                display: block;
                height: 120px;
                margin-bottom: 10px;
                background: url('http://s.qunarzz.com/touch_home/images/entrances.png') no-repeat -90px -60px;
            }

            p {
                text-align: center;
            }

        }
    }
</style>
