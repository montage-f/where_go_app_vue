/**Created by montage_fz on 2019-09-29**/
<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: 'Fade',
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
    .v-enter, .v-leave-to {
        opacity: 0;
    }

    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s;
    }
</style>
