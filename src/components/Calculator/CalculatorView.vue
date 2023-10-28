<template>
  <div class="calculator-view flex h-1/5 w-full flex-col items-end gap-5">
    <p
      class="calculator-last-operation h-1/4 px-4 text-right text-lg text-slate-400"
    >
      155 + 900 + 892
    </p>
    <CalculatorInput
      :inputClass="'h-2/4 w-full text-right text-6xl px-4'"
    />
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped></style>
