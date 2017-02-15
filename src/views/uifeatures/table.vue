<template lang="html">
  <div class="tablePanel">
    <el-row :gutter="20">
      <el-col :lg="24" :md="24" :sm="24">
        <div class="tableGrid">
          <div class="tableHeader">
            <h4 class="tableTitle">
              基础表格
            </h4>
          </div>
          <div class="tableContent">
            <table1></table1>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :lg="24" :md="24" :sm="24">
        <div class="tableGrid">
          <div class="tableHeader">
            <h4 class="tableTitle">
              带斑马纹表格
            </h4>
          </div>
          <div class="tableContent">
            <table2></table2>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import table1 from './table/table-1';
import table2 from './table/table-2';

export default {
  components: {
    table1,
    table2
  }
}
</script>

<style lang="scss">
.tableGrid{
  color: #fff;
  /* height: 300px; */
  background-color: rgba(255, 255, 255, 0.8);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  text-align: left !important;

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .tableHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.tableTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #00abff;
    text-align: left;
  }

  .tableContent{
    height: calc(100% - 44px);
    padding: 8px 0px;
  }
}
</style>
