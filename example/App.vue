<template>
    <div>
        <div>
            <button @click="clickHandle('top-left')">top-left</button>
            <button @click="clickHandle('top-center')">top-center</button>
            <button @click="clickHandle('top-right')">top-right</button>
        </div>
        <br>
        <div>
            <button @click="clickHandle('bottom-left')">bottom-left</button>
            <button @click="clickHandle('bottom-center')">bottom-center</button>
            <button @click="clickHandle('bottom-right')">bottom-right</button>
        </div>
        <br>
        <div>
            <button @click="clickHandle()">no style</button>
        </div>
        <br>
        <div>
            <div>
                <button @click="clickHandle(undefined, 'default')">default style</button>
                <button @click="clickHandle(undefined, 'basic')">basic style</button>
                <button @click="clickHandle(undefined, 'primary')">primary style</button>
            </div>
            <br>
            <div>
                <button @click="clickHandle(undefined, 'secondary')">secondary style</button>
                <button @click="clickHandle(undefined, 'success')">success style</button>
                <button @click="clickHandle(undefined, 'info')">info style</button>
            </div>
            <br>
            <div>
                <button @click="clickHandle(undefined, 'warning')">warning style</button>
                <button @click="clickHandle(undefined, 'danger')">danger style</button>
                <button @click="clickHandle(undefined, 'dark')">dark style</button>
                <button @click="clickHandle(undefined, 'danger-light')">danger-light</button>
            </div>
            <br>
            <div>
                <button @click="callNotificationFromStore()">callNotificationFromStore</button>
                <!-- <button @click="clickFromVueUsingStore()">clickFromVueUsingStore</button> -->
                <!-- <button @click="clickFromStoreUsingPlugin()">clickFromStoreUsingPlugin</button> -->
                <button @click="clickFrom$notifyStore()">clickFrom$notifyStore</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickHandle(position, style, timeout) {
            this.$notify(`This notification appears at ${position} with ${style} style`, { timeout, position, style })
        },
        callNotificationFromStore() {
            this.$store.dispatch('callNotificationFromStore')
        },
        clickFromVueUsingStore() {
            this.$store.$notify('notify from store plugin', { style: 'danger-light' })
        },
        clickFromStoreUsingPlugin() {
            this.$store.dispatch('clickFromStoreUsingPlugin')
        },
        clickFrom$notifyStore() {
            this.$notifyStore.dispatch('NOTIFY', { message: 'wtf' })
        },
        testClick() {
            this.$notify('asd', { style: 'asd' })
        }
    }
}
</script>