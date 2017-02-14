<template lang="html">
  <div class="steps-3">
    <el-steps :space="100" :active="1">
      <el-step title="步骤 1" icon="edit"></el-step>
      <el-step title="步骤 2" icon="upload"></el-step>
      <el-step title="步骤 3" icon="picture"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.steps-3{
  width: 100%;
  height: 100%;
}
</style>
