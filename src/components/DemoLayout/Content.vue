<template>
    <div class="content-wrapper">
        <slot></slot>
    </div>
</template>
<style scoped>
    .content-wrapper {
        display: grid; 
        grid-template-columns: 5rem auto;
        gap: 1rem; 
    }
</style>