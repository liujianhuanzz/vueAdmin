<template>
  <div class="alert-3">
    <el-alert
      title="成功提示的文案"
      type="success"
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      show-icon>
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
.alert-3{
  width: 100%;
  height: 100%;
}
</style>
