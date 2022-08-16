
<template>
	<div class="c-wrapper c-wrapper-img" id="ckmap" :style="{
		'transform': `scale(${ratio})`,
		'transformOrigin': 'left top',
		'marginLeft': mLeft + 'px',
		'marginTop': mTop + 'px'
	}">
		<div class="loading" v-if="loading">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<!--看板头部-->
		<div class="c-header c-header-center c-header-center1">
			<div class="c-header-title">
				<div class="c-logo"><img :src="logo_blue" /></div>
				<div class="c-title c-color">
					<h2>中心库信息</h2>
				</div>
			</div>
		</div>
		<!--区块-->
		<!--地图-->
		<div class="c-content">
			<div class="c-pos" style="left: 32px; top: 90px; width: 620px">
				<div class="c-panel c-panel-style2 c-panel-nobg">
					<div class="c-panel-body">
						<ul class="c-statistics c-average-3 c-text-center c-h-auto">
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-001"></span>
										总库容量(担)
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{ data.totalInventory || 0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-004"></span>
										当前库存(担)
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{ data.currentInventory ||
												0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-002"></span>
										上等烟比例
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{ data.proportionFineSmoke
												|| 0
										}}</strong>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="c-panel c-panel-style2 c-panel-item-nobg">
					<div class="c-panel-header">
						<div class="c-panel-title">今日仓库作业分析</div>
					</div>
					<div class="c-panel-body">
						<ul class="c-statistics c-average-4 c-text-center c-h-auto">
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-019"></span>
										作业搬运组
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												warehouseOperationAnalysis.jobHandlingGroup || 0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-008"></span>
										作业仓管人员
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												warehouseOperationAnalysis.operationWarehouseManagementPersonnel || 0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-016"></span>
										移垛次数
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												warehouseOperationAnalysis.movecrib || 0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-015"></span>
										翻垛次数
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												warehouseOperationAnalysis.turnCrib || 0
										}}</strong>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="c-panel c-panel-style2 c-panel-item-nobg">
					<div class="c-panel-header">
						<div class="c-panel-title">今日入库质检作业分析</div>
					</div>
					<div class="c-panel-body">
						<ul class="c-statistics c-average-3 c-text-center c-h-auto">
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-018"></span>
										作业质检组
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												data.operationQualityInspectionSection || 0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-010"></span>
										质检入库（件）
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												data.numberIncomingQualityChecks || 0
										}}</strong>
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-003"></span>
										质检合格率
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												data.qualityInspectionPassRate || 0
										}}</strong>
									</div>
								</div>
							</li>
						</ul>
						<div id="div_jrrk" style="height: 300px; padding-top: 20px"></div>

						<div id="chartPieRich" style="height: 260px"></div>
					</div>
				</div>
			</div>
			<!--区块-->
			<div class="c-pos" style="left: 672px; top: 90px; width: 1218px">
				<div class="c-panel c-panel-style2 c-panel-nobg c-panel-item-nobg">
					<div class="c-panel-body">
						<ul class="c-statistics c-average-4 c-text-center c-h-auto">
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-014"></span>
										预计今日入库烟叶（担）
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												data.expectedTodayInTobaccoDTOS ? data.expectedTodayInTobaccoDTOS.num : 0
										}}</strong>
									</div>
									<div class="c-statistics-trend c-color-primary">
										预计入库：{{ data.expectedTodayInTobaccoDTOS ? data.expectedTodayInTobaccoDTOS.cars :
												0
										}}车
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-012"></span>
										入库中烟叶（担）
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{
												data.mediumLeafTobaccoInStorages ? data.mediumLeafTobaccoInStorages.num : 0
										}}</strong>
									</div>
									<div class="c-statistics-trend c-color-primary">
										入库中：{{ data.mediumLeafTobaccoInStorages ? data.mediumLeafTobaccoInStorages.cars
												: 0
										}}车
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-011"></span>
										今日已入库（担）
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{ data.inStorageToday ?
												data.inStorageToday : 0
										}}</strong>
									</div>
									<div class="c-statistics-trend c-color-primary">
										已入库：{{ data.inStorageTodayCars ? data.inStorageTodayCars : 0 }}车
									</div>
								</div>
							</li>
							<li>
								<div class="c-statistics-item">
									<div class="c-statistics-title">
										<span class="c-icon c-icon-013"></span>
										今日出库（担）
									</div>
									<div class="c-statistics-desc">
										<strong class="c-statistics-number c-color-warning">{{ data.outStorageToday || 0
										}}</strong>
									</div>
									<div class="c-statistics-trend">&nbsp;</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="c-row c-gutter">
					<div class="c-col-12">
						<div class="c-col-content">
							<div class="c-panel c-panel-style2">
								<div class="c-panel-header">
									<div class="c-panel-title">今日出库分析-工业</div>
								</div>
								<div class="c-panel-body">
									<div id="div_lsqkfx" style="height: 280px"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="c-col-12">
						<div class="c-col-content">
							<div class="c-panel c-panel-style2">
								<div class="c-panel-header">
									<div class="c-panel-title">今日出库分析-等级</div>
								</div>
								<div class="c-panel-body">
									<div id="div_yyxdjsg" style="height: 280px"></div>
								</div>
							</div>
						</div>
					</div>

					<div class="c-col-24">
						<div class="c-col-content">
							<div class="c-panel c-panel-style2" style="margin-top: 20px">
								<div class="c-panel-header">
									<div class="c-panel-title">库存烟叶等级分布</div>
								</div>
								<div class="c-panel-body">
									<div id="div_kcyydjfb" style="height: 435px"></div>
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
import  * as  echarts from 'echarts'
import axios from 'axios'
import '/src/style/css/global.css'
import '/src/style/css/icon.css'
import logo from '/src/style/images/logo-blue.png'
export default {
	name: 'kan-tu',
	data() {
		return {
			timer: null,
			ratio: 1,
			mLeft: 0,
			mTop: 0,
			data: {},// 全部数据
			warehouseOperationAnalysis: {},// 今日仓库作业分析 (暂时设计为0)
			accordingToTheDispatchingListDTOs: [],// 合格柱状图
			nonconformingQualityFactorsDTOS: [],// 不合格质量因素
			analysisIndustrialDTOS: [],// 今日出库分析-工业
			analysisLevel: [],// 今日出库分析-等级
			gradeDistributionStockTobaccoLeavesDTOS: [],// 库存烟叶等级分布
			loading: false,
			logo_blue: ""
		};
	},
	mounted() {
		this.logo_blue = logo;
		this.init();
		this.postData(
			"http://172.50.77.113:11080/dts/hsbi/service/q/centralWarehouseDatas/v1",
			{
				bizYear: "2022",
				orgCd: "500102",
				orgUniqueCd: "11420001000000000001",
			}
		).then((data) => {
			console.log(data);
			this.data = data;
			this.warehouseOperationAnalysis = data.warehouseOperationAnalysis;
			this.accordingToTheDispatchingListDTOs = data.accordingToTheDispatchingListDTOs;
			this.nonconformingQualityFactorsDTOS = data.nonconformingQualityFactorsDTOS;
			this.analysisIndustrialDTOS = data.analysisIndustrialDTOS;
			this.analysisLevel = data.analysisLevel;
			this.gradeDistributionStockTobaccoLeavesDTOS = data.gradeDistributionStockTobaccoLeavesDTOS;
			this.hegeBar();
			this.hegePie();
			this.industry();
			this.level();
			this.distribution();

		});
	},
	destroyed() {
		window.onresize = null;
		this.timer = null
	},
	watch: {
		'ratio': function (newV, oldV) {
			this.ratio = newV;
		},

		'mLeft': function (newV, oldV) {
			this.mLeft = newV;
		},
		'mTop': function (newV, oldV) {
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
		getData: function (url) {
			return new Promise((resolve, reject) => {
				const _this = this;
				this.loading = true;
				axios
					.get(url)
					.then(function (response) {
						_this.loading = false;
						const res = response.data;
						if (res.code == "200") {
							resolve(res.data);
						}
					})
					.catch(function (error) {
						_this.loading = false;
						reject(error);
					});
			});
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
		// 合格率柱状图
		hegeBar: function () {

			var mapData = (key) => {
				var list = this.accordingToTheDispatchingListDTOs;
				return Array.isArray(list) && list.map(item => (item[key])) || []
			};
			var passes = mapData('pass');
			var unPasses = mapData('unPass');
			var tranNos = mapData('tranNo');
			// 基于准备好的dom，初始化echarts实例
			var myChartBarMulti = echarts.init(
				document.getElementById("div_jrrk"),
				"default"
			);
			// 指定图表的配置项和数据
			var optionBarMulti = {
				color: ["#e36f1d"],
				title: {
					text: "",
					subtext: "",
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "shadow",
					},
					formatter: "{b}<br/>{a0}:{c0}%<br>{a1}:{c1}%",
				},
				grid: {
					left: "-20",
					right: "10",
					bottom: "10",
					top: "30",
					containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
				},

				legend: {
					data: ["合格", "不合格"],
					orient: "horizontal", // 'vertical'
					x: "20", // 'center' | 'left' | {number},
					y: "top", // 'center' | 'bottom' | {number}
					itemWidth: 10,
					itemHeight: 10,
				},

				xAxis: [
					{
						type: "category",
						data: tranNos,
					},
				],
				yAxis: [
					{
						show: false,
						type: "value",
						axisLabel: {
							formatter: "{value}担",
						},
						name: "单位：担",
					},
				],
				series: [
					{
						name: "合格",
						type: "bar",
						barWidth: "50%",
						stack: "Ad",
						label: {
							normal: {
								show: true,
								position: "inside",
							},
						},
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
											color: "#0f5092", // 0% 处的颜色
										},
										{
											offset: 1,
											color: "#2288c4", // 100% 处的颜色
										},
									],
									false
								),
								//柱形图圆角，初始化效果
								barBorderRadius: [0, 0, 0, 0],
							},
						},
						data: passes,
					},
					{
						name: "不合格",
						type: "bar",
						barWidth: "50%",
						stack: "Ad",
						label: {
							normal: {
								show: true,
								position: "insideTop",
							},
						},
						data: unPasses,
					},
				],
			};

			// 使用刚指定的配置项和数据显示图表。
			myChartBarMulti.setOption(optionBarMulti);
		},
		// 合格率饼状图
		hegePie: function () {
			var list = Array.isArray(this.nonconformingQualityFactorsDTOS) ? this.nonconformingQualityFactorsDTOS : [];
			var sum = list.reduce((prev, cur) => {
				return { num: prev.num + cur.num }
			}, { num: 0 })
			var datas = list.map(item => {
				return {
					value: item.num,
					name: item.qualityFactor,
					percent: (item.num / sum.num * 100).toFixed(4),
				}
			}) || []


			let colors = ["#6e7ce0", "#5fede1", "#388df6", "#7fdefe"];
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
				document.getElementById("chartPieRich"),
				"default"
			);
			var optionPieRich = {
				color: [
					"#0d4782",
					"#29d4e3",
					"#9446a4",
					"#b89910",
					"#5d25b4",
					"#5dacce",
					"#20b642",
					"#e26f1d",
				],
				title: {
					text: "不合格质量因素",
					//subtext: '2020年',
					textAlign: "center",
					x: "39%",
					y: "center",
					textStyle: {
						fontWeight: "400",
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
					itemGap: 12,
					data: legendData,
					formatter: function (name) {
						return `{title|${name}}{value|${objData[name].value}}{unit|次}`;
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
								padding: [0, 10, 0, 0],
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
						radius: ["40%", "70%"],
						center: ["40%", "center"],

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
									fontSize: 14,
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
		// 今日出库分析-工业
		industry: function () {
			var list = Array.isArray(this.analysisIndustrialDTOS) ? this.analysisIndustrialDTOS : [];
			var sum = list.reduce((prev, cur) => {
				return { num: Number(prev.num) + Number(cur.num) }
			}, { num: 0 })

			var mapData = (key) => {
				return list.map(item => (item[key])) || []
			};
			var nameArr = mapData('industrialUnits');// 名称
			var numArr = mapData('num');// 数量
			var rateArr = list.map(item => (item.num / sum.num * 100).toFixed(2)) || []


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
					formatter: "{b}<br/>{a0}:{c0}担<br>{a1}:{c1}%",
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
					data: ["出库量"],
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
						data: nameArr,
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
						name: "出库量",
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
											color: "#0f5092", // 0% 处的颜色
										},
										{
											offset: 1,
											color: "#2288c4", // 100% 处的颜色
										},
									],
									false
								),
								//柱形图圆角，初始化效果
								barBorderRadius: [0, 0, 0, 0],
							},
						},
						data: numArr,
					},
					{
						name: "完成进度",
						type: "line",
						yAxisIndex: 1,
						data: rateArr,
					},
				],
			};

			// 使用刚指定的配置项和数据显示图表。
			myChartBarMulti.setOption(optionBarMulti);
		},
		// 今日出库分析-等级
		level: function () {
			var list = Array.isArray(this.analysisLevel) ? this.analysisLevel : [];

			var mapData = (key) => {
				return list.map(item => (item[key])) || []
			};
			var nameArr = mapData('qnum');// 名称
			var numArr = mapData('num');// 数量

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
					formatter: "{b}<br/>{a0}:{c0}担",
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
					data: ["出库量"],
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
						data: nameArr,
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
						name: "出库量",
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
											color: "#e36e1f", // 0% 处的颜色
										},
										{
											offset: 1,
											color: "#d98846", // 100% 处的颜色
										},
									],
									false
								),
								//柱形图圆角，初始化效果
								barBorderRadius: [0, 0, 0, 0],
							},
						},
						data: numArr,
					},
				],
			};

			// 使用刚指定的配置项和数据显示图表。
			myChartBarMulti.setOption(optionBarMulti);
		},
		// 库存烟叶等级分布
		distribution: function () {

			var list = Array.isArray(this.gradeDistributionStockTobaccoLeavesDTOS) ? this.gradeDistributionStockTobaccoLeavesDTOS : [];

			var mapData = (key) => {
				return list.map(item => item[key]) || []
			};
			var nameArr = mapData('leafLevelNo');// 名称
			var numArr = mapData('num');// 数量
			console.log(nameArr)
			console.log(numArr)
			// 基于准备好的dom，初始化echarts实例
			var myChartBarMulti = echarts.init(
				document.getElementById("div_kcyydjfb"),
				"default"
			);
			// 指定图表的配置项和数据
			var optionBarMulti = {
				color: ["#115798", "#e37022"],
				title: {
					text: "",
					subtext: "",
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "shadow",
					},
					formatter: "{b}<br/>{a0}:{c0}担",
				},
				grid: {
					left: "20",
					right: "30",
					bottom: "10",
					top: "10",
					containLabel: true, // grid 区域是否包含坐标轴的刻度标签。
				},

				legend: {
					show: false,
					data: ["出库量"],
					orient: "horizontal", // 'vertical'
					x: "right", // 'center' | 'left' | {number},
					y: "top", // 'center' | 'bottom' | {number}
					itemWidth: 20,
					itemHeight: 10,
				},

				yAxis: [
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
						data: nameArr,
					},
				],
				xAxis: [
					{
						type: "value",
						axisTick: {
							show: false,
						},
						splitArea: {
							//坐标轴在 grid 区域中的分隔区域，默认不显示。
							show: false, //是否显示分隔区域
						},
					},
				],
				series: [
					{
						name: "出库量",
						type: "bar",
						barWidth: "20px",
						label: {
							normal: {
								show: true,
								position: "insideLeft",
								formatter: "{c}",
								textStyle: {
									color: "#fff",
									fontSize: 12,
								},
							},
						},
						data: numArr,
						// normal: {
						// 	color: function(params) {
						// 		var index_color = params.value;
						// 		if (index_color >= 200) {
						// 			return '#fe4365';
						// 		} else {
						// 			return '#25daba';
						// 		}
						// 	}
						// },
					},
				],
			};

			// 使用刚指定的配置项和数据显示图表。
			myChartBarMulti.setOption(optionBarMulti);
		},
	},
}
</script>



