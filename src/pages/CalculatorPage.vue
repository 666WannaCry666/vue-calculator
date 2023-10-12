<template>
  <div class="calculator flex flex-col h-3/4 gap-7 mx-auto mt-14 w-1/3">
    <CalculatorView />
    <CalculatorKeyboard />
  </div>
</template>

<script>
import CalculatorView from "@/components/Calculator/CalculatorView.vue";
import CalculatorKeyboard from "@/components/Calculator/CalculatorKeyboard.vue"

export default {
  components: { CalculatorView, CalculatorKeyboard },
};
</script>

<style lang="scss" scoped></style>
