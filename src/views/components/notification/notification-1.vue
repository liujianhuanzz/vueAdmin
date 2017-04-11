<template>
  <div class="notification-1">
    <el-button
      plain
      @click="open">
      可自动关闭
    </el-button>
    <el-button
      plain
      @click="open2">
      不会自动关闭
      </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('p', { style: 'color: red'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },

    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    }
  }
}
</script>

<style lang="scss">
.notification-1{
  width: 100%;
  height: 100%;
}
</style>
