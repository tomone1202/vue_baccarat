<template>
  <div class="d-flex justify-content-center" style="min-width: 700px">
    <Baccarat />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Baccarat from "@/views/Baccarat.vue";

export default defineComponent({
  name: "App",
  components: {
    Baccarat,
  },
});
</script>

<style lang="scss">
body {
  background: #3e347f !important;
}
</style>
