<template>
    <div :class="['notification', `notification_${styleType}`]">
        <closeIcon class="notification__close"/>
        <span class="notification__message">{{message}}</span>
    </div>
</template>

<script>
import closeIcon from './closeIcon.vue'

export default {
    components: {
        closeIcon
    },
    props: {
        message: {
            type: String,
            required: true
        },
        styleType: String
    }
}
</script>

<style lang="sass" scoped>
=default
=basic
=primary
=secondary
=success
=info
=warning
=danger
    color: #fff
    background-color: #d9534f
    border-color: #d43f3a
    &__close
        color: #fff
=dark

.notification
    width: 100%
    border-radius: 5px
    padding: 15px 10px
    margin: 10px auto
    cursor: pointer
    line-height: 20px
    &__message,
    &__close
        vertical-align: top
    &__message
        font-size: 12px
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
    &:hover
        .notification__close
            visibility: visible
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
        +dark
</style>