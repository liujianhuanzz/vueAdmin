<template lang="html">
  <div class="index-5">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name: 'index-5',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.index-5{
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #4b79c7;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #5a9ac9;
}
</style>
