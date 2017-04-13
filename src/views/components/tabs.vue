<template lang="html">
  <div class="tabsPanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="tabsGrid">
          <div class="tabsHeader">
            <h4 class="tabsTitle">
              基础用法
            </h4>
          </div>
          <div class="tabsContent">
            <tabs1></tabs1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="tabsGrid">
          <div class="tabsHeader">
            <h4 class="tabsTitle">
              选项卡样式
            </h4>
          </div>
          <div class="tabsContent">
            <tabs2></tabs2>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="tabsGrid">
          <div class="tabsHeader">
            <h4 class="tabsTitle">
              自定义标签页
            </h4>
          </div>
          <div class="tabsContent">
            <tabs3></tabs3>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="tabsGrid">
          <div class="tabsHeader">
            <h4 class="tabsTitle">
              动态增减标签页
            </h4>
          </div>
          <div class="tabsContent">
            <tabs4></tabs4>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="tabsGrid">
          <div class="tabsHeader">
            <h4 class="tabsTitle">
              自定义增加标签页触发器
            </h4>
          </div>
          <div class="tabsContent">
            <tabs5></tabs5>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="tabsGrid">
          <div class="tabsHeader">
            <h4 class="tabsTitle">
              卡片化
            </h4>
          </div>
          <div class="tabsContent">
            <tabs6></tabs6>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tabs1 from './tabs/tabs-1';
import tabs2 from './tabs/tabs-2';
import tabs3 from './tabs/tabs-3';
import tabs4 from './tabs/tabs-4';
import tabs5 from './tabs/tabs-5';
import tabs6 from './tabs/tabs-6';

export default {
  components: {
    tabs1,
    tabs2,
    tabs3,
    tabs4,
    tabs5,
    tabs6
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.tabsGrid{
  color: #00abff;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .tabsHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #00abff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.tabsTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #00abff;
    text-align: left;
  }

  .tabsContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
