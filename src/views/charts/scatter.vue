<template lang="html">
  <div class="scatterPanel">
    <el-row :gutter="20">
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              1990 与 2015 年各国家人均寿命与 GDP
            </h4>
          </div>
          <div class="scatterContent">
            <scatter1></scatter1>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              空气质量指数
            </h4>
          </div>
          <div class="scatterContent">
            <scatter2></scatter2>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              Anscombe's quartet
            </h4>
          </div>
          <div class="scatterContent">
            <scatter3></scatter3>
          </div>
        </div>
      </el-col>
      <!--<el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              正负条形图
            </h4>
          </div>
          <div class="scatterContent">
            <scatter4></scatter4>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              交错正负轴标签
            </h4>
          </div>
          <div class="scatterContent">
            <scatter5></scatter5>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              堆叠柱状图
            </h4>
          </div>
          <div class="scatterContent">
            <scatter6></scatter6>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              坐标轴刻度与标签对齐
            </h4>
          </div>
          <div class="scatterContent">
            <scatter7></scatter7>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              总体数值为部分数值之和
            </h4>
          </div>
          <div class="scatterContent">
            <scatter8></scatter8>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              阶梯瀑布图
            </h4>
          </div>
          <div class="scatterContent">
            <scatter9></scatter9>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              堆叠条形图
            </h4>
          </div>
          <div class="scatterContent">
            <scatter10></scatter10>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              条形图
            </h4>
          </div>
          <div class="scatterContent">
            <scatter11></scatter11>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              某地区降水量与蒸发量
            </h4>
          </div>
          <div class="scatterContent">
            <scatter12></scatter12>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              动态数据
            </h4>
          </div>
          <div class="scatterContent">
            <scatter13></scatter13>
          </div>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="scatterGrid">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              折柱混合
            </h4>
          </div>
          <div class="scatterContent">
            <scatter14></scatter14>
          </div>
        </div>
      </el-col>
      <el-col :lg="24">
        <div class="scatterGrid" style="height:650px;">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              全国宏观经济指标
            </h4>
          </div>
          <div class="scatterContent">
            <scatter15></scatter15>
          </div>
        </div>
      </el-col>
      <el-col :lg="24">
        <div class="scatterGrid" style="height:650px;">
          <div class="scatterHeader">
            <h4 class="scatterTitle">
              Echarts下载统计
            </h4>
          </div>
          <div class="scatterContent">
            <scatter16></scatter16>
          </div>
        </div>
      </el-col>-->
    </el-row>
  </div>
</template>

<script>
import scatter1 from './scatter/scatter-1';
import scatter2 from './scatter/scatter-2';
import scatter3 from './scatter/scatter-3';
/* import scatter4 from './scatter/scatter-4';
import scatter5 from './scatter/scatter-5';
import scatter6 from './scatter/scatter-6';
import scatter7 from './scatter/scatter-7';
import scatter8 from './scatter/scatter-8';
import scatter9 from './scatter/scatter-9';
import scatter10 from './scatter/scatter-10';
import scatter11 from './scatter/scatter-11';
import scatter12 from './scatter/scatter-12';
import scatter13 from './scatter/scatter-13';
import scatter14 from './scatter/scatter-14';
import scatter15 from './scatter/scatter-15';
import scatter16 from './scatter/scatter-16'; */

export default {
  components: {
    scatter1,
    scatter2,
    scatter3 /*,
    scatter4,
    scatter5,
    scatter6,
    scatter7,
    scatter8,
    scatter9,
    scatter10,
    scatter11,
    scatter12,
    scatter13,
    scatter14,
    scatter15,
    scatter16 */
  }
}
</script>

<style lang="scss">
.echarts{
  width: 100% !important;
  height: 100% !important;
}
.scatterGrid{
  color: #fff;
  height: 540px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  border-radius: 7px;
  position: relative;
  margin-bottom: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover{
    box-shadow: 0px 0px 10px #00abff;
  }

  .scatterHeader{
    font-size: 16px;
    background-color: transparent;
    padding: 14px 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 44px;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  h4.scatterTitle{
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 0.9;
    color: #fff;
    text-align: left;
  }

  .scatterContent{
    height: calc(100% - 44px);
  }
}
</style>
