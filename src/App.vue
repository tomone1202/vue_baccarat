<template>
  <div class="d-flex justify-content-center">
    <Baccarat style="max-width: 600px" />
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
#app {
  background: #3e347f;
}
</style>
