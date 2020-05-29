<template>
  <div id="app">
    <AppBar />
    <Content>
      <SideBar />
      <BoardComponent />
    </Content>
  </div>
</template>

<script>
import BoardComponent from './components/BoardComponent.vue'
import AppBar from './components/DemoLayout/AppBar.vue'
import Content from './components/DemoLayout/Content.vue'
import SideBar from './components/DemoLayout/SideBar.vue'

export default {
  name: 'App',
  components: {
    BoardComponent,
    AppBar,
    SideBar,
    Content
  
  }
}


</script>
