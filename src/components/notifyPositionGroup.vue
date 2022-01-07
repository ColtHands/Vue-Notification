<template>
    <div :class="['notifications', `notifications_${position}`]">
        <slot></slot>
    </div>
</template>

<script>
import { positionOptions } from './../availibleOptions.js'

export default {
    props: {
        position: {
            type: String,
            required: true,
            default: 'top-center',
            validator: val => positionOptions.includes(val)
        }
    }
}
</script>

<style lang="sass" scoped>
=top
    top: 25px
=bottom
    bottom: 25px
=left
    left: 25px
=right
    right: 25px
=center
    left: calc(50% - 150px)

.notifications 
    position: fixed
    width: 320px
    z-index: 2
    font-family: Helvetica, sans-serif
    &_top-left
        +top
        +left
    &_top-center
        +top
        +center
    &_top-right
        +top
        +right
    &_bottom-left
        +bottom
        +left
    &_bottom-center
        +bottom
        +center
    &_bottom-right
        +bottom
        +right
</style>