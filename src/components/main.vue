<template>
  <div class="mainPage">
    <vHeader></vHeader>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import vHeader from './layout/Header'
import Sidebar from './layout/Sidebar'

export default {
  name: 'main',
  components: {
    vHeader,
    Sidebar
  },
  data () {return {}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
