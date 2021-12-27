<template>
    <div class="notification">
        <closeIcon class="notification__close lnr lnr-cross"/>
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
        message: String
    }
}
</script>

<style lang="sass" scoped>
$bgc: #fff1f0
$color: #d85030

.notification
    background-color: $bgc
    border: 1px solid darken($bgc, 10%)
    color: $color
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
        color: red
    &:hover
        .notification__close
            visibility: visible
</style>