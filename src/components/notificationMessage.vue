<template>
    <div :class="['notification', singleNotificationClassName]">
        <closeIcon class="notification__close"/>
        <span class="notification__message">{{message}}</span>
    </div>
</template>

<script>
import closeIcon from './closeIcon.vue'
import { styleOptions } from './../availibleOptions.js'
import store from './../store.js'

export default {
    components: {
        closeIcon
    },
    props: {
        message: {
            type: String,
            default: '',
            required: true,
        },
        styleType: {
            type: String,
            required: true,
            default: store.state.defaultOptions.style,
            validator: val => styleOptions.includes(val)
        }
    },
    computed: {
        singleNotificationClassName() {
            return `notification_${styleOptions.includes(this.$props.styleType) ? this.$props.styleType : store.state.defaultOptions.style}`
        }
    }
}
</script>

<style lang="sass" scoped>
=light
    color: #fff
    .notification__close
        fill: #fff
=dark
    color: #333 !important
    .notification__close
        fill: #333

=default
    background-color: #fff
    border-color: #ccc
    +dark
=basic
    background-color: #efefef
    border-color: #efefef
    +dark
=primary
    background-color: mix(#007bff, #337ab7, 40%)
    border-color: mix(#007bff, #2e6da4, 100%)
    +light
=secondary
    background-color: #6c757d
    border-color: #6c757d
    +light
=success
    background-color: #28a745
    border-color: #28a745
    +light
=info
    background-color: #17a2b8
    border-color: #17a2b8
    +light
=warning
    background-color: #ffc107
    border-color: #ffc107
    +dark
=danger
    background-color: #dc3545
    border-color: #dc3545
    +light
=darks
    background-color: lighten(#343a40, 10%)
    border-color: lighten(#343a40, 10%)
    +light
=danger-light
    background: #f9ebea
    color: #d85030
    border-color: lighten(#d85030, 35%)
    .notification__close
        fill: #d85030

.notification
    box-sizing: border-box
    width: 100%
    border-radius: 5px
    border: 1px solid
    padding: 15px 10px
    margin: 10px auto
    cursor: pointer
    line-height: 20px
    touch-action: manipulation
    user-select: none
    background-color: #fff
    &__message,
    &__message
        font-size: 14px
    &__close
        visibility: hidden
        position: relative
        top: 3px
        float: right
        margin-left: 2px
        font-weight: 600
        width: 13px
        font-size: 13px
        height: auto
        fill: #fff
    &:hover
        .notification__close
            visibility: visible
    .notification__close
        vertical-align: top
        fill: #333
    &_default
        +default
    &_basic
        +basic
    &_primary
        +primary
    &_secondary
        +secondary
    &_success
        +success
    &_info
        +info
    &_warning
        +warning
    &_danger
        +danger
    &_dark
        +darks
    &_danger-light
        +danger-light
</style>