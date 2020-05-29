<template>
    <header>
        <Logo />
        <h1 class="title">Demo</h1>
    </header>    
</template>
<script>
    import Logo from './Logo'
    export default {
        name: "AppBar",
        components: {
            Logo
        }
    
    }
</script>
<style scoped>
    header {
        display: grid;
        grid-template-columns: auto auto;
        background-color: #177299; 
        height: 4rem;
        padding-left: 1rem; 
        align-items: center; 
        color: #fff; 
    }
    .title {
        font-size: 2rem;
    }
</style> 