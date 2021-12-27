<template>
    <div class="notify">
        <transition-group name="list" tag="div">
            <message v-for="e in notifications" :key="e.id" :message="e.message" @click.native="removeNotification(e.id)"/>
        </transition-group>
    </div>
</template>

<script>
import message from './notificationMessage.vue'
import store from './store.js'

export default {
    components: {
        message
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
.notify 
    position: fixed
    top: 25px
    width: 300px
    left: calc(50% - 150px)
    z-index: 12345
    font-family: Helvetica

// .list-item
//     display: inline-block
//     margin-right: 10px

.list-enter-active,
.list-leave-active 
    transition: all 1s

.list-enter,
.list-leave-to
    opacity: 0

.list-enter
    transform: translateY(30px)

.list-leave-to
    transform: translateY(-30px)
</style>