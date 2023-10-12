<template>
  <div class="App w-screen h-screen">
    <Header />
    <RouterView></RouterView>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import { RouterView } from 'vue-router';

export default {
  components: { Header, RouterView }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
