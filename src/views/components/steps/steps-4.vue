<template lang="html">
  <div class="steps-4">
    <el-steps :space="200" :active="1">
      <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.steps-4{
  width: 100%;
  height: 100%;
}
</style>
