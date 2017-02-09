<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <main-part></main-part>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import MainPart from './components/main'

export default {
  name: 'app',
  components: {
    NprogressContainer,
    MainPart
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
