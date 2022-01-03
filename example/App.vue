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
    </div>
</template>

<script>
export default {
    methods: {
        clickHandle(position) {
            this.$notify(`This notification appears at ${position}`, { time: 30000, position })
        }
    }
}
</script>