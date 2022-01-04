<template>
    <div>
        <div
            :class="['notifications', `notifications__${position}`]"
            v-for="(position, index) in eachUniqueActivePosition"
            :key="index"
        >
            <transition-group name="list" tag="div">
                <notificationMessage
                    v-for="e in notifications"
                    :key="e.id"
                    @click.native="removeNotification(e.id)"
                    :message="e.message"
                    :styleType="e.style"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>
import notificationMessage from './notificationMessage.vue'
import { REMOVE_NOTIFICATION_BY_ID } from "./../actionTypes.js"
import store from './../store.js'

export default {
    components: {
        notificationMessage
    },
    methods: {
        removeNotification(id) {
            store.dispatch(REMOVE_NOTIFICATION_BY_ID, id)
        }
    },
    computed: {
        notifications() {
            return store.getters.notifications
        },
        eachUniqueActivePosition() {
            return store.getters.eachUniqueActivePosition
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
    color: blue
    left: calc(50% - 150px)

.notifications 
    position: fixed
    width: 300px
    z-index: 12345
    font-family: Helvetica
    &__top-left
        +top
        +left
    &__top-center
        +top
        +center
    &__top-right
        +top
        +right
    &__bottom-left
        +bottom
        +left
    &__bottom-center
        +bottom
        +center
    &__bottom-right
        +bottom
        +right

.notification
    transition: all 0.15s

.list-enter,
.list-leave-to
    opacity: 0

.list-enter
    transform: translateY(50px)

.list-leave-to
    transform: translateY(-50px)

.list-leave-active
    position: absolute
</style>