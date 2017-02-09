<template>
  <div class="mainPage">
    <v-header></v-header>
    <sidebar></sidebar>
    <app-main></app-main>
  </div>
</template>

<script>
import vHeader from './layout/Header'
import Sidebar from './layout/Sidebar'
import AppMain from './layout/AppMain'

export default {
  name: 'main',
  components: {
    vHeader,
    Sidebar,
    AppMain
  },
  data () {return {}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mainPage{
  min-height: 100%;
  position: relative;
  font: 14px/16px "Roboto", sans-serif;
  color: #fff;
  background-color: #f0f3f4;

  &::before{
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/sky-bg.jpg') no-repeat center center;
    background-size: cover;
    will-change: transform;
    z-index: 0;
  }
}
</style>
