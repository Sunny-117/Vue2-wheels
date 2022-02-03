<template>
    <div class="w-radio" :class="{ vertical }">
        <WOption
            v-for="(option, index) in options"
            :key="option.value"
            :option="option"
            :index="index"
            :current.sync="current"
        ></WOption>
    </div>
</template>
<script>
import WOption from './WOption.vue'
export default {
    name: "xRadio",
    components: { WOption },
    props: {
        options: { type: Array, required: true },
        vertical: { type: Boolean, default: false },
        defaultIndex: Number
    },
    data() {
        return {
            current: -1
        }
    },
    watch: {
        current(val) {
            if (val > -1) {
                this.$emit('value-change', this.options[val].value)
            }
        }
    },
    created() {
        this.defaultIndex || this.defaultIndex === 0 ? this.current = this.defaultIndex : ''
    }
}
</script>
<style scoped lang="scss">
.w-radio {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.vertical {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>