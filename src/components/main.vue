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
<style scoped>

</style>
