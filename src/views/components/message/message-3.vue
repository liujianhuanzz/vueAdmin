<template>
  <div class="message-3">
    <el-button :plain="true" @click="open5">消息</el-button>
    <el-button :plain="true" @click="open6">成功</el-button>
    <el-button :plain="true" @click="open7">警告</el-button>
    <el-button :plain="true" @click="open8">错误</el-button>
  </div>
</template>

<script>
export default {
    methods: {
      open5() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条消息'
        });
      },
      open6() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>

<style lang="scss">
.message-3{
  width: 100%;
  height: 100%;
}
</style>
