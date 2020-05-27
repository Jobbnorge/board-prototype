<template>
  <div id="app">
    <BoardComponent />
    <HelloWorld />
  </div>
</template>

<script>
import BoardComponent from './components/BoardComponent.vue'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    BoardComponent,
    HelloWorld
  }
}
</script>
