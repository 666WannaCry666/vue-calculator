<template>
  <input
    type="text"
    :class="['calculator-view__input', inputClass]"
    :value="currentOperation"
    disabled
  />
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CalculatorInput",
  props: {
    inputClass: {
      type: String,
      required: false,
    },
  },
  methods: {
    ...mapMutations({
      setCurrentOperation: "calc/setCurrentOperation",
      deleteLastSymbolCurrentOperation: "calc/deleteLastSymbolCurrentOperation"
    }),
  },
  computed: {
    ...mapState({
      acceptedKeys: (state) => state.calc.acceptedKeys,
      currentOperation: (state) => state.calc.currentOperation,
    }),
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if (event.code.startsWith("Digit")) {
        this.setCurrentOperation(event.code.replace('Digit', ''));
      } else if (this.acceptedKeys.includes(event.key)) {
        this.setCurrentOperation(event.key);
      } else if (event.code === "Backspace") {
        this.deleteLastSymbolCurrentOperation()
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
