<template>
    <section>
        <div class="v-easy-loading" ref="loading" v-show="isLoading"></div>
        <slot v-if="!isLoading"></slot>
    </section>
</template>
<script>
    export default {
        name: 'v-easy-loading',
        props: {
            isLoading: {
                type: Boolean,
                default: true
            },
            backColor: {
                type: String,
                default: '#fff'
            },
            opacity: {
                type: Number,
                default: 1
            },
            logoUrl: {
                type: String,
                default: 'https://si.geilicdn.com/img-7adb000001682b4ad1f80a217216-unadjust_64_64.gif'
            },
            logoSize: {
                type: Array,
                default: () => {
                    return [48, 48]
                }
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.$nextTick(() => {
                    this.setLogo()
                    this.setBackGround()
                })
            },
            setBackGround() {
                this.$refs.loading.style.backgroundColor = this.hexToRgba(this.backColor, this.opacity)
            },
            setLogo() {
                let icon = this.$refs.loading.style
                icon.width = this.logoSize[0]
                icon.height = this.logoSize[1]
                icon.background = `url(${this.logoUrl}) center no-repeat`
                icon.backgroundSize = `${this.logoSize[0]}px  ${this.logoSize[1]}px`
            },
            hexToRgba(hex, opacity) {
                var rgb = []
                hex = hex.substr(1)
                if (hex.length == 3) {
                    hex = hex.replace(/(.)/g, '$1$1')
                }
                hex.replace(/../g, function (color) {
                    rgb.push(parseInt(color, 0x10))
                })
                if (!opacity) {
                    return `rgb(${rgb.join(',')})`
                }
                return `rgba(${rgb.join(',')}, ${opacity})`
            }
        }
    }
</script>
<style lang='less' scoped>
    @rem: 75rem;

    .v-easy-loading {
        z-index: 9999;
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
</style>