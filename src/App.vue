<template>
    <div>
        <loading backColor="#000" :opacity="0.1" :isLoading="isLoading" :logoSize="[32, 32]">
            <div class="">加载总算成功了</div>
        </loading>
    </div>
</template>
<script>
    import Loading from './components/v-easy-loading/index.vue'
    export default {
        name: 'App',
        components: {
            Loading
        },
        data() {
            return {
                isLoading: true
            }
        },
        created() {
            setTimeout(() => {
                this.isLoading = false
            }, 2000)
        },
    }
</script>
<style lang='less' scoped>
</style>
