/**Created by montage_fz on 2019-09-29**/
<template>
    <div class="Banner">
        <div class="banner-show" @click="showGallery=true">
            <img
                class="img"
                src="//img1.qunarzz.com/sight/p0/1703/78/78003f43ca2bb982a3.img.jpg_600x330_089aac0a.jpg"
                alt=""
            />
            <div class="info">
                <div class="title">
                    大连圣亚海洋世界(AAAA景区)
                </div>
                <div class="number">
                    <i class="iconfont">&#xe607;</i>
                    39
                </div>
            </div>
        </div>
        <Gallery
            v-if="showGallery"
            :imgs="imgs"
            @closeGallery="closeGallery"
        ></Gallery>
    </div>
</template>

<script>
    import Gallery from '@/components/common/Gallery';

    export default {
        name: 'Banner',
        components: {
            Gallery,
        },
        data() {
            return {
                showGallery: false,
                imgs: [
                    'http://img1.qunarzz.com/sight/p0/1703/78/78003f43ca2bb982a3.img.jpg_r_800x800_1edea084.jpg',
                    'http://img1.qunarzz.com/sight/p0/1703/1c/1c1faa142280e00ca3.img.jpg_r_800x800_43e06e05.jpg',
                    'http://img1.qunarzz.com/sight/p0/1703/60/6003e6178999476a3.img.jpg_r_800x800_3b9e23ae.jpg',
                    'http://img1.qunarzz.com/sight/p0/1703/26/269460abac6f28dda3.img.jpg_r_800x800_5699a30b.jpg',
                ],
            };
        },
        created() {
        },
        computed: {},
        methods: {
            closeGallery() {
                this.showGallery = false;
            },
        },
    };
</script>

<style scoped lang="less">
    .Banner {
        .banner-show {
            overflow: hidden;
            height: 0;
            padding-bottom: 55%;
            position: relative;

            .img {
                width: 100%;
            }

            .info {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                line-height: 1.6rem;
                display: flex;
                font-size: .84rem;
                align-items: center;
                color: #fff;
                background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

                .title {
                    flex: 1;
                    padding: 0 .4rem;
                }

                .number {
                    padding: 0 .8rem;
                    line-height: .8rem;
                    height: .8rem;
                    border-radius: .4rem;
                    background: rgba(0, 0, 0, .8);

                    i {
                        font-size: 24px;
                    }
                }

            }
        }

    }
</style>
