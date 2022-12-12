<template>
  <span class="text-white">Stake:{{ stake }}</span>
  <div @click="placeBet" class="text-align-center placeBet">
    <div>
      <div v-for="(chip, index) in chipList" :key="index">
        <ChipDisplay :chip="chip" />
      </div>
      <div>
        <div style="position: relative" ref="betOptionTextRef">
          <div class="p-3 betOptionText">
            {{ betOption.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref } from "vue";
import { betType, Chip } from "@/interface/BaccaratInterface";
import { useStore } from "vuex";
import ChipDisplay from "@/views/PlaceZone/ChipDisplay.vue";

export default defineComponent({
  name: "PlaceBtn",
  props: {
    betOption: {
      type: Object as PropType<betType>,
    },
  },
  components: {
    ChipDisplay,
  },
  setup() {
    const store = useStore();
    const chipList: Ref<Chip[]> = ref([]);
    const betOptionTextRef: Ref<HTMLElement | null> = ref(null);

    const chipMount = computed(() => store.state.chipMount);
    class chip {
      amount: number;
      placeDate: Date;
      constructor() {
        this.amount = chipMount.value;
        this.placeDate = new Date();
      }

      getAnimationTimes() {
        return this.amount / 10 - 1;
      }
    }

    const getMoveParams = (
      element: HTMLElement | null,
      element2: HTMLElement | null
    ) => {
      if (element && element2) {
        let x = element.offsetLeft - element2.offsetLeft;
        let y = element.offsetTop - element2.offsetTop;
        return { x, y };
      }
      return { x: 0, y: 0 };
    };

    const placeBetList: Ref<chip[]> = ref([]);
    const stake: Ref<number> = ref(0);

    //下注
    const placeBet = () => {
      const newChip = new chip();
      addChipList(newChip, newChip.getAnimationTimes());
      placeBetList.value.push(newChip);
      stake.value += newChip.amount;
    };

    const addChipList = (newChip: chip, times: number): void => {
      const chipInitPositionEle: HTMLElement | null =
        document.getElementById("ChipInitPosition");
      const moveParam = getMoveParams(
        chipInitPositionEle,
        betOptionTextRef.value
      );
      chipList.value.push({
        moveParam,
      });
      //遞迴增加chipList for adding new component
      if (times > 0) {
        setTimeout(() => {
          addChipList(newChip, times - 1);
        }, 200);
      }
    };

    return { stake, placeBetList, placeBet, chipList, betOptionTextRef };
  },
});
</script>
