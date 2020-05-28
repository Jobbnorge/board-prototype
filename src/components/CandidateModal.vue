<template>
        <JnDialogComponent v-bind="modalData" @resolveModal ="$emit('ok', $event)" >
            <template #header>
                <slot name="modalHeader"></slot>
            </template>
            <template #body>
                <slot name="modalBody"></slot>
            </template>
        </JnDialogComponent>
</template>
<script>
    import JnDialogComponent from '@jobbnorge/jn-components/src/ui_components/jn-dialog/JnDialogComponent';

    export default {
        name: "CandidateModal",
        components: {
            JnDialogComponent
        },
        props: {
            modalData: Object
        }
    }
</script>
<style scoped>

</style>