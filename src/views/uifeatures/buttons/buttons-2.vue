<template lang="html">
  <div class="buttons-2">
    <el-button :plain="true" :disabled="true">主要按钮</el-button>
    <el-button type="primary" :disabled="true">主要按钮</el-button>
    <el-button type="text" :disabled="true">文字按钮</el-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.buttons-2{
  width: 100%;
  height: 100%;
}
</style>
