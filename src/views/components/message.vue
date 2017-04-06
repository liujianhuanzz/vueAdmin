<template lang="html">
  <div class="messagePanel">
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageGrid">
          <div class="messageHeader">
            <h4 class="messageTitle">
              基本用法
            </h4>
          </div>
          <div class="messageContent">
            <message1></message1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageGrid">
          <div class="messageHeader">
            <h4 class="messageTitle">
              不同状态的Message
            </h4>
          </div>
          <div class="messageContent">
            <message2></message2>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="12" :md="12" :sm="24">
        <div class="messageGrid">
          <div class="messageHeader">
            <h4 class="messageTitle">
              可关闭的Message
            </h4>
          </div>
          <div class="messageContent">
            <message3></message3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import message1 from './message/message-1';
import message2 from './message/message-2';
import message3 from './message/message-3';

export default {
  components: {
    message1,
    message2,
    message3
  }
}
</script>

<style lang="scss" scoped>
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.messageGrid{
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

  .messageHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.messageTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .messageContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
