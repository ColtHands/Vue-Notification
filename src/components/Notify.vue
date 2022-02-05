<template>
    <div>
        asd
        <br>
        {{state}}
        <!-- <transition-group name="block" tag="div">
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
        </transition-group> -->
    </div>
</template>

<script>
import notificationMessage from './notificationMessage.vue'
import notifyPositionGroup from './notifyPositionGroup.vue'

export default {
    components: {
        notificationMessage,
        notifyPositionGroup
    },
    methods: {
        removeNotification(id) {
            this.notifyState.REMOVE_NOTIFICATION_BY_ID(id)
        }
    },
    mounted() {
        console.log('notify mounted', this)
        console.log('notify mounted', this.data)
        console.log('notify mounted', this.state)
        console.log('forceUpdate', this.$forceUpdate)
        // setInterval(() => {
        //     console.log('notify mounted', this.state)
        //     this.$forceUpdate()
        // }, 1000)
    }
    // computed: {
    //     notifications() {
    //         return this.state.getNotifications
    //     },
    //     eachUniqueActivePosition() {
    //         return this.state.eachUniqueActivePosition
    //     }
    // }
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