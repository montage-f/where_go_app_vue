/**Created by montage_fz on 2019-09-29**/
<template>
    <div class="Gallery" @click="$emit('closeGallery')">
        <Swipe
            class="wrapper"
            :autoplay="2000"
            indicator-color="white"
            :show-indicators="false"
            @change="onChange"
        >
            <SwipeItem
                v-for="(img,index) of imgs"
                :key="index"
            >
                <img
                    :src="img"
                    alt=""
                />
            </SwipeItem>
            <div class="custom-indicator" slot="indicator">
                {{imgCount}}
            </div>
        </Swipe>
    </div>
</template>

<script>
    import {Swipe, SwipeItem} from 'vant';

    export default {
        name: 'Gallery',
        props: {
            imgs: {
                type: Array,
                default: () => ([]),
            },
        },
        components: {
            Swipe,
            SwipeItem,
        },
        data() {
            return {
                current: 0,
            };
        },
        created() {
        },
        computed: {
            imgCount() {
                return `${this.current + 1}/${this.imgs.length}`;
            },
        },
        methods: {
            onChange(index) {
                this.current = index;
            },
        },
    };
</script>

<style scoped lang="less">
    .Gallery {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #000;
        display: flex;
        align-items: center;
        color: #fff;
        z-index: 2;

        .wrapper {
            width: 100%;
            position: absolute;
            height: 650px;

            img {
                width: 100%;
            }

            .custom-indicator {
                position: absolute;
                bottom: 0;
                text-align: center;
                width: 100%;
            }
        }
    }
</style>
