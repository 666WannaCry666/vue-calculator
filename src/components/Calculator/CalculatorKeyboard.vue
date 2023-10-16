<template>
  <div class="calculator-keyboard flex h-4/5 flex-col gap-5">
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        @click="allClear"
        :btnClass="'hover:bg-slate-300 duration-150 hover:text-white'"
      >
        AC
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        @click="deleteLastSymbol"
        :btnClass="'hover:bg-slate-300 duration-150 hover:text-white'"
      >
        <font-awesome-icon :icon="['fas', 'delete-left']" />
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'percent']" />
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        @click="addDivideOperation"
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'divide']" />
      </CalculatorKeyboardButton>
    </CalculatorKeyboardRow>
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        value="7"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        7
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="8"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        8
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="9"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        9
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </CalculatorKeyboardButton>
    </CalculatorKeyboardRow>
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        value="4"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        4
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="5"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        5
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="6"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        6
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'minus']" />
      </CalculatorKeyboardButton>
    </CalculatorKeyboardRow>
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        value="1"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        1
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="2"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        2
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="3"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        3
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'plus']" />
      </CalculatorKeyboardButton>
    </CalculatorKeyboardRow>
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        <font-awesome-icon :icon="['fas', 'plus-minus']" />
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="0"
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        0
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        value="."
        @click="setCurrentOperationFromKeyboard"
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        .
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'equals']" />
      </CalculatorKeyboardButton>
    </CalculatorKeyboardRow>
  </div>
</template>

<script>
import CalculatorKeyboardRow from "@/components/Calculator/CalculatorKeyboardRow.vue";
import CalculatorKeyboardButton from "@/components/Calculator/CalculatorKeyboardButton.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: { CalculatorKeyboardRow, CalculatorKeyboardButton },
  methods: {
    ...mapMutations({
      setCurrentOperation: "calc/setCurrentOperation",
      setOperands: "calc/setOperands",
    }),
    setCurrentOperationFromKeyboard(event) {
      if (this.currentOperation === '0') {
        this.setCurrentOperation(event.target.value);
        return;
      }
      this.setCurrentOperation(this.currentOperation + event.target.value);
    },
    allClear() {
      this.setCurrentOperation('0');
    },
    deleteLastSymbol() {
      if (this.currentOperation.length <= 1) {
        this.setCurrentOperation('0');
        return;
      }
      this.setCurrentOperation(this.currentOperation.slice(-this.currentOperation.length, -1));
    },
    addDivideOperation() {

    }
  },
  computed: {
    ...mapState({
      currentOperation: state => state.calc.currentOperation,
      operands: state => state.calc.operands,
    })
  }
};
</script>

<style lang="scss" scoped></style>
