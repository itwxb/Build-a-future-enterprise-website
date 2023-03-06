<template>
	<div>
		<!-- ---------- -->

		<div class="footer_warp">
			<div class="footer_cont">
				<!-- 上部 -->
				<div class="footer_cont_l">
					<!--上部 左 -->
					<div class="footer_cont_l_div">
						<div class="footer_cont_l_div_item">
							<p class="footer_cont_l_title">企业概况</p>
							<ul class="footer_cont_l_ul">
								<li
									v-for="(item, index) in arrList"
									:key="index"
									@click="toGuid(item.url, item.id)"
								>
									{{ item.title }}
								</li>

								<!-- <li>企业荣誉</li> -->
							</ul>
						</div>
						<div class="footer_cont_l_div_item">
							<p class="footer_cont_l_title">集团产业</p>
							<ul class="footer_cont_l_ul">
								<li
									v-for="(item, index) in arrList2"
									:key="index"
									@click="toPages(item.url)"
								>
									{{ item.title }}
								</li>
							</ul>
						</div>
						<div class="footer_cont_l_div_item">
							<p class="footer_cont_l_title">企业新闻</p>
							<ul class="footer_cont_l_ul">
								<li
									v-for="(item, index) in arrList3"
									:key="index"
									@click="toNews(item.url)"
								>
									{{ item.title }}
								</li>
							</ul>
						</div>
						<div class="footer_cont_l_div_item2">
							<p class="footer_cont_l_title">人力资源</p>
							<ul class="footer_cont_l_ul">
								<router-link to="zhaopinxinxi0"><li>招聘信息</li></router-link>
							</ul>
						</div>
					</div>
				</div>
				<!-- top 中 -->
				<div class="footer_cont_c">
					<div>
						<img src="../assets/img/logo2-2.png" alt="" />
					</div>
					<div>
						<p class="address">
							公司总部地址：郑州市金水区北三环文化路79号河南艺术职业学院<br />
							邮箱：logo@163.com
						</p>
					</div>
				</div>
				<!-- top 右 -->
				<div class="footer_cont_r">
					<div>
						<div class="footer_cont_r_border">
							<img src="../assets/img/ewm2.png" alt="" />
						</div>
						<p>关注微信公众号</p>
					</div>
				</div>
			</div>
			<!-- 下部 -->
			<div class="footer_warp_btm">
				<p>
					Copyright
					©&ensp;&ensp;xxxx有限公司&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;#网站备案号#
				</p>
			</div>
		</div>

		<!-- --------- -->
	</div>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			arrList: [
				{
					title: "关于企业",
					url: "/jituangaikuo",
					id: "about",
				},
				{
					title: "企业实力",
					url: "/jituangaikuo",
					id: "CultureInfo",
				},
				{
					title: "发展历程",
					url: "/jituangaikuo",
					id: "history",
				},
			],
			arrList2: [
				{
					title: "金融板块",
					url: "/jinrong",
				},
				{
					title: "科技板块",
					url: "/keji",
				},
				{
					title: "电商板块",
					url: "/dianshang",
				},
				{
					title: "职教板块",
					url: "/zhijiao",
				},
				{
					title: "幼教板块",
					url: "/youjiao",
				},
			],
			arrList3: [
				{
					title: "集团要闻",
					url: "/xinwen",
				},
				{
					title: "媒体报道",
					url: "/xinwen/MediaCoverage",
				},
				{
					title: "行业资讯",
					url: "/xinwen/TradeNews",
				},
			],
		};
	},

	mounted() {
		let _this = this;
		_this.$nextTick(function () {
			window.addEventListener("scroll", _this.handleScroll);
		});
	},

	methods: {
		// 锚点跳转
		toGuid(path, id) {
			localStorage.setItem("toId", id);
			this.$router.push(path);
			//查找存储的锚点id
			let Id = localStorage.getItem("toId");
			let toElement = document.getElementById(Id);
			//锚点存在跳转
			if (Id) {
				toElement.scrollIntoView();
				localStorage.setItem("toId", "");
			}
		},

		toPages(url) {
			this.$router.push(url);
		},
		toNews(url) {
			this.$router.push(url);
		},
	},
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

.footer_warp {
	width: 100vw;
	height: 388px;
	background: #17213d;
}
.footer_cont {
	width: 1200px;
	margin: 0 auto;
	display: flex;
}
.footer_cont_l {
	font-size: 16px;
	font-weight: 500;
	color: #dddddd;
	line-height: 22px;
	padding-top: 77px;
}
.footer_cont_l_title {
	font-size: 16px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #dddddd;
	line-height: 22px;
	width: 64px;
}
.footer_cont_l_ul {
	margin-top: 36px;
}
.footer_cont_l_ul li {
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	margin-top: 10px;
	cursor: pointer;
}
.footer_cont_l_div {
	display: flex;
}
.footer_cont_l_div_item {
	margin-right: 72px;
}
.footer_cont_c {
	margin-top: 70px;
	margin-left: 80px;
}
.address {
	width: 467px;
	font-size: 16px;
	font-family: "PingFangSC-Regular", "PingFang SC";
	font-weight: 400;
	color: #ffffff;
	line-height: 32px;
	margin-top: 42px;
}
.footer_cont_r {
	margin-top: 79px;
	margin-left: 70px;
}
.footer_cont_r p {
	text-align: center;
	font-size: 14px;
	font-family: "PingFangSC-Regular";
	font-weight: 400;
	color: #ffffff;
	line-height: 20px;
	margin-top: 17px;
}
.footer_cont_r_border {
	width: 111px;
	height: 109px;
	border: 1px solid #979797;
}
.footer_cont_r_border img {
	width: 95px;
	height: 95px;
	margin: 7px 8px;
}
.footer_warp_btm {
	width: 1280px;
	margin: 0 auto;
	height: 65px;
	margin-top: 56px;

	border-top: 1px solid #444444;
}
.footer_warp_btm p {
	font-size: 12px;
	font-weight: 400;
	color: #a3a3a3;
	line-height: 48px;
}
</style>
