<template>
  <div class="notification-2">
    <el-button
      plain
      @click="open3">
      成功
    </el-button>
    <el-button
      plain
      @click="open4">
      警告
    </el-button>
    <el-button
      plain
      @click="open5">
      消息
    </el-button>
    <el-button
      plain
      @click="open6">
      错误
    </el-button>
  </div>
</template>

<script>
export default {
    methods: {
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
</script>

<style lang="scss">
.notification-2{
  width: 100%;
  height: 100%;
}
</style>
