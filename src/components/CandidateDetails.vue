<template>
    <div>
        <h1 class="candidate-name">{{name}}</h1>
        <div class="candidate-grid">
            <JnIconList :listItems="iconMap" />
            <div class="green end">
            <span v-if="screeningScore">
                <fa-icon :icon="['fas', 'bullseye']" size="sm" />
                {{screeningScore}} poeng
            </span>
            <JnBinaryDecision 
                :id="candidate.id"
                :decision="0"
                layout="horizontal"
                text="Kvalifisert: "
            />
            </div>
        </div>
    </div>
</template>
<script>
import JnIconList from "@jobbnorge/jn-components/src/ui_components/lists/JnIconList";
import JnBinaryDecision from "@jobbnorge/jn-components/src/ui_components/board/JnBinaryDecision"
import { store } from "../store";

export default {
    name: "CandidateDetails",
    props: {
        candidate: Object,
    },
    components: {
        JnIconList,
        JnBinaryDecision
    },
    data() {
        return {
            iconMap: {},
            screeningScore: null, 
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
    }
}
</script>
<style scoped>
    .candidate-grid {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
    }
    .candidate-name {
        font-size: 1.125rem; 
        font-weight: 500;
    }
    .end {
        justify-self: end;
    }
    .green {
        color: #1D764F;
        background: #fff; 
    }
</style>