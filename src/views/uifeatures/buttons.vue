<template lang="html">
  <div class="buttonsPanel">
    <el-row :gutter="20">
      <el-col :lg="8" :md="8" :sm="12">
        <div class="buttonsGrid">
          <div class="buttonsHeader">
            <h4 class="buttonsTitle">
              基础的按钮用法
            </h4>
          </div>
          <div class="buttonsContent">
            <buttons1></buttons1>
          </div>
        </div>
      </el-col>
      <el-col :lg="8" :md="8" :sm="12">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                按钮不可用状态
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons2></buttons2>
            </div>
          </div>
        </el-col>
        <el-col :lg="8" :md="8" :sm="12">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                加载中
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons3></buttons3>
            </div>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                带图标的按钮
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons4></buttons4>
            </div>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                按钮组
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons5></buttons5>
            </div>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                默认显示颜色
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons6></buttons6>
            </div>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                Hover显示颜色
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons7></buttons7>
            </div>
          </div>
        </el-col>
        <el-col :lg="12" :md="12" :sm="24">
          <div class="buttonsGrid">
            <div class="buttonsHeader">
              <h4 class="buttonsTitle">
                不同尺寸
              </h4>
            </div>
            <div class="buttonsContent">
              <buttons8></buttons8>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import buttons1 from './buttons/buttons-1';
import buttons2 from './buttons/buttons-2';
import buttons3 from './buttons/buttons-3';
import buttons4 from './buttons/buttons-4';
import buttons5 from './buttons/buttons-5';
import buttons6 from './buttons/buttons-6';
import buttons7 from './buttons/buttons-7';
import buttons8 from './buttons/buttons-8';

export default {
  components: {
    buttons1,
    buttons2,
    buttons3,
    buttons4,
    buttons5,
    buttons6,
    buttons7,
    buttons8
  }
}
</script>

<style lang="scss">
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.buttonsGrid{
  color: #fff;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .buttonsHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.buttonsTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #00abff;
    text-align: left;
  }

  .buttonsContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
