<template>
  <button
    :class="[
      'calculator-keyboard__btn flex h-full w-1/4 items-center justify-center rounded-full text-3xl focus:outline-none active:outline-none',
      btnClass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      required: false,
    },
  }
};
</script>

<style scoped></style>
