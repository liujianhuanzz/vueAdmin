<template lang="html">
  <div class="notificationPanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="notificationGrid">
          <div class="notificationHeader">
            <h4 class="notificationTitle">
              基本用法
            </h4>
          </div>
          <div class="notificationContent">
            <notification1></notification1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12">
        <div class="notificationGrid">
          <div class="notificationHeader">
            <h4 class="notificationTitle">
              带有倾向性
            </h4>
          </div>
          <div class="notificationContent">
            <notification2></notification2>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="12">
        <div class="notificationGrid">
          <div class="notificationHeader">
            <h4 class="notificationTitle">
              带有偏移量
            </h4>
          </div>
          <div class="notificationContent">
            <notification3></notification3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import notification1 from './notification/notification-1';
import notification2 from './notification/notification-2';
import notification3 from './notification/notification-3';

export default {
  components: {
    notification1,
    notification2,
    notification3
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.notificationGrid{
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

  .notificationHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.notificationTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .notificationContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
