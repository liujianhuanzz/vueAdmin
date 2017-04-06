<template lang="html">
  <div class="stepsPanel">
    <el-row :gutter="20">
      <el-col :lg="8" :md="8" :sm="12">
        <div class="stepsGrid">
          <div class="stepsHeader">
            <h4 class="stepsTitle">
              简单的步骤条
            </h4>
          </div>
          <div class="stepsContent">
            <steps1></steps1>
          </div>
        </div>
      </el-col>
      <el-col :lg="8" :md="8" :sm="12">
        <div class="stepsGrid">
          <div class="stepsHeader">
            <h4 class="stepsTitle">
              含状态步骤条
            </h4>
          </div>
          <div class="stepsContent">
            <steps2></steps2>
          </div>
        </div>
      </el-col>
      <el-col :lg="8" :md="8" :sm="12">
        <div class="stepsGrid">
          <div class="stepsHeader">
            <h4 class="stepsTitle">
              带图标的步骤条
            </h4>
          </div>
          <div class="stepsContent">
            <steps3></steps3>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="16" :md="16" :sm="24">
        <div class="stepsGrid">
          <div class="stepsHeader">
            <h4 class="stepsTitle">
              带描述的步骤条
            </h4>
          </div>
          <div class="stepsContent">
            <steps4></steps4>
          </div>
        </div>
      </el-col>
      <el-col :lg="8" :md="8" :sm="12">
        <div class="stepsGrid" style="height:300px;">
          <div class="stepsHeader">
            <h4 class="stepsTitle">
              竖直的步骤条
            </h4>
          </div>
          <div class="stepsContent">
            <steps5></steps5>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import steps1 from './steps/steps-1';
import steps2 from './steps/steps-2';
import steps3 from './steps/steps-3';
import steps4 from './steps/steps-4';
import steps5 from './steps/steps-5';

export default {
  components: {
    steps1,
    steps2,
    steps3,
    steps4,
    steps5
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.stepsGrid{
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .stepsHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.stepsTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .stepsContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
