<template>
    <button
        class="w-button"
        :class="{ [`icon-${position}`]: true, primary, normal }"
        @click="onClick"
    >
        <WIcon v-if="icon" type="chat" class="x-icon" />
        <span class="slot-content">
            <slot></slot>
        </span>
    </button>
</template>
<script>
import WIcon from '../WIcon/WIcon.vue';

export default {
    name: 'WButton',
    components: {
        WIcon
    },
    data() {
        return {
        }
    },
    props: {
        icon: Boolean,
        position: {
            type: String,
            default: 'left',
            validator(value) {
                return value === 'right' || value === 'left'
            }
        },
        primary: {
            type: Boolean, default: false
        },
        normal: {
            type: Boolean, default: false
        },
    },

    methods: {
        onClick(e) {
            this.$emit('click', e)
        },
    },
}
</script>
<style scoped lang="scss">
@import "../color.scss";
.w-button {
    cursor: pointer;
    font-size: 14px;
    line-height: 32px;
    height: 32px;
    padding: 0 12px;
    color: $main;
    border-radius: 5px;
    background: #fff;
    border: 1px solid;
    border-color: $border;
    display: flex;
    align-items: center;
    &:hover {
        color: $p;
        border-color: $p;
    }
    &:focus {
        outline: none;
        border-color: $p;
        color: $p;
    }

    &.icon-left {
        > .x-icon {
            order: 1;
            margin-right: 0.1em;
        }
        > .slot-content {
            order: 2;
        }
    }
    &.icon-right {
        > .x-icon {
            order: 2;
            margin-left: 0.1em;
        }
        > .slot-content {
            order: 1;
        }
    }

    &.normal {
        background: $bg;
    }
    &.primary {
        background: $p;
        color: #fff;
        border-color: $p;
    }
}
</style>