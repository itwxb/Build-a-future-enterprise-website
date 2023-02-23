<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>电商</span></div>
    </div>
    <!-- 电商板块 -->
    <div class="Electricity">
      <div class="Electricity_cont">
        <h1>电商板块</h1>
        <div class="Electricity_cont_item">
          <div class="Electricity_cont_item1">
            <p>
              随着信息时代的到来和电商行业的深度调整、发展，传统行业逐渐向新兴行业转变，更多的行业参与到越来越大众化的电商行业中来。打造前程电商板块契合经济发展方向，以技术创新为驱动，以数字化管理为保障，汇集网店运营、跨境电商、新媒体营销、短视频直播、校园新零售等多样化的运营模式，与河南省多所院校合作，联合建立校园电商实训中心和产教融合电商实训孵化基地，打造高附加值电商新生态产业链。
            </p>
            <img
              src="../assets/img/dianshang/摄图网_500431060_banner.png"
              alt=""
            />
          </div>
          <div class="Electricity_cont_item2">
            <img
              src="../assets/img/dianshang/摄图网_500548327_banner_商务金融云购物（非企业商用）.png"
              alt=""
            />
            <div class="Electricity_cont_item2_text">
              <h1>网店运营</h1>
              <p>
                电商事业部店铺运营业务主要以淘宝、京东、拼多多店为主，经营主要产品为化妆品、生鲜等，与广州等地多个品牌厂商建立了合作关系，丰富自有品牌“知行云伊”的产品线；生鲜主要服务于地方特色农副产品的电商化，如推动中牟大蒜、玉米等在网上热销。主要店铺有：知行云护肤拼多多专营店、蜗牛拼多多专卖店、茵妆拼多多专卖店等。随着规模的不断扩大，集团公司将逐渐拓宽自有产品的类型、店铺类型，加大力度服务农副产品，提升企业价值。
              </p>
            </div>
          </div>
          <div class="Electricity_cont_item3">
          
            <div class="Electricity_cont_item3_text">
              <h1>网店运营</h1>
              <p>
                电商事业部店铺运营业务主要以淘宝、京东、拼多多店为主，经营主要产品为化妆品、生鲜等，与广州等地多个品牌厂商建立了合作关系，丰富自有品牌“知行云伊”的产品线；生鲜主要服务于地方特色农副产品的电商化，如推动中牟大蒜、玉米等在网上热销。主要店铺有：知行云护肤拼多多专营店、蜗牛拼多多专卖店、茵妆拼多多专卖店等。随着规模的不断扩大，集团公司将逐渐拓宽自有产品的类型、店铺类型，加大力度服务农副产品，提升企业价值。
              </p>
            </div>
              <img
              src="../assets/img/dianshang/摄图网_500500411_banner_app（非企业商用）.png"
              alt=""
            />
          </div>
          <div class="Electricity_cont_item4">
            <img
              src="../assets/img/dianshang/摄图网_500548327_banner_商务金融云购物（非企业商用）.png"
              alt=""
            />
            <div class="Electricity_cont_item4_text">
              <h1>网店运营</h1>
              <p>
                电商事业部店铺运营业务主要以淘宝、京东、拼多多店为主，经营主要产品为化妆品、生鲜等，与广州等地多个品牌厂商建立了合作关系，丰富自有品牌“知行云伊”的产品线；生鲜主要服务于地方特色农副产品的电商化，如推动中牟大蒜、玉米等在网上热销。主要店铺有：知行云护肤拼多多专营店、蜗牛拼多多专卖店、茵妆拼多多专卖店等。随着规模的不断扩大，集团公司将逐渐拓宽自有产品的类型、店铺类型，加大力度服务农副产品，提升企业价值。
              </p>
            </div>
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
      h1: "电商产业 · 集团产业",
      Img1: require("../assets/img/keji/矿山banner1.png"),
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
  width: 1920px;
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
/* 电商板块 */
.Electricity_cont {
  width: 1200px;
  margin: 0 auto;
  height: 2240px;
}
.Electricity_cont > h1 {
  text-align: center;
  margin: 65px 0 45px 0;
}
.Electricity_cont_item1 {
  display: flex;
  justify-content: space-between;
}
.Electricity_cont_item1 p {
  margin-top: 30px;
  width: 600px;
  height: 240px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #444444;
  line-height: 40px;
}
.Electricity_cont_item2{
  position: relative;
  display: flex;
  margin-top: 80px;
}
.Electricity_cont_item2_text{
  position: absolute;
  top: 52px;
  left: 640px;
  width: 560px;
height: 460px;
background: #F8F8F8;
}
.Electricity_cont_item2_text>h1{
 margin-top: 76px;
 margin-left: 52px;
font-size: 24px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #444444;
line-height: 33px;
}
.Electricity_cont_item2_text p{
  margin-top: 19px;
 margin-left: 52px;

  width: 455px;
height: 256px;
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #666666;
line-height: 32px;
}
.Electricity_cont_item3{
  position: relative;
  display: flex;
  margin-top: 137px;
}
.Electricity_cont_item3 img{
  position: absolute;
  right: 0;
}
.Electricity_cont_item3_text{
position: absolute;
  top: 52px;
  width: 560px;
height: 460px;
background: #F8F8F8;
}
.Electricity_cont_item3_text>h1{
 margin-top: 76px;
 margin-left: 52px;
font-size: 24px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #444444;
line-height: 33px;
}
.Electricity_cont_item3_text p{
  margin-top: 19px;
 margin-left: 52px;

  width: 455px;
height: 256px;
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #666666;
line-height: 32px;
}



/* 4 */
.Electricity_cont_item4{
  position: relative;
  display: flex;
  margin-top: 570px;
}
.Electricity_cont_item4_text{
  position: absolute;
  top: 52px;
  left: 640px;
  width: 560px;
height: 480px;
background: #F8F8F8;
}
.Electricity_cont_item4_text>h1{
 margin-top: 76px;
 margin-left: 52px;
font-size: 24px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #444444;
line-height: 33px;
}
.Electricity_cont_item4_text p{
  margin-top: 19px;
 margin-left: 52px;

  width: 455px;
height: 256px;
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #666666;
line-height: 32px;
}
</style>


