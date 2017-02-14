<template lang="html">
  <div class="steps-2">
    <el-steps :space="100" :active="1" finish-status="success">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.steps-2{
  width: 100%;
  height: 100%;
}
</style>
