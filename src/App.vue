<template>
    <div>
        <v-easy-loading></v-easy-loading>
    </div>
</template>
<script>
    export default {
        name: 'App',
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
