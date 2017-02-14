<template lang="html">
  <div class="loadingPanel">
    <el-row :gutter="20">
      <el-col :lg="24" :md="24" :sm="24">
        <div class="loadingGrid">
          <div class="loadingHeader">
            <h4 class="loadingTitle">
              区域加载
            </h4>
          </div>
          <div class="loadingContent">
            <loading1></loading1>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="24" :md="24" :sm="24">
        <div class="loadingGrid">
          <div class="loadingHeader">
            <h4 class="loadingTitle">
              文案加载
            </h4>
          </div>
          <div class="loadingContent">
            <loading2></loading2>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="24" :md="24" :sm="24">
        <div class="loadingGrid">
          <div class="loadingHeader">
            <h4 class="loadingTitle">
              整页加载
            </h4>
          </div>
          <div class="loadingContent">
            <loading3></loading3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import loading1 from './loading/loading-1';
import loading2 from './loading/loading-2';
import loading3 from './loading/loading-3';

export default {
  components: {
    loading1,
    loading2,
    loading3
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.loadingGrid{
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

  .loadingHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.loadingTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .loadingContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
