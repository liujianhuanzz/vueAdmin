<template>
  <div class="messageBox-1">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
}
</script>

<style lang="scss">
.messageBox-1{
  width: 100%;
  height: 100%;
}
</style>
