<template>
  <div style="height: 100vh">
    <PlaceZone />
    <StakeZone />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlaceZone from "@/views/PlaceZone/PlaceZone.vue";
import StakeZone from "@/views/StakeZone/StakeZone.vue";

export default defineComponent({
  name: "BaccaratView",
  components: {
    PlaceZone,
    StakeZone,
  },
});
</script>
