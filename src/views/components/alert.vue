<template lang="html">
  <div class="alertPanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="24">
        <div class="alertGrid">
          <div class="alertHeader">
            <h4 class="alertTitle">
              基本用法
            </h4>
          </div>
          <div class="alertContent">
            <alert1></alert1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="24">
        <div class="alertGrid">
          <div class="alertHeader">
            <h4 class="alertTitle">
              自定义关闭按钮
            </h4>
          </div>
          <div class="alertContent">
            <alert2></alert2>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import alert1 from './alert/alert-1';
import alert2 from './alert/alert-2';

export default {
  components: {
    alert1,
    alert2
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.alertGrid{
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

  .alertHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.alertTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .alertContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
