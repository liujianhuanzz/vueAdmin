<template>
  <section class="va-main">
    <div class="va-content">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
//import Levelbar from './Levelbar'

export default {

}
</script>

<style lang="scss">
.va-main{
  position: relative;
  min-height: 500px;
  padding: 66px 0 34px 0;
  margin-left: 180px;

  .va-content{
    padding: 8px 32px 8px 40px;
  }
}
</style>
