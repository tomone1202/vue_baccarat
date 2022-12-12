<template>
  <div class="mt-5 placeZone">
    <div class="row">
      <div
        v-for="(betOption, index) in betType"
        class="baccaratBtn text-center g-0"
        :class="'col-' + betOption.col"
        :key="index"
      >
        <PlaceBtn :betOption="betOption" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { betType } from "@/interface/BaccaratInterface";
import PlaceBtn from "@/views/PlaceZone/PlaceBtn.vue";

export default defineComponent({
  name: "PlaceZone",
  props: {
    msg: String,
  },
  components: {
    PlaceBtn,
  },
  setup() {
    const betType: betType[] = [
      {
        col: 4,
        text: "BP",
      },
      {
        col: 4,
        text: "T",
      },
      {
        col: 4,
        text: "PP",
      },
      {
        col: 6,
        text: "B",
      },
      {
        col: 6,
        text: "P",
      },
    ];
    return { betType };
  },
});
</script>
