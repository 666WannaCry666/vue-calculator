<template>
  <div class="calculator-keyboard flex h-4/5 flex-col gap-5">
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        :btnClass="'hover:bg-slate-300 duration-150 hover:text-white'"
      >
        AC
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
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
        :btnClass="'text-teal-600 hover:bg-slate-300 duration-150 hover:text-teal-100'"
      >
        <font-awesome-icon :icon="['fas', 'divide']" />
      </CalculatorKeyboardButton>
    </CalculatorKeyboardRow>
    <CalculatorKeyboardRow>
      <CalculatorKeyboardButton
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        7
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        8
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
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
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        4
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        5
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
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
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        1
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        2
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
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
        :btnClass="'text-slate-400 hover:bg-slate-300 duration-150 hover:text-white'"
      >
        0
      </CalculatorKeyboardButton>
      <CalculatorKeyboardButton
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

export default {
  components: { CalculatorKeyboardRow, CalculatorKeyboardButton },
};
</script>

<style lang="scss" scoped></style>
