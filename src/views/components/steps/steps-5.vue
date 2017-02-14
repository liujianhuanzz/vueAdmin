<template lang="html">
  <div class="steps-5">
    <el-steps :space="100" direction="vertical" :active="1">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.steps-5{
  width: 100%;
  height: 100%;
}
.el-step__line.is-vertical{
  left: auto;
}
</style>
