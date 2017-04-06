<template>
  <div class="message-1">
    <el-button :plain="true" @click="open">打开消息提示</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$message('这是一条消息提示');
    }
  }
}
</script>

<style lang="scss">
.message-1{
  width: 100%;
  height: 100%;
}
</style>
