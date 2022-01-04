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
=light-text
    color: #fff
    .notification__close
        fill: #fff
=dark-text
    color: #333
    .notification__close
        fill: #333

=default
=basic
    background-color: #efefef
    border-color: #efefef
    +dark-text
=primary
=secondary
=success
=info
=warning
=danger
    background-color: #d9534f
    border-color: #d43f3a
    +light-text
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