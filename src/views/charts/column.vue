<template lang="html">
  <div class="columnPanel">
    <el-row :gutter="20">
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              柱状图动画延迟
            </h4>
          </div>
          <div class="columnContent">
            <column1></column1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              柱状图框选
            </h4>
          </div>
          <div class="columnContent">
            <column2></column2>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              特性示例：渐变色 阴影 点击缩放
            </h4>
          </div>
          <div class="columnContent">
            <column3></column3>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              正负条形图
            </h4>
          </div>
          <div class="columnContent">
            <column4></column4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import column1 from './column/column-1';
import column2 from './column/column-2';
import column3 from './column/column-3';
import column4 from './column/column-4';

export default {
  components: {
    column1,
    column2,
    column3,
    column4
  }
}
</script>

<style lang="scss">
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.columnGrid{
  color: #fff;
  height: 330px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  .columnHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.columnTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .columnContent{
    height: calc(100% - 44px);
  }
}
</style>
