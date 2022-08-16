<template>
  <div class="c-wrapper c-wrapper-img" id="ckmap" :style="{
    'transform': `scale(${ratio})`,
    'transformOrigin': 'left top',
    'marginLeft': mLeft + 'px',
    'marginTop': mTop + 'px'
  }">
    <!--看板头部-->
    <div class="c-header c-header-center c-header-center1">
      <div class="c-header-title">
        <div class="c-logo"><img :src="logo_blue" /></div>
        <div class="c-title c-color">
          <h2>图表</h2>
        </div>
      </div>
    </div>
    <!--区块-->
    <!--地图-->
    <div class="c-content">
      <div class="c-pos" style="left: 32px; top: 90px; width: 420px">
        <div class="c-panel c-panel-style">
          <div class="c-panel-header">
            <div class="c-panel-title">今日预约情况</div>
          </div>
          <div class="c-panel-body">
            <ul class="c-statistics c-average-2 c-text-center">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">预约总量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">1522.36</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">预约人次（次）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="c-panel c-panel-style">
          <div class="c-panel-header">
            <div class="c-panel-title">今日预检作业情况</div>
          </div>
          <div class="c-panel-body">
            <ul class="c-statistics c-average-3 c-text-center">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">预检总量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">1522.36</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">作业预检员</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">人均预检量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="c-panel c-panel-style">
          <div class="c-panel-header">
            <div class="c-panel-title">今日分级作业情况</div>
          </div>
          <div class="c-panel-body">
            <ul class="c-statistics c-average-3 c-text-center">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">分级总量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">1522.36</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">作业分级员</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">人均分级量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="c-panel c-panel-style">
          <div class="c-panel-header">
            <div class="c-panel-title">今日定级过磅作业情况</div>
          </div>
          <div class="c-panel-body">
            <ul class="c-statistics c-average-3 c-text-center">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">定级过磅总量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">1522.36</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">作业定级过磅员</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">人均定级过磅量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="c-panel c-panel-style">
          <div class="c-panel-header">
            <div class="c-panel-title">今日成包作业情况</div>
          </div>
          <div class="c-panel-body">
            <ul class="c-statistics c-average-3 c-text-center">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">成包总量（包）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">1522.36</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">作业成包员</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">今日成包重量（公斤）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="c-panel c-panel-style">
          <div class="c-panel-header">
            <div class="c-panel-title">今日出库作业情况</div>
          </div>
          <div class="c-panel-body">
            <ul class="c-statistics c-average-3 c-text-center">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">烟站出库（担）</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">1522.36</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">烟站出库单</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">出库站点数</div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-primary">542</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--区块-->
      <div class="c-pos" style="left: 472px; top: 90px; width: 1418px">
        <div class="c-row c-gutter">
          <div class="c-col-12">
            <div class="c-col-content">
              <div class="c-red-bg">
                <div class="c-panel-style">
                  <div class="c-panel-title">今日预约情况</div>
                  <ul class="c-statistics c-average-4 c-text-center c-h-auto">
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-01"></span>
                          今日收购量(担)
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-02"></span>
                          占计划占比
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-03"></span>
                          收购总金额(万元)
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-04"></span>
                          今日上等烟比例
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-05"></span>
                          最早开磅时间
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-06"></span>
                          当前开磅站点
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-07"></span>
                          今日交售烟农
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="c-statistics-item">
                        <div class="c-statistics-title">
                          <span class="c-icon c-icon-08"></span>
                          收购均价(元/公斤)
                        </div>
                        <div class="c-statistics-desc">
                          <strong class="c-statistics-number c-color-warning">1522.36</strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="c-panel-title">今日单位收购重量情况</div>
                  <div id="chartBarMulti" style="height: 180px"></div>

                  <div class="c-panel-title">今日小等级收购重量情况</div>
                  <div id="div_jzxdj" style="height: 180px"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-col-12">
            <div class="c-col-content">
              <div class="c-panel c-panel-style">
                <div class="c-panel-header">
                  <div class="c-panel-title">彭水县-润溪站-润溪点监控数据</div>
                </div>
                <div class="c-panel-body h-pad20">
                  <ul class="c-average-2">
                    <li>
                      <div class="c-div-video">
                        <div class="c-video">
                          <div class="c-video-no">暂无视频数据</div>
                        </div>
                        <div class="c-video-title">过磅</div>
                      </div>
                    </li>
                    <li>
                      <div class="c-div-video">
                        <div class="c-video">
                          <div class="c-video-no">暂无视频数据</div>
                        </div>
                        <div class="c-video-title">过磅</div>
                      </div>
                    </li>
                    <li>
                      <div class="c-div-video">
                        <div class="c-video">
                          <div class="c-video-no">暂无视频数据</div>
                        </div>
                        <div class="c-video-title">过磅</div>
                      </div>
                    </li>
                    <li>
                      <div class="c-div-video">
                        <div class="c-video">
                          <div class="c-video-no">暂无视频数据</div>
                        </div>
                        <div class="c-video-title">过磅</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-red-bg" style="margin-top: 20px">
          <div class="c-panel-style">
            <div class="c-panel-title">累收烟叶情况</div>
            <ul class="c-statistics c-average-6 c-text-center c-h-auto">
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">
                    <span class="c-icon c-icon-09"></span>
                    计划收购量(万担)
                  </div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-warning">1522.36</strong>
                  </div>
                  <div class="c-statistics-trend">
                    同比去年<span class="c-color-warning"><i class="c-icon-arrow-up"></i>50%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">
                    <span class="c-icon c-icon-10"></span>
                    实际收购量(万担)
                  </div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-warning">1522.36</strong>
                  </div>
                  <div class="c-statistics-trend">
                    同比去年<span class="c-color-warning"><i class="c-icon-arrow-up"></i>50%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">
                    <span class="c-icon c-icon-11"></span>
                    收购进度
                  </div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-warning">1522.36</strong>
                  </div>
                  <div class="c-statistics-trend">
                    同比去年<span class="c-color-primary"><i class="c-icon-arrow-down"></i>50%</span>
                  </div>
                </div>
              </li>

              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">
                    <span class="c-icon c-icon-12"></span>
                    收购均价(公斤/元)
                  </div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-warning">1522.36</strong>
                  </div>
                  <div class="c-statistics-trend">
                    同比去年<span class="c-color-primary"><i class="c-icon-arrow-down"></i>50%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">
                    <span class="c-icon c-icon-13"></span>
                    总量上等烟比例
                  </div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-warning">1522.36</strong>
                  </div>
                  <div class="c-statistics-trend">
                    同比去年<span class="c-color-primary"><i class="c-icon-arrow-down"></i>50%</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="c-statistics-item">
                  <div class="c-statistics-title">
                    <span class="c-icon c-icon-13"></span>
                    总量中等烟比例
                  </div>
                  <div class="c-statistics-desc">
                    <strong class="c-statistics-number c-color-warning">1522.36</strong>
                  </div>
                  <div class="c-statistics-trend">
                    同比去年<span class="c-color-warning"><i class="c-icon-arrow-up"></i>50%</span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="c-row c-gutter">
              <div class="c-col-10">
                <div class="c-col-content">
                  <div class="c-row c-gutter">
                    <div class="c-col-12">
                      <div class="c-col-content">
                        <div class="c-panel-style">
                          <div class="c-panel-title">烟叶收购结构分析</div>
                          <div id="yysg01" style="height: 180px"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-col-12">
                      <div class="c-col-content">
                        <div class="c-panel-style">
                          <div class="c-panel-title">烟叶等级收购分析</div>
                          <div id="yysg02" style="height: 180px"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-col-14">
                <div class="c-col-content">
                  <div class="c-row c-gutter">
                    <div class="c-col-12">
                      <div class="c-col-content">
                        <div class="c-panel-style">
                          <div class="c-panel-title">累收情况分析</div>
                          <div id="div_lsqkfx" style="height: 180px"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-col-12">
                      <div class="c-col-content">
                        <div class="c-panel-style">
                          <div class="c-panel-title">烟叶小等级收购排名</div>
                          <div id="div_yyxdjsg" style="height: 180px"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import axios from "axios";
import "/src/style/css/global.css";
import "/src/style/css/icon.css";
import logo from "/src/style/images/logo-blue.png";
export default {
  name: "kan-tu",
  data() {
    return {
      timer: null,
      ratio: 1,
      mLeft: 0,
      mTop: 0,
      data: {}, // 全部数据
      logo_blue: logo,
      loading: false,
    };
  },
  mounted() {
    this.init();
    this.barA();
    this.barB();
    this.barC();
    this.barD();
    this.barE();
    this.barF();
  },
  destroyed() {
    window.onresize = null;
    this.timer = null;
  },
  watch: {
    ratio: function (newV, oldV) {
      this.ratio = newV;
    },
    mLeft: function (newV, oldV) {
      this.mLeft = newV;
    },
    mTop: function (newV, oldV) {
      this.mTop = newV;
    },
  },
  methods: {
    init: function () {
      var r = document.querySelector('#ckmap');
      var _this = this;
      window.onresize = () => {
        if (_this.timer) clearTimeout(_this.timer)
        _this.timer = setTimeout(function () {
          var ratio;
          var winW = window.innerWidth;
          var winH = window.innerHeight;
          var eW = r.offsetWidth
          var eH = r.offsetHeight
          var ratioW = winW / 1920;
          var ratioH = winH / 1080;
          // 取小的缩小比例
          if (ratioW > ratioH) {
            ratio = ratioH;
          } else {
            ratio = ratioW;
          }
          _this.ratio = ratio;
          // （窗口的宽度-缩小的宽度）/2
          _this.mLeft = (winW - eW * ratio) / 2;
          _this.mTop = (winH - eH * ratio) / 2
        }, 100)
      }
    },
    postData: function (url, params) {
      return new Promise((resolve, reject) => {
        const _this = this;
        this.loading = true;
        axios
          .post(url, params)
          .then(function (response) {
            _this.loading = false;
            const res = response.data;
            if (res.code == "200") {
              resolve(res.data || {});
            }
          })
          .catch(function (error) {
            _this.loading = false;
            reject(error);
          });
      });
    },

    // 今日单位收购重量情况
    barA: function () {
      // 基于准备好的dom，初始化echarts实例

      var myChartBarMulti = echarts.init(
        document.getElementById("chartBarMulti"),
        "default"
      );

      // 指定图表的配置项和数据
      var optionBarMulti = {
        title: {
          text: "",
          subtext: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}<br/>{a0}:{c0}万担<br>{a1}:{c1}万担",
        },
        grid: {
          left: "10",
          right: "10",
          bottom: "10",
          top: "40",
          containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
        },

        legend: {
          show: false,
          data: ["收购量"],
          orient: "horizontal", // 'vertical'
          x: "right", // 'center' | 'left' | {number},
          y: "top", // 'center' | 'bottom' | {number}
          itemWidth: 20,
          itemHeight: 10,
        },

        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
              interval: "auto", //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              show: true, //是否显示
              interval: "auto", //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
              inside: false, //刻度标签是否朝内，默认朝外
              rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
              margin: 8, //刻度标签与轴线之间的距离
              formatter: function (value, index) {
                //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value;
              },
              showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
              showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
              textStyle: {
                color: "#999", //文字颜色
                // fontStyle:"normal",         //italic斜体  oblique倾斜
                // fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                // fontFamily:"sans-serif",    //字体系列
                fontSize: 12, //字体大小
              },
            },
            data: ["保家", "龙射", "桑柘", "小厂", "鹿角", "润溪"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            splitArea: {
              //坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: false, //是否显示分隔区域
            },
            name: "单位：担",
          },
        ],
        series: [
          {
            name: "收购量",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              //柱形图圆角，鼠标移上去效果
              emphasis: {
                barBorderRadius: [0, 0, 0, 0],
              },

              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,40,102,0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#00bad6", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 0, 0],
              },
            },
            data: [150, 232, 201, 154, 190, 225],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChartBarMulti.setOption(optionBarMulti);
    },

    // 今日小等级收购重量情况
    barB: function () {
      // 基于准备好的dom，初始化echarts实例
      var myChartBarMulti = echarts.init(
        document.getElementById("div_jzxdj"),
        "default"
      );
      // 指定图表的配置项和数据
      var optionBarMulti = {
        title: {
          text: "",
          subtext: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}<br/>{a0}:{c0}万担<br>{a1}:{c1}万担",
        },
        grid: {
          left: "10",
          right: "10",
          bottom: "10",
          top: "40",
          containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
        },

        legend: {
          show: false,
          data: ["收购量"],
          orient: "horizontal", // 'vertical'
          x: "right", // 'center' | 'left' | {number},
          y: "top", // 'center' | 'bottom' | {number}
          itemWidth: 20,
          itemHeight: 10,
        },

        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
              interval: "auto", //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              show: true, //是否显示
              interval: "auto", //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
              inside: false, //刻度标签是否朝内，默认朝外
              rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
              margin: 8, //刻度标签与轴线之间的距离
              formatter: function (value, index) {
                //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value;
              },
              showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
              showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
              textStyle: {
                color: "#999", //文字颜色
                // fontStyle:"normal",         //italic斜体  oblique倾斜
                // fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                // fontFamily:"sans-serif",    //字体系列
                fontSize: 12, //字体大小
              },
            },
            data: [
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            splitArea: {
              //坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: false, //是否显示分隔区域
            },
            name: "单位：担",
          },
        ],
        series: [
          {
            name: "收购量",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              //柱形图圆角，鼠标移上去效果
              emphasis: {
                barBorderRadius: [0, 0, 0, 0],
              },

              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(213,117,53,0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#d57535", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 0, 0],
              },
            },
            data: [
              150, 232, 201, 154, 190, 225, 165, 248, 156, 246, 223, 241,
            ],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChartBarMulti.setOption(optionBarMulti);
    },

    // 烟叶收购结构分析
    barC: function () {
      let datas = [
        {
          value: 1200,
          name: "上部烟",
          percent: "40.2",
        },
        {
          value: 310,
          name: "中部烟",
          percent: "40.2",
        },
        {
          value: 310,
          name: "下部烟",
          percent: "30.2",
        },
      ];

      let colors = ["#d57535", "#22518d", "#66d1e1"];
      let legendData = [];
      for (var j = 0; j < datas.length; j++) {
        var data = {
          name: datas[j].name,
          icon: "circle",
          textStyle: {
            fontSize: 16,
            //color: colors[j]
          },
        };
        legendData.push(data);
      }
      let objData = array2obj(datas, "name");

      // 基于准备好的dom，初始化echarts实例
      var mychartPieRich = echarts.init(
        document.getElementById("yysg01"),
        "default"
      );
      var optionPieRich = {
        color: ["#d57535", "#66d1e1", "#22518d"],
        title: {
          text: "部位结构",
          //subtext: '2020年',
          textAlign: "center",
          x: "23%",
          y: "center",
          textStyle: {
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: 12,
          },
          subtextStyle: {
            fontSize: 14,
            lineHeight: 18,
          },
        },
        legend: {
          orient: "vertical",
          top: "center",
          right: "0",
          itemGap: 8,
          data: legendData,
          formatter: function (name) {
            return `{title|${name}}{value|${objData[name].value}}{unit|(万担)}`;
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
              value: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
              unit: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
              percent: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
            },
          },
        },
        label: {
          //formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          formatter: " {b|{b}}\n{d|{d}%}",
          backgroundColor: "",
          borderColor: "",
          borderWidth: 1,
          borderRadius: 4,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            b: {
              fontSize: 12,
              align: "left",
            },
            d: {
              fontSize: 15,
              lineHeight: 24,
              align: "right",
            },
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "占比",
            type: "pie",
            radius: ["40%", "65%"],
            center: ["25%", "center"],
            data: datas,
            roseType: "",
            label: {
              normal: {
                show: false,
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                },
              },
            },
            labelLine: {
              lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
      /**
       * @introduction 把数组中key值相同的那一项提取出来，组成一个对象
       * @description 详细描述
       * @param {参数类型} array 传入的数组 [{a:"1",b:"2"},{a:"2",b:"3"}]
       * @param {参数类型} key  属性名 a
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }
      if (optionPieRich && typeof optionPieRich === "object") {
        mychartPieRich.setOption(optionPieRich, true);
      }
 
    },

    // 烟叶等级收购分析
    barD: function () {
      let datass = [
        {
          value: 1200,
          name: "上等烟",
          percent: "40.2",
        },
        {
          value: 310,
          name: "中等烟",
          percent: "40.2",
        },
        {
          value: 310,
          name: "下等烟",
          percent: "30.2",
        },
      ];

      let colorss = ["#d57535", "#22518d", "#66d1e1"];
      let legendDatas = [];
      for (var j = 0; j < datass.length; j++) {
        var data = {
          name: datass[j].name,
          icon: "circle",
          textStyle: {
            fontSize: 16,
            //color: colors[j]
          },
        };
        legendDatas.push(data);
      }
      let objDatas = array2obj(datass, "name");

      // 基于准备好的dom，初始化echarts实例
      var mychartPieRich = echarts.init(
        document.getElementById("yysg02"),
        "default"
      );
      var optionPieRich = {
        color: ["#d57535", "#66d1e1", "#22518d"],
        title: {
          text: "烟叶等级",
          //subtext: '2020年',
          textAlign: "center",
          x: "23%",
          y: "center",
          textStyle: {
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: 12,
          },
          subtextStyle: {
            fontSize: 14,
            lineHeight: 18,
          },
        },
        legend: {
          orient: "vertical",
          top: "center",
          right: "0",
          itemGap: 8,
          data: legendDatas,
          formatter: function (name) {
            return `{title|${name}}{value|${objDatas[name].value}}{unit|(万担)}`;
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
              value: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
              unit: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
              percent: {
                fontSize: 12,
                padding: [0, 5, 0, 0],
              },
            },
          },
        },
        label: {
          //formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          formatter: " {b|{b}}\n{d|{d}%}",
          backgroundColor: "",
          borderColor: "",
          borderWidth: 1,
          borderRadius: 4,
          // shadowBlur:3,
          // shadowOffsetX: 2,
          // shadowOffsetY: 2,
          // shadowColor: '#999',
          // padding: [0, 7],
          rich: {
            b: {
              fontSize: 12,
              align: "left",
            },
            d: {
              fontSize: 15,
              lineHeight: 24,
              align: "right",
            },
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "占比",
            type: "pie",
            radius: ["40%", "65%"],
            center: ["25%", "center"],
            data: datass,
            roseType: "",
            label: {
              normal: {
                show: false,
                position: "inner",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 12,
                },
              },
            },
            labelLine: {
              lineStyle: {
                color: "rgba(0, 0, 0, 0.1)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
      /**
       * @introduction 把数组中key值相同的那一项提取出来，组成一个对象
       * @description 详细描述
       * @param {参数类型} array 传入的数组 [{a:"1",b:"2"},{a:"2",b:"3"}]
       * @param {参数类型} key  属性名 a
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }
      if (optionPieRich && typeof optionPieRich === "object") {
        mychartPieRich.setOption(optionPieRich, true);
      }
  
    },

    // 累收情况分析
    barE: function () {
      // 基于准备好的dom，初始化echarts实例
      var myChartBarMulti = echarts.init(
        document.getElementById("div_lsqkfx"),
        "default"
      );
      // 指定图表的配置项和数据
      var optionBarMulti = {
        title: {
          text: "",
          subtext: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}<br/>{a0}:{c0}万担<br>{a1}:{c1}%",
        },
        grid: {
          left: "10",
          right: "10",
          bottom: "10",
          top: "40",
          containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
        },

        legend: {
          show: false,
          data: ["收购量"],
          orient: "horizontal", // 'vertical'
          x: "right", // 'center' | 'left' | {number},
          y: "top", // 'center' | 'bottom' | {number}
          itemWidth: 20,
          itemHeight: 10,
        },

        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
              interval: "auto", //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              show: true, //是否显示
              interval: "auto", //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
              inside: false, //刻度标签是否朝内，默认朝外
              rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
              margin: 8, //刻度标签与轴线之间的距离
              formatter: function (value, index) {
                //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value;
              },
              showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
              showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
              textStyle: {
                color: "#999", //文字颜色
                // fontStyle:"normal",         //italic斜体  oblique倾斜
                // fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                // fontFamily:"sans-serif",    //字体系列
                fontSize: 12, //字体大小
              },
            },
            data: ["保家", "龙射", "桑柘", "小厂", "鹿角", "润溪"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            splitArea: {
              //坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: false, //是否显示分隔区域
            },
            name: "单位：担",
          },
          {
            type: "value",
            name: "比例",
            axisLabel: {
              formatter: "{value}%",
            },
            splitArea: {
              //坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: false, //是否显示分隔区域
            },
            splitLine: {
              //网格线
              show: false,
            },
          },
        ],
        series: [
          {
            name: "收购量",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              //柱形图圆角，鼠标移上去效果
              emphasis: {
                barBorderRadius: [0, 0, 0, 0],
              },

              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,40,102,0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#00bad6", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 0, 0],
              },
            },
            data: [150, 232, 201, 154, 190, 225],
          },
          {
            name: "完成进度",
            type: "line",
            yAxisIndex: 1,

            data: [23, 22, 21, 14, 10, 25],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChartBarMulti.setOption(optionBarMulti);
    },

    // 烟叶小等级收购排名
    barF: function () {
      // 基于准备好的dom，初始化echarts实例
      var myChartBarMulti = echarts.init(
        document.getElementById("div_yyxdjsg"),
        "default"
      );
      // 指定图表的配置项和数据
      var optionBarMulti = {
        title: {
          text: "",
          subtext: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}<br/>{a0}:{c0}万担<br>{a1}:{c1}%",
        },
        grid: {
          left: "10",
          right: "10",
          bottom: "10",
          top: "40",
          containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
        },

        legend: {
          show: false,
          data: ["收购量"],
          orient: "horizontal", // 'vertical'
          x: "right", // 'center' | 'left' | {number},
          y: "top", // 'center' | 'bottom' | {number}
          itemWidth: 20,
          itemHeight: 10,
        },

        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
              interval: "auto", //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              show: true, //是否显示
              interval: "auto", //坐标轴刻度标签的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
              inside: false, //刻度标签是否朝内，默认朝外
              rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度
              margin: 8, //刻度标签与轴线之间的距离
              formatter: function (value, index) {
                //使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
                return value;
              },
              showMinLabel: null, //是否显示最小 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）
              showMaxLabel: null, //是否显示最大 tick 的 label。可取值 true, false, null。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）
              textStyle: {
                color: "#999", //文字颜色
                // fontStyle:"normal",         //italic斜体  oblique倾斜
                // fontWeight:"normal",        //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                // fontFamily:"sans-serif",    //字体系列
                fontSize: 12, //字体大小
              },
            },
            data: [
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
              "C1F",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            splitArea: {
              //坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: false, //是否显示分隔区域
            },
            name: "单位：担",
          },
          {
            type: "value",
            name: "比例",
            axisLabel: {
              formatter: "{value}%",
            },
            splitArea: {
              //坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: false, //是否显示分隔区域
            },
            splitLine: {
              //网格线
              show: false,
            },
          },
        ],
        series: [
          {
            name: "收购量",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              //柱形图圆角，鼠标移上去效果
              emphasis: {
                barBorderRadius: [0, 0, 0, 0],
              },

              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,40,102,0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#d57535", // 100% 处的颜色
                    },
                  ],
                  false
                ),
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 0, 0],
              },
            },
            data: [
              150, 232, 201, 154, 190, 225, 248, 263, 325, 214, 263, 254,
            ],
          },
          {
            name: "完成进度",
            type: "line",
            yAxisIndex: 1,

            data: [23, 22, 21, 14, 10, 25, 24, 16, 26, 25, 21, 14],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChartBarMulti.setOption(optionBarMulti);
    },
  },
};
</script>
