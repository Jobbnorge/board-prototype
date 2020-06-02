<template>
    <div>
        <h1 class="candidate-name">{{name}}</h1>
        <JnIconList :listItems="iconMap" />
    </div>
</template>
<script>
import JnIconList from "@jobbnorge/jn-components/src/ui_components/lists/JnIconList";
import { store } from "../store";

export default {
    name: "CandidateDetails",
    props: {
        candidate: Object,
    },
    components: {
        JnIconList
    },
    data() {
        return {
            iconMap: {}
        }
    },
    computed: {
        name: (vm) => `${vm.candidate.firstName} ${vm.candidate.lastName}`
    },
    created() {
        this.iconMap = store.state.candidates.icons
        for (const iconKey in this.iconMap) {
           var value = this.candidate[iconKey]
           this.iconMap[iconKey] = [value, this.iconMap[iconKey]]
           this.candidate[iconKey] = [value, this.iconMap[iconKey]]
        }
    }
}
</script>
<style scoped>
    .candidate-name {
        font-size: 1.125rem; 
        font-weight: 500;
    }
</style>