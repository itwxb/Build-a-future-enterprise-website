<template>
	<div>
		<!-- ---------- -->

		<div class="banner_warp">
			<img class="banner_warp_img" :src="bannerImg" />
			<div class="banner_warp_text">
				<h1>{{ bannerH }}</h1>

				<p>{{ bannerP }}</p>
			</div>
		</div>

		<!-- --------- -->
	</div>
</template>

<script>
export default {
	name: "Banner",
	data() {
		return {};
	},
	props: ["bannerH", "bannerP", "bannerImg"],
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
.banner_warp {
	position: relative;
	width: 100vw;
	height: 300px;
	margin: 0 auto;
}
.banner_warp_img {
	width: 100vw;
	z-index: -999;
	position: absolute;
	height: 300px;
}
.banner_warp_text {
	position: absolute;
	left: 845px;
	top: 11px;
}
.banner_warp_text h1 {
	text-align: center;
	padding-top: 112px;

	font-size: 36px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
	line-height: 50px;
}
.banner_warp_text p {
	margin-top: 18px;
	text-align: center;
	font-size: 18px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ffffff;
	line-height: 25px;
}
</style>
