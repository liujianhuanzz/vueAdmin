<template lang="html">
  <div class="loading-3">
    <el-button
      type="primary"
      @click="openFullScreen"
      v-loading.fullscreen.lock="fullscreenLoading">
      显示整页加载，3 秒后消失
    </el-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 3000);
      }
    }
  }
</script>

<style lang="scss">
.loading-3{
  width: 100%;
  height: 100%;
}
</style>
