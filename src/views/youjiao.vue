<template>
	<!-- star -->

	<div class="youjiaopage_wrap">
		<nav2></nav2>
		<banner2 :bannerH="h1" :bannerImg="Img1"></banner2>
		<!-- 面包屑 -->
		<div class="Crumbs">
			<div>当前位置：首页><span>幼教</span></div>
		</div>
		<!-- 幼儿板块 -->
		<div class="Young">
			<div class="Young_cont">
				<h1>幼儿板块</h1>
				<p>
					目前，打造前程幼教产业覆盖有早教中心、托育中心、幼儿园、DIY手工乐园、医院及社区服务中心托幼一体化园区等。实体产业近20家，分别为：汇爱早教•郑州凯旋门中心、西克思社区幼托中心、汇爱国际早教托育中心等9家早教、托育中心；郑州经开区汇爱德幼稚园、郑州中原区汇爱幼稚园、郑州高新区汇爱（国际）幼稚园、原阳汇爱（国际）幼稚园、葡萄籽英语培训中心等6家幼儿园；郑州市人民医院医教医育托幼一体化融合服务点、新密市妇幼保健院托幼一体化园区（国家级示范中心）2家托幼一体化园区。<br />
					其中，郑州市人民医院医教医育托幼一体化融合服务点、新密市妇幼保健院托幼一体化园区（国家级示范中心）的建设是医教医育、产教融合的示范典例。在医院、社区服务中心的基础上建设托幼一体化的综合体，开展婴幼儿教育与医学、体育、文化、健康等多领域结合的实践和研究，探索建立医教、医育结合机制，实现医院、健康、幼儿园、托育的有效链接和融合。早教、幼儿园、托育、医院和社区服务中心托幼一体化园区等相关产业的建设将打造一个医教医育融合，产、学、研一体化协同发展的产业链。
				</p>
				<div class="Young_cont_img">
					<img
						src="../assets/img//youjiao/摄图网_501297342_banner_小学生放风筝（非企业商用）.png"
						alt=""
					/>
					<img
						src="../assets/img/youjiao/摄图网_501297342_banner_小学生放风筝（非企业商用）.png"
						alt=""
					/>
				</div>
			</div>
		</div>
		<!-- 合作模式 -->
		<div class="Cooperation">
			<div class="Cooperation_cont">
				<h1>合作模式</h1>
				<div class="Cooperation_cont_item">
					<div class="Cooperation_cont_item_top">
						<div
							class="Cooperation_cont_item_top1"
							v-for="(item, index) in arrList"
							:key="index"
						>
							<h1>{{ item.h1 }}</h1>
							<p>
								{{ item.p }}
							</p>
						</div>
					</div>
					<div class="Cooperation_cont_item_btm">
						<div
							class="Cooperation_cont_item_top1"
							v-for="(item, index) in arrList2"
							:key="index"
						>
							<h1>{{ item.h1 }}</h1>
							<p>
								{{ item.p }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 优势特色 -->
		<div class="Features">
			<div class="Features_cont">
				<h1>优势特色</h1>
				<div class="Features_cont_item">
					<img
						src="../assets/img/youjiao/摄图网_500394447_banner_手拿七巧板（非企业商用）.png"
						alt=""
					/>
					<div class="Features_cont_item_text">
						<h1>集团化产业运营管理</h1>
						<p>
							打造前程承载民族发展使命，整合优势资源，打造以金融、科技、电商、职教、幼教为支柱的多产业集群，是全行业领先的综合性集团。打造前程幼教产业覆盖有早教中心、托育中心、幼儿园、DIY手工乐园、医院及社区服务中心托幼一体化园区等，实体产业近20家。借力金融助推产业升级，用科技引领教育行业发展，通过校企合作、产教融合发展，加强幼教产业关键学科建设，在医院、社区服务中心的基础上建设托幼一体化的综合体，开展婴幼儿教育与医学、体育、文化、健康等多领域结合的实践和研究，探索建立医教、医育结合机制，实现医院、健康、幼儿园、托育的有效链接和融合。通过早教、幼儿园、托育、医院和社区服务中心托幼一体化园区等相关产业的建设，打造一个医教医育融合，产、学、研一体化协同发展的产业链。
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 创新人才培养 -->
		<div class="Cultivate">
			<div class="Cultivate_cont">
				<h1>创新人才培养</h1>
				<div class="Cultivate_cont_item">
					<div
						class="Cultivate_cont_item1"
						v-for="(item, index) in arrList3"
						:key="index"
					>
						<img :src="item.url" alt="" />
						<h1>{{ item.h1 }}</h1>
						<p>
							{{ item.p }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- 先进完备的课程体系 -->
		<div class="System">
			<div class="System_cont">
				<h1>新建文本的课程体系</h1>
				<div class="System_cont_item">
					<div class="System_cont_item1">
						<img
							src="../assets/img/youjiao/摄图网_501104919_banner_青少年教育（非企业商用） (1).png"
							alt=""
						/>
						<div class="System_cont_item1_text">
							<h1>分龄课程体系</h1>
							<p>
								融合中国传统文化精髓与西方最先进的教育理念，强调体验、互动与对话的婴幼儿教育模式，遵循从知学到好学再到乐学的婴幼儿托育规律，结合情绪调节、行为调节、注意调节三个不同发展阶段，进行相分龄课程体系的设置，让孩子在体验互动中求知、成长，如欢动游戏课程、综合认知课程、创意美术活动、绘本阅读、美厨体验、音乐聆听等内容，进行婴幼儿内心接受和身心发展相适应的教育，真正实现婴幼儿阶段教育的自然衔接和过渡，促进婴幼儿的健康成长。
							</p>
						</div>
					</div>
					<div class="System_cont_item1">
						<div class="System_cont_item1_text">
							<h1>分龄课程体系</h1>
							<p>
								融合中国传统文化精髓与西方最先进的教育理念，强调体验、互动与对话的婴幼儿教育模式，遵循从知学到好学再到乐学的婴幼儿托育规律，结合情绪调节、行为调节、注意调节三个不同发展阶段，进行相分龄课程体系的设置，让孩子在体验互动中求知、成长，如欢动游戏课程、综合认知课程、创意美术活动、绘本阅读、美厨体验、音乐聆听等内容，进行婴幼儿内心接受和身心发展相适应的教育，真正实现婴幼儿阶段教育的自然衔接和过渡，促进婴幼儿的健康成长。
							</p>
						</div>
						<img
							src="../assets/img/youjiao/摄图网_501104919_banner_青少年教育（非企业商用） (1).png"
							alt=""
						/>
					</div>
					<div class="System_cont_item1">
						<img
							src="../assets/img/youjiao/摄图网_501104919_banner_青少年教育（非企业商用） (1).png"
							alt=""
						/>
						<div class="System_cont_item1_text">
							<h1>分龄课程体系</h1>
							<p>
								融合中国传统文化精髓与西方最先进的教育理念，强调体验、互动与对话的婴幼儿教育模式，遵循从知学到好学再到乐学的婴幼儿托育规律，结合情绪调节、行为调节、注意调节三个不同发展阶段，进行相分龄课程体系的设置，让孩子在体验互动中求知、成长，如欢动游戏课程、综合认知课程、创意美术活动、绘本阅读、美厨体验、音乐聆听等内容，进行婴幼儿内心接受和身心发展相适应的教育，真正实现婴幼儿阶段教育的自然衔接和过渡，促进婴幼儿的健康成长。
							</p>
						</div>
					</div>
					<div class="System_cont_item1">
						<div class="System_cont_item1_text">
							<h1>分龄课程体系</h1>
							<p>
								融合中国传统文化精髓与西方最先进的教育理念，强调体验、互动与对话的婴幼儿教育模式，遵循从知学到好学再到乐学的婴幼儿托育规律，结合情绪调节、行为调节、注意调节三个不同发展阶段，进行相分龄课程体系的设置，让孩子在体验互动中求知、成长，如欢动游戏课程、综合认知课程、创意美术活动、绘本阅读、美厨体验、音乐聆听等内容，进行婴幼儿内心接受和身心发展相适应的教育，真正实现婴幼儿阶段教育的自然衔接和过渡，促进婴幼儿的健康成长。
							</p>
						</div>
						<img
							src="../assets/img/youjiao/摄图网_501104919_banner_青少年教育（非企业商用） (1).png"
							alt=""
						/>
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
			h1: "幼教产业· 集团产业",
			Img1: require("../assets/img/keji/矿山banner1.png"),
			arrList: [
				{
					h1: "水水水水",
					p: "共建婴幼儿托育服务与管理类专业，旨在坚持立德树人，面向城乡各级各类早教中心、幼儿园、托育机构、家庭教育机构，培养从事幼儿园保育、0-6婴幼儿照护、医教结合、医育一体，德智体美全面发展的高素质劳动者和技能型人才",
				},
				{
					h1: "水水水水",
					p: "共建婴幼儿托育服务与管理类专业，旨在坚持立德树人，面向城乡各级各类早教中心、幼儿园、托育机构、家庭教育机构，培养从事幼儿园保育、0-6婴幼儿照护、医教结合、医育一体，德智体美全面发展的高素质劳动者和技能型人才",
				},
				{
					h1: "水水水水",
					p: "共建婴幼儿托育服务与管理类专业，旨在坚持立德树人，面向城乡各级各类早教中心、幼儿园、托育机构、家庭教育机构，培养从事幼儿园保育、0-6婴幼儿照护、医教结合、医育一体，德智体美全面发展的高素质劳动者和技能型人才",
				},
			],
			arrList2: [
				{
					h1: "水水水水",
					p: "共建婴幼儿托育服务与管理类专业，旨在坚持立德树人，面向城乡各级各类早教中心、幼儿园、托育机构、家庭教育机构，培养从事幼儿园保育、0-6婴幼儿照护、医教结合、医育一体，德智体美全面发展的高素质劳动者和技能型人才",
				},
				{
					h1: "水水水水",
					p: "共建婴幼儿托育服务与管理类专业，旨在坚持立德树人，面向城乡各级各类早教中心、幼儿园、托育机构、家庭教育机构，培养从事幼儿园保育、0-6婴幼儿照护、医教结合、医育一体，德智体美全面发展的高素质劳动者和技能型人才",
				},
			],
			arrList3: [
				{
					url: require("../assets/img/youjiao/蒙版(1).png"),
					h1: "创新专业化人才培养体制",
					p: "建立产学深度融合的对接机制、校企深度合作的共建机制以及“校企一体化”的教学管理运行机制，形成“开放、灵活、多样”的协同育人新机制，全面梳理健全教育教学、科研、人资、财务等各项管理制度，形成相互衔接、较为完备的制度保障体系",
				},
				{
					url: require("../assets/img/youjiao/蒙版(1).png"),
					h1: "创新专业化人才培养体制",
					p: "建立产学深度融合的对接机制、校企深度合作的共建机制以及“校企一体化”的教学管理运行机制，形成“开放、灵活、多样”的协同育人新机制，全面梳理健全教育教学、科研、人资、财务等各项管理制度，形成相互衔接、较为完备的制度保障体系",
				},
				{
					url: require("../assets/img/youjiao/蒙版(1).png"),
					h1: "创新专业化人才培养体制",
					p: "建立产学深度融合的对接机制、校企深度合作的共建机制以及“校企一体化”的教学管理运行机制，形成“开放、灵活、多样”的协同育人新机制，全面梳理健全教育教学、科研、人资、财务等各项管理制度，形成相互衔接、较为完备的制度保障体系",
				},
				{
					url: require("../assets/img/youjiao/蒙版(1).png"),
					h1: "创新专业化人才培养体制",
					p: "建立产学深度融合的对接机制、校企深度合作的共建机制以及“校企一体化”的教学管理运行机制，形成“开放、灵活、多样”的协同育人新机制，全面梳理健全教育教学、科研、人资、财务等各项管理制度，形成相互衔接、较为完备的制度保障体系",
				},
				{
					url: require("../assets/img/youjiao/蒙版(1).png"),
					h1: "创新专业化人才培养体制",
					p: "建立产学深度融合的对接机制、校企深度合作的共建机制以及“校企一体化”的教学管理运行机制，形成“开放、灵活、多样”的协同育人新机制，全面梳理健全教育教学、科研、人资、财务等各项管理制度，形成相互衔接、较为完备的制度保障体系",
				},
				{
					url: require("../assets/img/youjiao/蒙版(1).png"),
					h1: "创新专业化人才培养体制",
					p: "建立产学深度融合的对接机制、校企深度合作的共建机制以及“校企一体化”的教学管理运行机制，形成“开放、灵活、多样”的协同育人新机制，全面梳理健全教育教学、科研、人资、财务等各项管理制度，形成相互衔接、较为完备的制度保障体系",
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
/* 幼儿板块 */
.Young {
	width: 100vw;
	height: 971px;
}
.Young_cont {
	width: 1200px;
	margin: 0 auto;
}
.Young_cont > h1 {
	font-size: 32px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 45px;
	text-align: center;
	margin-top: 61px;
}
.Young_cont p {
	margin-top: 83px;
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #444444;
	line-height: 32px;
}
.Young_cont_img {
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
}
.Young_cont_img img {
	border: dashed;
	width: 585px;
	height: 340px;
}
/*合作模式  */
.Cooperation {
	border: dashed;
	width: 100vw;
	height: 831px;
	background-image: url("../assets/img/youjiao/摄图网_500924990_banner.png");
}
.Cooperation_cont > h1 {
	font-size: 32px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #772020;
	line-height: 45px;
	text-align: center;
	padding-top: 73px;
}
.Cooperation_cont {
	width: 1200px;
	margin: 0 auto;
}
.Cooperation_cont_item {
	width: 1200px;
	margin-top: 51px;
}
.Cooperation_cont_item_top1 {
	border-radius: 8px;

	width: 373px;
	height: 273px;
	background: #23337f;
}
.Cooperation_cont_item_top1 > h1 {
	text-align: center;
	padding-top: 51px;
	font-size: 18px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #ffffff;
	line-height: 25px;
}
.Cooperation_cont_item_top1 p {
	width: 308px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #ffffff;
	line-height: 24px;
	margin: 22px 32px 0 32px;
}
.Cooperation_cont_item_top {
	display: flex;
	justify-content: space-between;
}
.Cooperation_cont_item_btm {
	width: 787px;
	margin: 36px 0 0 209px;
	display: flex;
	justify-content: space-between;
}
/* 优势特色 */
.Features_cont {
	width: 1200px;
	margin: 0 auto;
}
.Features_cont > h1 {
	text-align: center;
	margin: 80px 0 60px;
}
.Features_cont_item {
	border: dashed;
	display: flex;
}
.Features_cont_item_text {
	width: 749px;
	height: 460px;
	background: #f8f8f8;
}
.Features_cont_item_text > h1 {
	padding: 60px 64px 19px 64px;

	font-size: 24px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 33px;
}
.Features_cont_item_text p {
	padding-left: 64px;
	width: 622px;
	height: 288px;
	font-size: 16px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #666666;
	line-height: 32px;
}
/* 创新人才培养 */
.Cultivate_cont {
	width: 1200px;
	margin: 0 auto;
}
.Cultivate_cont > h1 {
	text-align: center;
	margin-top: 92px;
	font-size: 24px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 33px;
}
.Cultivate_cont_item {
	height: 677px;
	margin-top: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
}
.Cultivate_cont_item1 {
	border: dashed;
	position: relative;
	width: 580px;
	height: 199px;
}
.Cultivate_cont_item1 img {
	position: absolute;
}
.Cultivate_cont_item1 h1 {
	top: 30px;
	left: 40px;
	font-size: 16px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #23337f;
	line-height: 32px;
	position: absolute;
}
.Cultivate_cont_item1 p {
	top: 74px;
	left: 40px;
	width: 500px;
	height: 96px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #666666;
	line-height: 24px;
	position: absolute;
}
/* 体系 */
.System_cont {
	width: 1200px;
	height: 1620px;
	margin: 0 auto;
}
.System_cont > h1 {
	margin: 80px 0 60px 0;
	text-align: center;
}
.System_cont_item1 {
	margin-bottom: 40px;
	display: flex;
}
.System_cont_item1_text {
	width: 740px;
	height: 340px;
	background: #f8f8f8;
}
.System_cont_item1_text > h1 {
	padding: 57px 0 0 86px;

	font-size: 24px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #444444;
	line-height: 33px;
}
.System_cont_item1_text p {
	padding: 24px 0 0 86px;

	width: 568px;
	height: 168px;
	font-size: 14px;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #666666;
	line-height: 28px;
}
</style>
