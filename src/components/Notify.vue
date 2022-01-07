<template>
    <transition-group name="block" tag="div">
        <notifyPositionGroup
            v-for="position in eachUniqueActivePosition"
            :key="position"
            :position="position"
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
        </notifyPositionGroup>
    </transition-group>
</template>

<script>
import notificationMessage from './notificationMessage.vue'
import notifyPositionGroup from './notifyPositionGroup.vue'
import { REMOVE_NOTIFICATION_BY_ID } from "./../actionTypes.js"
import store from './../store.js'

export default {
    components: {
        notificationMessage,
        notifyPositionGroup
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