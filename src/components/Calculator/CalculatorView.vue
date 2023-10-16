<template>
  <div class="calculator-view flex h-1/5 w-full flex-col items-end gap-5">
    <p
      class="calculator-last-operation h-1/4 px-4 text-right text-lg text-slate-400"
    >
      155 + 900 + 892
    </p>
    <CalculatorInput
      @update:modelValue="nullCheck"
      :modelValue="currentOperation"
      :inputClass="'h-2/4 w-full text-right text-6xl px-4'"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setCurrentOperation: "calc/setCurrentOperation",
    }),
    nullCheck(operation) {
      if (this.currentOperation.length <= 1) {
        this.setCurrentOperation('0')
      } else {
        this.setCurrentOperation(operation)
      }
    }
  },
  computed: {
    ...mapState({
      currentOperation: (state) => state.calc.currentOperation,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
