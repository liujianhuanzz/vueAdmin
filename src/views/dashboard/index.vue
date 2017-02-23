<template lang="html">
  <div class="indexPanel">
    <el-row :gutter="20">
      <el-col :lg="24">
        <div class="indexGrid">
          <div class="indexContent">
            <index5></index5>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12">
        <div class="indexGrid">
          <div class="indexContent">
            <index1></index1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="indexGrid">
          <div class="indexContent">
            <index2></index2>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="indexGrid">
          <div class="indexContent">
            <index3></index3>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="indexGrid">
          <div class="indexContent">
            <index4></index4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import index5 from './index/index-5';
import index1 from './index/index-1';
import index2 from './index/index-2';
import index3 from './index/index-3';
import index4 from './index/index-4';

export default {
  components: {
    index5,
    index1,
    index2,
    index3,
    index4
  }
}
</script>

<style lang="scss">
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.indexGrid{
  color: #fff;
  height: 360px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .indexContent{
    height: 100%;
  }
}
</style>
