<template>
  <header
    class="header flex w-screen items-center justify-between p-5 font-sans"
  >
    <button class="header-sidebar__btn w-8">
      <img src="@/assets/sidebar_button.png" alt="icon" />
    </button>
    <div class="header-links flex justify-center gap-4">
      <div
        :class="[
          'header__link flex w-1/2 cursor-pointer items-center justify-center rounded-full px-10 py-2 text-lg text-slate-400 hover:bg-teal-600 hover:text-white',
          currentMode === 'calculator' ? 'bg-teal-600 text-white' : '',
        ]"
      >
        Calculator
      </div>
      <div
        :class="[
          'header__link flex w-1/2 cursor-pointer items-center justify-center rounded-full px-10 py-2 text-lg text-slate-400 hover:bg-teal-600 hover:text-white',
          currentMode === 'converter' ? 'bg-teal-600 text-white' : '',
        ]"
      >
        Converter
      </div>
    </div>
    <button class="header-dark-theme__btn w-8">
      <img
        class="-rotate-45"
        src="@/assets/header_dark_theme_button.png"
        alt="icon"
      />
    </button>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      currentModeClass: "bg-teal-300",
    };
  },
  computed: {
    ...mapState({
      currentMode: (state) => state.currentMode,
    }),
  },
  mounted() {
    console.log(this.currentMode);
  },
};
</script>

<style lang="scss" scoped></style>
