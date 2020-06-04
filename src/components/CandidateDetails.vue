<template>
  <div>
    <div class="candidate-grid">
      <h1 class="candidate-name">{{name}}</h1>
      <div class="end">
        <JnDropDownBtn
          :text="selectedGroup"
          type="event"
          :options="dropDownOptions"
          @itemClicked="itemClicked"
        />
      </div>
      <JnIconList :listItems="iconMap" />
      <div class="end">
        <RatingComponent :size="20" :showCompact="true" />
      </div>
      <div class="assessment">
        <span v-if="screeningScore">
          <fa-icon :icon="['fas', 'bullseye']" size="sm" />
          {{screeningScore}} poeng
        </span>
        <JnBinaryDecision
          :id="candidate.id"
          :decision="isQualified"
          layout="horizontal"
          text="Kvalifisert: "
        />
      </div>
    </div>
  </div>
</template>
<script>
import JnIconList from "@jobbnorge/jn-components/src/ui_components/lists/JnIconList";
import JnBinaryDecision from "@jobbnorge/jn-components/src/ui_components/board/JnBinaryDecision";
import JnDropDownBtn from "@jobbnorge/jn-components/src/ui_components/buttons/JnDropDownBtn";
import RatingComponent from "./RatingComponent";
import { store } from "../store";

export default {
  name: "CandidateDetails",
  props: {
    candidate: Object
  },
  components: {
    JnIconList,
    JnBinaryDecision,
    JnDropDownBtn,
    RatingComponent
  },
  data() {
    return {
      iconMap: {},
      screeningScore: null,
      selectedGroup: null,
      isQualified: false,
      dropDownOptions: [
        { text: "Ikke kvalifisert", listName: "notQualified" },
        { text: "Kvalifisert", listName: "qualified" },
        { text: "Til vurdering", listName: "notAssessed" },
        { text: "Intervju", listName: "interview" },
        { text: "Innstillinger", listName: "nominated" }
      ]
    };
  },
  computed: {
    name: vm => `${vm.candidate.firstName} ${vm.candidate.lastName}`
  },
  created() {
    this.screeningScore = this.candidate.points;

    for (const key in store.getIcons()) {
      var value = this.candidate[key];
      this.iconMap[key] = [value, store.getIcons()[key]];
    }

    this.isQualified = store.isQualified(this.candidate.id);

    this.selectedGroup = this.dropDownOptions.find(
      o => o.listName === store.getListName(this.candidate.id)
    ).text;
  },
  methods: {
    itemClicked(option) {
      //TODO Actually move the candidate to what ever list
      console.info(option);
      this.selectedGroup = option.text;
    }
  }
};
</script>
<style scoped>
.candidate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
}
.candidate-name {
  font-size: 1.125rem;
  font-weight: 500;
}
.assessment {
  color: #1d764f;
  background: #fff;
}
.end {
  justify-self: end;
}
</style>