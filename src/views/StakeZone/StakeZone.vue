<template>
  <div>
    <ChipInitPosition />
    <div class="d-flex stakeZone justify-content-between mt-5">
      <div
        v-for="(stakeOption, index) in stakeOptions"
        class="text-center p-4"
        :key="index"
      >
        <StakeBtn :stakeOption="stakeOption" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { stakeOption } from "@/interface/BaccaratInterface";
import StakeBtn from "@/views/StakeZone/StakeBtn.vue";
import ChipInitPosition from "@/views/StakeZone/ChipInitPosition.vue";

export default defineComponent({
  name: "StakeZone",
  components: {
    StakeBtn,
    ChipInitPosition,
  },
  setup() {
    const stakeOptions: stakeOption[] = [
      {
        text: "10",
        val: 10,
      },
      {
        text: "20",
        val: 20,
      },
      {
        text: "30",
        val: 30,
      },
      {
        text: "40",
        val: 40,
      },
      {
        text: "50",
        val: 50,
      },
    ];
    return { stakeOptions };
  },
});
</script>
