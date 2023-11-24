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
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      setCurrentOperation: "calc/setCurrentOperation",
      deleteLastSymbolCurrentOperation: "calc/deleteLastSymbolCurrentOperation",
      equalHandler: "calc/equalHandler",
    }),
  },
  computed: {
    ...mapState({
      operators: state => state.calc.operators,
      currentOperation: (state) => state.calc.currentOperation,
    }),
  },
  mounted() {
    document.addEventListener("keydown", (event) => {
      if ([...Array(10).keys()].includes(+event.key)) {
        this.setCurrentOperation(event.key);
      } else if (Object.values(this.operators).includes(event.key)) {
        this.setCurrentOperation(event.key);
      } else if (event.code === "Backspace") {
        this.deleteLastSymbolCurrentOperation()
      } else if (event.code === 'Equal') {
        this.equalHandler();
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
