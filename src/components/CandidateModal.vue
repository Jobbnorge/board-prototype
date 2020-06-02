<template>
        <JnDialogComponent v-bind="modalData" @resolveModal ="$emit('ok', $event)" >
            <template #header>
                    <p>{{candidateData.id}}</p>
                    <p>Søknad mottat: {{cleanDate}}</p>
            </template>
            <template #body>
                <CandidateDetails :candidate="candidateData" />
            </template>
        </JnDialogComponent>
</template>
<script>
    import JnDialogComponent from '@jobbnorge/jn-components/src/ui_components/jn-dialog/JnDialogComponent';
    import CandidateDetails from "./CandidateDetails"

    export default {
        name: "CandidateModal",
        components: {
            JnDialogComponent,
            CandidateDetails        
        },
        props: {
            modalData: Object,
            candidateData: Object       
        },
        data() {
            return {
                cleanDate: ""
            }
        },
        created() {
            var date = this.candidateData.applicationDate;
            
            //its just a demo right? 
            const regex = /(\d{4}-\d{2}-\d{2})/g
            const found = date.match(regex);
            const toDate = new Date(found[0]);
            var dateString = toDate.toLocaleDateString()
            this.cleanDate = dateString;   
        }
    }
</script>
<style scoped>

</style>