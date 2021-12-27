<template>
    <div>
        <button @click="clickHandle">Click me</button>
    </div>
</template>

<script>
export default {
    methods: {
        clickHandle() {
            this.$test('asd')
        }
    }
}
</script>