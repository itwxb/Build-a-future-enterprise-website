<template>
	<!-- star -->

	<div class="youjiaopage_wrap">
		<nav2></nav2>
		<banner2 :bannerH="h1" :bannerImg="Img1"></banner2>
		<!-- 面包屑 -->
		<div class="Crumbs">
			<div>当前位置：首页><span>职教</span></div>
		</div>
		<!-- 职教 -->
		<div class="VocationalEducation">
			<div class="VocationalEducation_cont">
				<h1>执教办款</h1>
				<div class="VocationalEducation_cont_item">
					<p>
						党的十九大提出，“深化产教融合、协同育人、校企合作”的要求，“支持和规范社会力量兴办教育”。集团公司教育板块契合国家政策，秉承“校企合作、产教融合，依托学校、独立发展”的职业教育发展模式，积极发挥企业办学的主体作用，促进人才培养供给侧和产业需求侧结构要素全方位融合。同时，围绕市场需求、产业需求等办专业，促进人才的良性发展，提高人力资本价值；<br />
						开展引企入教、引教入企、产教融合，深化产教融合创新，积极探索发展校企共建专业、共建二级学院等合作模式，打造产教融合发展创新生态圈。
					</p>
					<img src="../assets/img/zhijiao/摄图网_501010724_banner.png" alt="" />
				</div>
			</div>
		</div>
		<!-- 合作模式 -->
		<div class="Cooperation">
			<div class="Cooperation_cont">
				<h1>合作模式</h1>
				<p class="Cooperation_cont_text">
					国务院下发的《关于加快发展现代职业教育的决定》中提出，引导支持社会力量兴办职业教育，创新民办职业教育办学模式，积极支持各类办学主体通过独资、合资、合作等多种形式举办民办职业教育；探索发展现代化产业学院。集团公司积极响应国家的一系列职教改革政策，深化产教融合、校企合作，参与学校办学，探索校企合作模式。企业参与学校办学注重人才的实用性与实效性，注重在校学习与企业实践。同时，注重学校与企业资源、信息共享的“双赢”模式。目前与学校合作的模式有：校企共建专业、校企共建二级学院。
				</p>
				<img src="../assets/img/zhijiao/编组 5.png" alt="" />
			</div>
		</div>
		<!-- 特色 -->
		<div class="Features">
			<div class="Features_cont">
				<h1>特色优势</h1>
				<div class="Features_cont_item">
					<div
						class="Features_cont_item1"
						v-for="(item, index) in arrList"
						:key="index"
					>
						<img :src="item.url" alt="" />
						<p>{{ item.p }}</p>
						<span>{{ item.span }}</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 教学产品 -->
		<div class="Teaching">
			<div class="Teaching_cont">
				<h1>教学产品</h1>
				<div class="Teaching_cont_item">
					<div
						class="Teaching_cont_item1"
						v-for="(item, index) in arrList2"
						:key="index"
					>
						<img :src="item.url" alt="" />
						<p>{{ item.p }}</p>
						<span>{{ item.span }}</span>
					</div>
				</div>
			</div>
		</div>
		<footer2></footer2>

		<!-- end -->
	</div>
</template>

<script>
import footer2 from "../components/footer.vue";
import banner2 from "../components/banner.vue";
import nav2 from "../components/nav.vue";
export default {
	name: "keji",
	components: {
		footer2,
		nav2,
		banner2,
	},
	data() {
		return {
			h1: "职教 · 集团产业",
			Img1: require("../assets/img/keji/矿山banner1.png"),
			arrList: [
				{
					url: require("../assets/img/zhijiao/商务.png"),
					p: "嗡嗡嗡嗡嗡嗡嗡嗡嗡1我",
					span: "结合互联网和幼教专业需求，建设有“软件开发实训中心”、“智能互联网实训室”、“数字媒体技术实训室”、“人工智能实训室”、“产、学、研、转、创”实训基地等",
				},
				{
					url: require("../assets/img/zhijiao/商务.png"),
					p: "嗡嗡嗡嗡嗡嗡嗡嗡嗡1我",
					span: "结合互联网和幼教专业需求，建设有“软件开发实训中心”、“智能互联网实训室”、“数字媒体技术实训室”、“人工智能实训室”、“产、学、研、转、创”实训基地等",
				},
				{
					url: require("../assets/img/zhijiao/商务.png"),
					p: "嗡嗡嗡嗡嗡嗡嗡嗡嗡1我",
					span: "结合互联网和幼教专业需求，建设有“软件开发实训中心”、“智能互联网实训室”、“数字媒体技术实训室”、“人工智能实训室”、“产、学、研、转、创”实训基地等",
				},
				{
					url: require("../assets/img/zhijiao/商务.png"),
					p: "嗡嗡嗡嗡嗡嗡嗡嗡嗡1我",
					span: "结合互联网和幼教专业需求，建设有“软件开发实训中心”、“智能互联网实训室”、“数字媒体技术实训室”、“人工智能实训室”、“产、学、研、转、创”实训基地等",
				},
				{
					url: require("../assets/img/zhijiao/商务.png"),
					p: "嗡嗡嗡嗡嗡嗡嗡嗡嗡1我",
					span: "结合互联网和幼教专业需求，建设有“软件开发实训中心”、“智能互联网实训室”、“数字媒体技术实训室”、“人工智能实训室”、“产、学、研、转、创”实训基地等",
				},
				{
					url: require("../assets/img/zhijiao/商务.png"),
					p: "嗡嗡嗡嗡嗡嗡嗡嗡嗡1我",
					span: "结合互联网和幼教专业需求，建设有“软件开发实训中心”、“智能互联网实训室”、“数字媒体技术实训室”、“人工智能实训室”、“产、学、研、转、创”实训基地等",
				},
			],
			arrList2: [
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
				{
					url: require("../assets/img/zhijiao/编组 17.png"),
					p: "大数据技术",
					span: "培养具有较强的电子商务应用能力，从事现代电子商务运作与管理的高素质应用工程师型人才",
				},
			],
		};
	},
	methods: {},
};
</script>
<style scoped>
@charset "utf-8";
/*=========================Reset_start==========================*/
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
dl,
dt,
dd,
ol,
ul,
li,
form,
table,
th,
td,
a,
img,
span,
strong,
var,
em,
input,
textarea,
select,
option {
	margin: 0;
	padding: 0;
}
/*去内外边距*/
html,
body {
	font-family: "微软雅黑", "宋体", Arail, Tabhoma;
	text-align: left;
}
/*字体 文本居左*/
ul {
	list-style: none;
}
/*去ul li 小点*/
img {
	border: 0 none;
}
/*img IE6 兼容问题*/
input,
select,
textarea {
	outline: 0;
}
/*去除点击蓝框*/
textarea {
	resize: none;
	overflow: auto;
}
/*锁定多行文本框大小 与文字超出出现滚动条*/
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/*表格边框合并 边框间距0*/
th,
strong,
var,
em {
	font-weight: normal;
	font-style: normal;
}
/*特殊文字粗细 样式显示正常*/
a {
	text-decoration: none;
}
/*a标签去下划线*/
.clearfix:after {
	clear: both;
	content: "";
	display: block;
	height: 0;
}
/*清浮动*/
a {
	color: #000000;
}
/*==========================Reset_End===========================*/

.youjiaopage_wrap {
	width: 100vw;
	margin: 0 auto;
	height: 1000px;
}
/* 面包屑 */
.Crumbs {
	width: 1200px;
	height: 46px;
	margin: 0 auto;
}
.Crumbs {
	font-size: 12px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 17px;
}
.Crumbs div {
	line-height: 46px;
}
.Crumbs span {
	color: #000000;
}
/* 职教 */
.VocationalEducation {
	width: 100vw;
	height: 509px;
	background-color: #ffffff;
}
.VocationalEducation_cont {
	width: 1200px;
	margin: 0 auto;
}
.VocationalEducation_cont > h1 {
	text-align: center;
	margin: 65px 0 45px 0;
	font-size: 32px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 45px;
}
.VocationalEducation_cont_item {
	display: flex;
	justify-content: space-between;
}
.VocationalEducation_cont_item p {
	width: 600px;
	height: 280px;
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #444444;
	line-height: 40px;
}
.VocationalEducation_cont_item img {
	width: 500px;
	height: 300px;
}
/* 合作 */
.Cooperation {
	border: 1px dashed black;
	width: 100vw;
	height: 1074px;
	background-image: url("../assets/img/zhijiao/热区.png");
}
.Cooperation_cont {
	width: 1200px;
	margin: 0 auto;
}
.Cooperation_cont img {
	border: 1px dashed;
}
.Cooperation_cont > h1 {
	text-align: center;
	margin-top: 26px;
	font-size: 32px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 45px;
}
.Cooperation_cont_text {
	margin-top: 28px;
}
/* 特色 */
.Features {
	width: 100vw;
	height: 900px;
	background: #f8f8f8;
}
.Features_cont {
	width: 1200px;
	margin: 0 auto;
}
.Features_cont > h1 {
	text-align: center;
	padding-top: 60px;
	font-size: 32px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #771b1b;
	line-height: 45px;
}
.Features_cont_item {
	margin-top: 17px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.Features_cont_item1 {
	text-align: center;
	margin-top: 24px;

	width: 384px;
	height: 325px;
	background: #ffffff;
	border-radius: 8px;
}
.Features_cont_item1 img {
	border: 1px dashed;
	margin-top: 54px;
}
.Features_cont_item1 p {
	margin-top: 26px;
}
.Features_cont_item1 span {
	padding: 18px 40px 0 40px;

	text-align: left;
	display: block;
	width: 304px;
	height: 96px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #da1616;
	line-height: 24px;
}
/* 教学产品 */
.Teaching {
	width: 100vw;
	height: 1417px;
	background-color: #ffffff;
}
.Teaching_cont {
	width: 1200px;
	margin: 0 auto;
}
.Teaching_cont > h1 {
	text-align: center;
	margin-top: 80px;
	font-size: 32px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 45px;
}
.Teaching_cont_item {
	height: 1152px;
	margin-top: 90px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
}
.Teaching_cont_item1 {
	text-align: center;
	width: 230px;
	height: 273px;
}
.Teaching_cont_item1 img {
	margin-top: 30px;

	width: 80px;
	height: 80px;
	border: 1px dashed;
}
.Teaching_cont_item1 p {
	font-size: 18px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 25px;
	margin: 32px 0 0 0;
}
.Teaching_cont_item1 span {
	width: 200px;
	height: 60px;
	margin-top: 16px;

	display: block;
	margin-left: 20px;
	text-align: left;

	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #666666;
	line-height: 20px;
}
</style>
