<template>
    <div>
        <button @click="clickHandle">Click me</button>
    </div>
</template>

<script>
export default {
    methods: {
        clickHandle() {
            this.$notify('asd', { time: 30000 })
        }
    }
}
</script>