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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickHandle(position, style, time) {
            this.$notify(`This notification appears at ${position} with ${style} style`, { time, position, style })
        }
    }
}
</script>