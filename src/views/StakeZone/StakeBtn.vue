<template>
  <div
    class="p-4 baccaratBtn"
    :class="{ selectedChipAmount: chipMount === stakeOption.val }"
    @click="setChipMount"
  >
    <div ref="placeCenter ">
      {{ stakeOption.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import { stakeOption } from "@/interface/BaccaratInterface";
import { useStore } from "vuex";

export default defineComponent({
  name: "PlaceBtn",
  props: {
    stakeOption: {
      type: Object as PropType<stakeOption>,
    },
  },
  setup(props) {
    const store = useStore();
    const chipMount = computed(() => store.state.chipMount);
    const { stakeOption } = toRefs(props);
    const setChipMount = () => {
      store.commit("setChipMount", stakeOption.value?.val);
    };
    return {
      chipMount,
      setChipMount,
    };
  },
});
</script>
