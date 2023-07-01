<template>
	<!-- star -->

	<div class="homepage_wrap">
		<div v-title data-title="我是新的标题"></div>
		<!-- banner图和导航栏 -->
		<div class="banner_nav">
			<!-- banner -->
			<div class="banner_nav_bg">
				<img src="../assets/img/bg1.png" alt="" />
			</div>
			<!-- 导航栏 -->
			<div class="navWrap">
				<div class="navWrap_center">
					<div class="navWrap_center_img">
						<img src="../assets/img/logo.png" alt="" />
					</div>

					<div class="dropdown">
						<button class="dropbtn" @click="funRouter">集团产业</button>
						<div class="dropdown-content">
							<router-link to="/keji">科技</router-link>
							<router-link to="/zhijiao">职教</router-link>
							<router-link to="/youjiao">幼教</router-link>
							<router-link to="/dianshang">电商</router-link>

							<router-link to="/jinrong">金融</router-link>
						</div>
					</div>

					<ul class="navWrap_center_ul">
						<li
							v-for="(item, index) in navList"
							:key="index"
							@click="funyuming(item.url)"
						>
							{{ item.title }}
						</li>
					</ul>
				</div>
			</div>
			<!-- title -->
			<div class="banner_title_wrap">
				<div class="banner_title_center">
					<p>{{ title }}</p>
					<div>科技创新引领产业发展 <span>·</span>产教融合共育技术人才</div>
				</div>
			</div>
		</div>
		<!-- 最新资讯 -->
		<div class="news">
			<div class="news_cont">
				<!-- left -->
				<div class="news_cont_left">
					<h1>最新资讯</h1>
					<div class="news_bg">
						<div class="news_cont_left_img">
							<img src="../assets/img/news_img1.png" alt="" />
						</div>
						<div class="news_cont_left_text">
							<h1>要让学生知道，努力学习是一种责任！</h1>
							<p>2021-05-30</p>
							<p>
								中国心理学会法律心理学分会副会长、中国人民公安大学教授李玫瑾，同时也担任
							</p>
							<p>中国预防青少年犯罪研究会的副会长...</p>
						</div>
					</div>
				</div>
				<!-- right -->
				<div class="news_cont_right">
					<div class="news_cont_right_ul">
						<ul>
							<router-link to="/xinwen"> <li>集团新闻</li></router-link>

							<span>|</span>
							<li>媒体报道</li>
							<span>|</span>

							<li>行业资讯</li>
						</ul>
					</div>
					<div class="news_cont_right_text">
						<div
							class="news_cont_right_text_item news_cont_right_text_hr"
							v-for="(item, index) in newList"
							:key="index"
							@click="newsArticle(index)"
						>
							<h1>{{ item.title }}</h1>
							<p>{{ item.time }}</p>
							<p>
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 集团产业 -->
		<div class="GroupIndustry">
			<div class="GroupIndustry_cont">
				<!-- 左 -->
				<div class="GroupIndustry_cont_left">
					<!-- title -->
					<div class="GroupIndustry_cont_left_title">
						<p>集团产业</p>
					</div>
					<!-- img -->
					<div class="GroupIndustry_cont_left_img_f">
						<div
							v-for="(item, index) in jituanList"
							:key="index"
							class="GroupIndustry_cont_left_img"
						>
							<img :src="item.jituanimg" />
							<img
								:src="item.jituanimgyinying"
								class="GroupIndustry_cont_left_img2"
							/>
							<div class="GroupIndustry_cont_left_text">
								<span>{{ item.jituanspan }}</span>
								<p>{{ item.jituanp }}</p>
							</div>
						</div>
					</div>
					<!-- right -->
				</div>
				<!-- right -->
				<div class="GroupIndustry_cont_right">
					<!-- title -->
					<p class="GroupIndustry_cont_right_title">更多></p>
					<div class="GroupIndustry_cont_right_img">
						<img src="../assets/img/jituanyou.png" alt="" />
						<img
							class="GroupIndustry_cont_right_img2"
							src="../assets/img/jituanyinying.png"
							alt=""
						/>
					</div>
					<div class="GroupIndustry_cont_right_text">
						<p>执教寒夜</p>
						<span>校企共建专业 | 校企共建二级学院 | 校企共建产业学院</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 关于企业 -->
		<div class="AboutEnterprises">
			<div class="AboutEnterprises_cont">
				<!-- top -->
				<div class="AboutEnterprises_cont_top">
					<!-- top_left -->
					<div class="AboutEnterprises_cont_top_left">
						<h1>关于企业</h1>
						<p>
							打造前程集团公司是一家集金融、科技、电商、职教、幼教等为一体的集团化公司。在国家“科教兴国，金融助力”的大政策背景下，通过创新金融产品助力产业升级及国民经济转型，促进社会可持续发展；以科技创新推进智慧建设，以电商创新平台带动区域经济特色发展，以产业带动专业建设，深化产业与教育深度融合，以教育助力国家现代化建设。集团公司秉承脚踏实地、志存高远的企业精神，落实内涵建设，坚持守正创新，通过校企合作共建专业、共建二级学院、共建附属幼教机构等模式，致力于让人才更有价值，让科技、教育惠及大众，走出了一条特色化的发展道路。
						</p>
						<router-link to="/jituangaikuo">
							<div class="AboutEnterprises_cont_top_left_btn">
								<span>了解更多</span>
								<img src="../assets/img/guanyujiantou.png" alt="" />
							</div>
						</router-link>
					</div>
					<!-- top_right -->
					<div class="AboutEnterprises_cont_top_right">
						<img src="../assets/img/guanyuyou.png" alt="" />
						<div></div>
					</div>
				</div>
				<!-- bottom -->
				<div class="AboutEnterprises_cont_bottom">
					<div class="AboutEnterprises_cont_bottom_item">
						<h1>30</h1>

						<div class="AboutEnterprises_cont_bottom_item2">
							<span>+</span>
							<p>全国校区</p>
						</div>
					</div>
					<div class="AboutEnterprises_cont_bottom_item">
						<h1>30</h1>
						<div class="AboutEnterprises_cont_bottom_item2">
							<span>+</span>
							<p>全国校区</p>
						</div>
					</div>
					<div class="AboutEnterprises_cont_bottom_item3">
						<h1>3000</h1>
						<div class="AboutEnterprises_cont_bottom_item4">
							<span>+</span>
							<p>全国校区</p>
						</div>
					</div>
					<div
						class="AboutEnterprises_cont_bottom_item"
						style="border: 0; margin-right: -70px"
					>
						<h1>30</h1>
						<div class="AboutEnterprises_cont_bottom_item2">
							<span>+</span>
							<p>全国校区</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 合作伙伴 -->
		<div class="CooperativePartner">
			<div class="CooperativePartner_cont">
				<h1 class="CooperativePartner_cont_title">合作伙伴</h1>
			</div>
			<div class="CooperativePartner_cont_center">
				<div class="CooperativePartner_cont_center_item">
					<img src="../assets/img/合作1.png" alt="" />
					<span>合作院校</span>
				</div>
				<div class="CooperativePartner_cont_center_item">
					<img src="../assets/img/合作2.png" alt="" />
					<span>合作院校</span>
				</div>
			</div>
			<div class="CooperativePartner_cont_bottom">
				<div
					v-for="(item, index) in logoList"
					:key="index"
					class="CooperativePartner_cont_bottom_logo"
				>
					<img :src="item.logo" alt="" />
				</div>
			</div>
		</div>

		<!-- footer -->
		<footer2></footer2>

		<!-- end -->
	</div>
</template>

<script>
import footer2 from "../components/footer.vue";
export default {
	name: "index",
	components: {
		footer2,
	},
	data() {
		return {
			navList: [
				{ title: "首页", url: "/" },
				{ title: "集团概括", url: "/jituangaikuo" },
				{ title: "集团产业", url: "/chanye" },
				{ title: "集团新闻", url: "/xinwen" },
				{ title: "招聘详情", url: "/zhaopinxiangqing0_0" },
				{ title: "联系我们", url: "/lianxi" },
				{ title: "招聘信息", url: "/zhaopinxinxi0" },
			],

			logoimg: require("../assets/img/lALPDhmOw39u8LZszQFq_362_108.png_720x720q90g.jpg"),
			jituanList: [
				{
					jituanimg: require("../assets/img/jituan1.png"),
					jituanimgyinying: require("../assets/img/jituanyinying.png"),
					jituanspan: "金融产业",
					jituanp: "融资租赁  |债券融资  |  信托  |  产业基金",
				},
				{
					jituanimg: require("../assets/img/jituan1.png"),
					jituanimgyinying: require("../assets/img/jituanyinying.png"),
					jituanspan: "金融产业",
					jituanp: "融资租赁  |债券融资  |  信托  |  产业基金",
				},
				{
					jituanimg: require("../assets/img/jituan1.png"),
					jituanimgyinying: require("../assets/img/jituanyinying.png"),
					jituanspan: "金融产业",
					jituanp: "融资租赁  |债券融资  |  信托  |  产业基金",
				},
				{
					jituanimg: require("../assets/img/jituan1.png"),
					jituanimgyinying: require("../assets/img/jituanyinying.png"),
					jituanspan: "金融产业",
					jituanp: "融资租赁  |债券融资  |  信托  |  产业基金",
				},
			],
			logoList: [
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
				{ logo: require("../assets/img/xuexiao_logo.png") },
			],
			newList: [
				{
					title: "发展数字经济 共享包容增长 为经济发展插上“数字翅膀”",
					time: "2021-05-30",
					text: "中国心理学会法律心理学分会副会长、中国人民公安大学教授李玫瑾，同时也担任中国预防青少年犯罪研究会的副会长...",
				},
				{
					title: "用系统思维下好“职业教育一盘大棋”",
					time: "2021-05-30",
					text: "中国心理学会法律心理学分会副会长、中国人民公安大学教授李玫瑾，同时也担任中国预防青少年犯罪研究会的副会长...",
				},
				{
					title: "我国将在全国实施动产和权利担保统一登记—拓融资渠道",
					time: "2021-05-30",
					text: "中国心理学会法律心理学分会副会长、中国人民公安大学教授李玫瑾，同时也担任中国预防青少年犯罪研究会的副会长...",
				},
			],
		};
	},
	computed: {
		title() {
			return this.$store.state.title;
		},
	},
	methods: {
		funyuming(msg) {
			this.$router.push(msg);
		},
		newsArticle(index) {
			this.$router.push("/newsxiangqing" + index);
		},
		funRouter() {
			this.$router.push("/keji");
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

.homepage_wrap {
	width: 100vw;
	margin: 0 auto;
	height: 1000px;
}

.banner_nav {
	width: 100vw;
	height: 800px;
	position: relative;
}

.banner_nav_bg img {
	/* 文本居顶部对齐 */
	vertical-align: top;
}

/* 导航部分 */

.navWrap {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	/*  */
	padding-top: 40px;
}

.navWrap_center {
	width: 1440px;
	height: 101px;
	margin: 0 auto;
	background: #fff;
	border-radius: 51px;
	/*  */
	display: flex;
	justify-content: space-between;
}

.navWrap_center_img {
	width: 181px;
	height: 54px;
	margin: 23px 0 0 120px;
}

.navWrap_center_img img {
	width: 181px;
}

.navWrap_center_ul {
	/* border:1px solid red; */
	margin-right: 121px;
}

.navWrap_center_ul li {
	display: inline-block;
	height: 98px;
	line-height: 98px;
	/* border-bottom: 4px solid blue; */
	margin-left: 50px;
	padding: 0 5px;
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #222222;
	/* line-height: 22px; */
}
.navWrap_center_ul li:hover {
	cursor: pointer;
	color: rgba(35, 51, 127, 1);
	border-bottom: 2px solid rgba(35, 51, 127, 1);
}

/* title */

.banner_title_wrap {
	width: 100%;
	position: absolute;
	bottom: 290px;
	/* border: 1px solid yellow; */
}

.banner_title_center {
	/* border: 1px solid white; */
	text-align: center;
	width: 1200px;
	margin: 0 auto;
	font-size: 90px;
	font-family: AlibabaPuHuiTi-Bold, AlibabaPuHuiTi;
	font-weight: bold;
	color: #ffffff;
	line-height: 124px;
	letter-spacing: 1px;
}

.banner_title_center div {
	padding-top: 14px;
	font-size: 20px;
	font-family: Helvetica;
	line-height: 24px;
	letter-spacing: 4px;
}

.banner_title_center div span {
	margin: 0 18px;
}
/* news */
.news {
	width: 100vw;
	height: 801px;
	background: #f8f8f8;
}
.news_cont {
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.news_cont_left {
	margin-top: 89px;
}
.news_cont_left_img img {
	width: 588px;
	height: 353px;
	margin-top: 41px;
}
.news_cont_left_text {
	padding-top: 27px;
	padding-left: 40px;
	width: 548px;
	height: 150px;
	background-color: #ffffff;
}
.news_cont_left_text h1 {
	font-size: 18px;
	font-weight: 500;
	color: #23337f;
}
.news_cont_left_text p {
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #8f8f8f;
	margin-top: 10px;
}
.news_cont_right {
	width: 588px;
	margin-top: 103px;
}
.news_cont_right_ul ul {
	font-size: 16px;
	font-weight: 400;
	color: #b3b3b3;
	line-height: 22px;
	float: right;
	display: flex;
}
.news_cont_right_ul ul a {
	font-size: 16px;
	font-weight: 400;
	color: #b3b3b3;
	line-height: 22px;
	float: right;
	display: flex;
}
.news_cont_right_ul ul li:hover {
	color: #23337f;
}
.news_cont_right_ul ul span {
	margin: 0 23px 0 24px;
}
.news_cont_right_text {
	width: 588px;
	height: 535px;
	background: #ffffff;
	margin-top: 68px;
}
.news_cont_right_text_item {
	padding: 36px;
}
.news_cont_right_text_item h1 {
	font-size: 18px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 25px;
}
.news_cont_right_text_item p {
	margin-top: 10px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #8f8f8f;
	line-height: 20px;
}
.news_cont_right_text_hr {
	/* float: right; */
	width: 508px;

	border-bottom: 1px solid #d7d7d7;
}
.news_cont_right_text_hr:nth-of-type(3) {
	/* float: right; */
	width: 508px;

	border-bottom: none;
}
.news_cont_right_text_item2 {
	padding: 24px 40px;
}
.news_cont_right_text_item2 h1 {
	font-size: 18px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 25px;
}
.news_cont_right_text_item2 p {
	margin-top: 10px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #8f8f8f;
	line-height: 20px;
}
/* 集团产业 */
.GroupIndustry {
	width: 100vw;
	height: 800px;
	background: #ffffff;
}
.GroupIndustry_cont {
	width: 1200px;
	margin: 0 auto;

	display: flex;
	justify-content: space-between;
}
.GroupIndustry_cont_left_title {
	font-size: 36px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #444444;
	line-height: 50px;
	margin: 84px 0 40px 0;
}
.GroupIndustry_cont_left_img_f {
	width: 793px;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.GroupIndustry_cont_left_img {
	margin-bottom: 24px;

	position: relative;
}
.GroupIndustry_cont_left_img img:first-child {
	width: 384px;
	height: 261px;
	background: linear-gradient(180deg, rgba(0, 100, 255, 0) 0%, #000b6e 100%);
}
.GroupIndustry_cont_left_img2 {
	position: absolute;
	left: 0;
	bottom: 0;
}

.GroupIndustry_cont_left_text {
	position: absolute;
	left: 32px;
	bottom: 18px;
}
.GroupIndustry_cont_left_text p {
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ffffff;
	line-height: 20px;
	margin-top: 10px;
}
.GroupIndustry_cont_left_text span {
	font-size: 24px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #ffffff;
	text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}
.GroupIndustry_cont_right {
	position: relative;
	margin-top: 98px;
}
.GroupIndustry_cont_right_title {
	float: right;
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #999999;
	line-height: 22px;
	margin-bottom: 54px;
}

.GroupIndustry_cont_right_img {
	width: 384px;
	height: 546px;
}
.GroupIndustry_cont_right_img2 {
	position: absolute;
	bottom: 24px;
}
.GroupIndustry_cont_right_text {
	position: absolute;
	left: 45px;
	bottom: 45px;
}
.GroupIndustry_cont_right_text p {
	font-size: 24px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #ffffff;
	line-height: 33px;
}
.GroupIndustry_cont_right_text span {
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ffffff;
	line-height: 20px;
}
/* 关于企业 */
.AboutEnterprises {
	width: 100vw;
	height: 856px;
	background-image: url("../assets/img/guanyu_bg.png");
}
.AboutEnterprises_cont {
	width: 1200px;
	margin: 0 auto;
	height: 100%;
}
.AboutEnterprises_cont_top {
	display: flex;
	justify-content: space-between;
}
.AboutEnterprises_cont_top_left {
	margin-top: 143px;
	width: 600px;
}
.AboutEnterprises_cont_top_left > h1 {
	font-size: 36px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #ffffff;
	line-height: 50px;
}
.AboutEnterprises_cont_top_left p {
	margin-top: 36px;

	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ffffff;
	line-height: 40px;
}
.AboutEnterprises_cont_top_left_btn {
	width: 160px;
	height: 40px;
	border: 1px solid rgba(255, 255, 255, 0.8);
	margin-top: 81px;
	display: flex;
	align-items: center;
}
.AboutEnterprises_cont_top_left_btn img {
	width: 24px;
	height: 24px;

	margin-left: 8px;
}
.AboutEnterprises_cont_top_left_btn span {
	margin-left: 32px;
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ffffff;
	line-height: 22px;
}
.AboutEnterprises_cont_top_right {
	position: relative;
	width: 487px;
	height: 517px;
	margin-top: 115px;
}
.AboutEnterprises_cont_top_right img {
	position: absolute;
	z-index: 1;
}
.AboutEnterprises_cont_top_right Div {
	width: 317px;
	height: 408px;
	background: #3491e5;
	position: absolute;
	top: 64px;
	left: -33px;
}
.AboutEnterprises_cont_bottom {
	display: flex;

	margin-top: 80px;
}
.AboutEnterprises_cont_bottom_item {
	margin-right: 70px;
	position: relative;
	width: 247px;
	border-right: 1px solid #ffffff;
	display: flex;
}
.AboutEnterprises_cont_bottom_item3 {
	margin-right: 70px;
	position: relative;
	width: 323px;
	border-right: 1px solid #ffffff;
	display: flex;
}
.AboutEnterprises_cont_bottom_item3 p {
	width: 86px;
	height: 28px;
	font-size: 20px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #b30588;
	line-height: 28px;
}
.AboutEnterprises_cont_bottom_item3 h1 {
	font-size: 60px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
	line-height: 84px;
}
.AboutEnterprises_cont_bottom_item3 span {
	font-size: 17px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #692020;
	line-height: 24px;
}
.AboutEnterprises_cont_bottom_item4 {
	position: absolute;
	left: 161px;
	bottom: 15px;
}

.AboutEnterprises_cont_bottom_item h1 {
	font-size: 60px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
	line-height: 84px;
}
.AboutEnterprises_cont_bottom_item span {
	font-size: 17px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #692020;
	line-height: 24px;
}
.AboutEnterprises_cont_bottom_item p {
	width: 86px;
	height: 28px;
	font-size: 20px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #b30588;
	line-height: 28px;
}

.AboutEnterprises_cont_bottom_item2 {
	position: absolute;
	left: 85px;
	bottom: 15px;
}
/* 合作伙伴 */
.CooperativePartner {
	width: 100vw;
	height: 798px;
	background-image: url("../assets/img/hezuo_bg.png");
}
.CooperativePartner_cont {
	width: 1200px;
	margin: 0 auto;
}
.CooperativePartner_cont_title {
	text-align: center;
	margin-top: 80px;
	font-size: 36px;
	font-family: PingFangSC-Semibold, PingFang SC;
	font-weight: 600;
	color: #444444;
	line-height: 50px;
}
.CooperativePartner_cont_center {
	display: flex;
	justify-content: space-between;
	width: 365px;
	height: 69px;

	margin: 0 auto;
	margin-top: 47px;
}
.CooperativePartner_cont_center_item {
	display: flex;
	align-items: center;
}
.CooperativePartner_cont_center_item:hover {
	border-bottom: 1px solid #3491e5;
}
.CooperativePartner_cont_center_item img {
	width: 40px;
	height: 40px;
}
.CooperativePartner_cont_center_item span {
	line-height: 69px;
	font-size: 24px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #23337f;
	line-height: 33px;
	margin-left: 14px;
}
.CooperativePartner_cont_bottom {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 1200px;
	height: 392px;
	margin: 0 auto;
	margin-top: 80px;
}
.CooperativePartner_cont_bottom_logo img {
	width: 227px;
	height: 120px;
	background: #ffffff;
	box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.12);
	border-radius: 9px;
	margin-bottom: 16px;
}
.dropbtn {
	background-color: #fff;
	color: rgb(12, 11, 11);
	padding: 16px;
	font-size: 16px;
	border: none;
	cursor: pointer;
}

.dropdown {
	top: 22px;
	left: 394px;
	position: relative;
	display: inline-block;
}

.dropdown-content {
	text-align: center;
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 95px;
	min-height: 120px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
	color: rgb(6, 6, 6);
	padding: 12px 16px;
	text-decoration: none;
	display: block;
}

.dropdown-content a:hover {
	background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
	display: block;
}
</style>
