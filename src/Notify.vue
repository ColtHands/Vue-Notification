<template>
    <div class="notifications">
        <transition-group name="list" tag="div">
            <notificationMessage v-for="e in notifications" :key="e.id" :message="e.message" @click.native="removeNotification(e.id)"/>
        </transition-group>
    </div>
</template>

<script>
import notificationMessage from './notificationMessage.vue'
import store from './store.js'

export default {
    components: {
        notificationMessage
    },
    methods: {
        ntf() {
            store.dispatch('notify', { message: 'wat', time: 3000 })
        },
        removeNotification(id) {
            store.commit('removeNotificationById', id)
        }
    },
    computed: {
        notifications() {
            return store.state.notifications
        }
    }
}
</script>

<style lang="sass" scoped>
.notifications 
    position: fixed
    top: 25px
    width: 300px
    left: calc(50% - 150px)
    z-index: 12345
    font-family: Helvetica

.notification
    transition: all 0.3s

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