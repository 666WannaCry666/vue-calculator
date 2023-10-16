<template>
  <input
    v-focus
    type="text"
    :class="['calculator-view__input', inputClass]"
    @input="updateInput"
    @blur="checkValue"
    :value="modelValue"
  />
</template>

<script>
export default {
    name: 'CalculatorInput',
    props: {
        inputClass: {
            type: String,
            required: false
        },
        modelValue: {
            type: String,
            required: false
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        checkValue() {
            this.$emit('update:modelValue', '0')
        }
    },
};
</script>

<style lang="scss" scoped></style>
