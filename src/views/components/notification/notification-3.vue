<template>
  <div class="notification-3">
    <el-button
      plain
      @click="open7">
      偏移的消息
    </el-button>
  </div>
</template>

<script>
export default {
    methods: {
      open7() {
        this.$notify.success({
          title: '成功',
          message: '这是一条成功的提示消息',
          offset: 300
        });
      }
    }
  }
</script>

<style lang="scss">
.notification-3{
  width: 100%;
  height: 100%;
}
</style>
