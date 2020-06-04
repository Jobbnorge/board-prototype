<template>
    <div>
        
        <div class="candidate-grid">
            <h1 class="candidate-name">{{name}}</h1>
            <div class="end">
                <JnDropDownBtn :text="selectedGroup" type="event" :options='[{text: "Ikke kvalifisert"}, {text: "Kvalifisert"}]' @itemClicked="itemClicked" />
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
                    :decision="getDescision()"
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
        candidate: Object,
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
            selectedGroup: "Ikke vurdert",
            isQualified: false 
        }
    },
    computed: {
        name: (vm) => `${vm.candidate.firstName} ${vm.candidate.lastName}`
    },
    created() {

        this.screeningScore = this.candidate.points

        for (const key in store.getIcons()) {
           var value = this.candidate[key];
           this.iconMap[key] = [value, store.getIcons()[key]]; 
        }
        this.isQualified = store.isQualified(this.candidate.id)
    },
    methods: {
        itemClicked(option) {
            //TODO Actually move the candidate to what ever list
            this.selectedGroup = option.text; 
            
        },
        getDescision() {
            if(this.isQualified) {
                return 1
            }
            else {
                return 0
            }
        }
    }

}
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
        color: #1D764F;
        background: #fff; 
    }
    .end {
        justify-self: end;
    }
</style>