<template lang="html">
  <div class="navmenuPanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="navmenuGrid">
          <div class="navmenuHeader">
            <h4 class="navmenuTitle">
              顶栏
            </h4>
          </div>
          <div class="navmenuContent">
            <navmenu1></navmenu1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="navmenuGrid">
          <div class="navmenuHeader">
            <h4 class="navmenuTitle">
              侧栏
            </h4>
          </div>
          <div class="navmenuContent">
            <navmenu2></navmenu2>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navmenu1 from './navmenu/navmenu-1';
import navmenu2 from './navmenu/navmenu-2';

export default {
  components: {
    navmenu1,
    navmenu2
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.navmenuGrid{
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

  .navmenuHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.navmenuTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .navmenuContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
