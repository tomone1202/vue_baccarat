<template>
  <div style="position: relative">
    <div class="chipComponentAnimation chip" :style="styleTest">Chip</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRef } from "vue";
import { Chip } from "@/interface/BaccaratInterface";
export default defineComponent({
  name: "ChipDisplay",
  props: {
    chip: {
      type: Object as PropType<Chip>,
    },
    index: {
      type: Number,
    },
  },
  setup(props) {
    const chip: Ref<Chip | undefined> = toRef(props, "chip");
    const styleTest = ref();
    //動畫
    styleTest.value = {
      transform: `translateX(${chip?.value?.moveParam.x}px) translateY(${chip?.value?.moveParam.y}px)`,
      zIndex: 100,
    };
    setTimeout(() => {
      styleTest.value = "";
    }, 50);
    return { styleTest };
  },
});
</script>
