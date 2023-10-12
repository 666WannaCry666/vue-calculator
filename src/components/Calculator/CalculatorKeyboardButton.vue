<template>
    <button :class="['calculator-keyboard__btn w-1/4 h-full rounded-full text-3xl flex items-center justify-center', btnClass]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            btnClass: {
                type: String,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>