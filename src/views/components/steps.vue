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
    </el-row>
  </div>
</template>

<script>
import steps1 from './steps/steps-1';

export default {
  components: {
    steps1
  }
}
</script>

<style lang="scss">
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.stepsGrid{
  color: #fff;
  height: 200px;
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
