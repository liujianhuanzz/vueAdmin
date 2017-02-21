<template lang="html">
  <div class="index-1">
    <chart :options="options"></chart>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'index-1',
  data: function (){
    let {category, barData, lineData} = this._generateData();

    return {
      timer: null,
      options: {
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
        }, {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                            {offset: 1, color: 'rgba(20,200,212,0)'}
                        ]
                    )
                }
            },
            z: -12,
            data: lineData
        }, {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
        }]
      }
    }
  },
  methods: {
    _generateData(){
      var category = [];
      var dottedBase = +new Date();
      var lineData = [];
      var barData = [];

      for (var i = 0; i < 20; i++) {
          var date = new Date(dottedBase + 3600 * 24);
          category.push([
              date.getFullYear(),
              date.getMonth() + 1,
              date.getDate()
          ].join('-'));
          var b = Math.random() * 200;
          var d = Math.random() * 200;
          barData.push(b)
          lineData.push(d + b);
      }

      return {
        category: category,
        barData: barData,
        lineData: lineData
      }
    }
  },
  mounted(){
    let self = this;
    this.timer = setInterval(()=>{
      let {category, barData, lineData} = this._generateData();
      self.options['xAxis'].data = category;
      self.options['series'][0].data = lineData;
      self.options['series'][1].data = barData;
      self.options['series'][2].data = lineData;
      self.options['series'][3].data = lineData;
    },2000)
  },
  beforeDestroy(){
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss">
.index-1{
  width: 100%;
  height: 100%;
}
</style>
