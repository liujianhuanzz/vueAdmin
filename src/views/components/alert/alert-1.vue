<template>
  <div class="alert-1">
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info">
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning">
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error">
    </el-alert>
  </div>
</template>

<script>
export default {
    data() {
      return {}
    }
  };
</script>

<style lang="scss">
.alert-1{
  width: 100%;
  height: 100%;
}
</style>
