<template lang="html">
  <div class="dropdownPanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="dropdownGrid">
          <div class="dropdownHeader">
            <h4 class="dropdownTitle">
              基本用法
            </h4>
          </div>
          <div class="dropdownContent">
            <dropdown1></dropdown1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="dropdownGrid">
          <div class="dropdownHeader">
            <h4 class="dropdownTitle">
              触发对象
            </h4>
          </div>
          <div class="dropdownContent">
            <dropdown2></dropdown2>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="dropdownGrid">
          <div class="dropdownHeader">
            <h4 class="dropdownTitle">
              触发方式
            </h4>
          </div>
          <div class="dropdownContent">
            <dropdown3></dropdown3>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="dropdownGrid">
          <div class="dropdownHeader">
            <h4 class="dropdownTitle">
              菜单隐藏方式
            </h4>
          </div>
          <div class="dropdownContent">
            <dropdown4></dropdown4>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="dropdownGrid">
          <div class="dropdownHeader">
            <h4 class="dropdownTitle">
              指令事件
            </h4>
          </div>
          <div class="dropdownContent">
            <dropdown5></dropdown5>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dropdown1 from './dropdown/dropdown-1';
import dropdown2 from './dropdown/dropdown-2';
import dropdown3 from './dropdown/dropdown-3';
import dropdown4 from './dropdown/dropdown-4';
import dropdown5 from './dropdown/dropdown-5';

export default {
  components: {
    dropdown1,
    dropdown2,
    dropdown3,
    dropdown4,
    dropdown5
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.dropdownGrid{
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

  .dropdownHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.dropdownTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .dropdownContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
