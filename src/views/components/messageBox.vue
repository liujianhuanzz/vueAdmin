<template lang="html">
  <div class="messageBoxPanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageBoxGrid">
          <div class="messageBoxHeader">
            <h4 class="messageBoxTitle">
              消息提示
            </h4>
          </div>
          <div class="messageBoxContent">
            <messageBox1></messageBox1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageBoxGrid">
          <div class="messageBoxHeader">
            <h4 class="messageBoxTitle">
              确认消息
            </h4>
          </div>
          <div class="messageBoxContent">
            <messageBox2></messageBox2>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageBoxGrid">
          <div class="messageBoxHeader">
            <h4 class="messageBoxTitle">
              提交内容
            </h4>
          </div>
          <div class="messageBoxContent">
            <messageBox3></messageBox3>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageBoxGrid">
          <div class="messageBoxHeader">
            <h4 class="messageBoxTitle">
              自定义
            </h4>
          </div>
          <div class="messageBoxContent">
            <messageBox4></messageBox4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import messageBox1 from './messageBox/messageBox-1';
import messageBox2 from './messageBox/messageBox-2';
import messageBox3 from './messageBox/messageBox-3';
import messageBox4 from './messageBox/messageBox-4';

export default {
  components: {
    messageBox1,
    messageBox2,
    messageBox3,
    messageBox4
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.messageBoxGrid{
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

  .messageBoxHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.messageBoxTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .messageBoxContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
