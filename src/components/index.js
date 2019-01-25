import VEasyLoading from './v-easy-loading/index.vue'

const install = function (Vue) {
    if (install.installed) {
        return
    }
    Vue.component(VEasyLoading.name, VEasyLoading)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    VEasyLoading
}