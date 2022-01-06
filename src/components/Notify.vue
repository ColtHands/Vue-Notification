<template>
    <div>
        <transition-group name="block" tag="div">
            <div
                :class="['notifications', `notifications_${position}`]"
                v-for="position in eachUniqueActivePosition"
                :key="position"
            >
                <transition-group name="list" tag="div">
                    <notificationMessage
                        v-for="e in notifications.filter(e => e.position == position)"
                        :key="e.id"
                        @click.native="removeNotification(e.id)"
                        :message="e.message"
                        :styleType="e.style"
                    />
                </transition-group>
            </div>
        </transition-group>
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

.block-enter-active, .block-leave-active
    transition: opacity .15s

.block-enter, .block-leave-to
    opacity: 0
</style>