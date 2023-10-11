<template>
  <header class="header flex w-screen justify-between p-5 font-sans">
    <button class="header-sidebar__btn w-8">
      <img src="@/assets/sidebar_button.png" alt="icon" />
    </button>
    <div class="header-links flex justify-center gap-4">
      <div
        class="header__link emerald flex w-1/2 items-center justify-center text-slate-400 text-lg cursor-pointer rounded-full px-10 py-2 hover:bg-teal-300 hover:text-white"
      >
        Calculator
      </div>
      <div
        class="header__link emerald flex w-1/2 items-center justify-center text-slate-400 text-lg cursor-pointer rounded-full px-10 py-2 hover:bg-teal-300 hover:text-white"
      >
        Converter
      </div>
    </div>
    <button class="header-sidebar__btn w-8">
      <img
        class="-rotate-45"
        src="@/assets/header_dark_theme_button.png"
        alt="icon"
      />
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
