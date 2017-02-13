<template lang="html">
  <div class="columnPanel">
    <el-row :gutter="20">
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              柱状图动画延迟
            </h4>
          </div>
          <div class="columnContent">
            <column1></column1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              柱状图框选
            </h4>
          </div>
          <div class="columnContent">
            <column2></column2>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              特性示例：渐变色 阴影 点击缩放
            </h4>
          </div>
          <div class="columnContent">
            <column3></column3>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              正负条形图
            </h4>
          </div>
          <div class="columnContent">
            <column4></column4>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              交错正负轴标签
            </h4>
          </div>
          <div class="columnContent">
            <column5></column5>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              堆叠柱状图
            </h4>
          </div>
          <div class="columnContent">
            <column6></column6>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              坐标轴刻度与标签对齐
            </h4>
          </div>
          <div class="columnContent">
            <column7></column7>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              总体数值为部分数值之和
            </h4>
          </div>
          <div class="columnContent">
            <column8></column8>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              阶梯瀑布图
            </h4>
          </div>
          <div class="columnContent">
            <column9></column9>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              堆叠条形图
            </h4>
          </div>
          <div class="columnContent">
            <column10></column10>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              条形图
            </h4>
          </div>
          <div class="columnContent">
            <column11></column11>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              某地区降水量与蒸发量
            </h4>
          </div>
          <div class="columnContent">
            <column12></column12>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              动态数据
            </h4>
          </div>
          <div class="columnContent">
            <column13></column13>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="columnGrid">
          <div class="columnHeader">
            <h4 class="columnTitle">
              折柱混合
            </h4>
          </div>
          <div class="columnContent">
            <column14></column14>
          </div>
        </div>
      </el-col>
      <el-col :lg="24">
        <div class="columnGrid" style="height:650px;">
          <div class="columnHeader">
            <h4 class="columnTitle">
              全国宏观经济指标
            </h4>
          </div>
          <div class="columnContent">
            <column15></column15>
          </div>
        </div>
      </el-col>
      <el-col :lg="24">
        <div class="columnGrid" style="height:650px;">
          <div class="columnHeader">
            <h4 class="columnTitle">
              Echarts下载统计
            </h4>
          </div>
          <div class="columnContent">
            <column16></column16>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import column1 from './column/column-1';
import column2 from './column/column-2';
import column3 from './column/column-3';
import column4 from './column/column-4';
import column5 from './column/column-5';
import column6 from './column/column-6';
import column7 from './column/column-7';
import column8 from './column/column-8';
import column9 from './column/column-9';
import column10 from './column/column-10';
import column11 from './column/column-11';
import column12 from './column/column-12';
import column13 from './column/column-13';
import column14 from './column/column-14';
import column15 from './column/column-15';
import column16 from './column/column-16';

export default {
  components: {
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8,
    column9,
    column10,
    column11,
    column12,
    column13,
    column14,
    column15,
    column16
  }
}
</script>

<style lang="scss">
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.columnGrid{
  color: #fff;
  height: 360px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .columnHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.columnTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .columnContent{
    height: calc(100% - 44px);
  }
}
</style>
