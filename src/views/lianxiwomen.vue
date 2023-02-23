<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>金融</span></div>
    </div>
    <!-- 上部分 -->
    <div class="talk_top">
      <div class="talk_top_cont">
        <div class="talk_top_cont_l">
          <h1>联系我们</h1>
          <p>contact us</p>
        </div>
        <div class="talk_top_cont_c">
          <div class="talk_top_cont_c_t">
            <div class="talk_top_cont_c_t_l">
              <p>热线电话</p>
              <p>TEL 4000-000000</p>
            </div>
            <div class="talk_top_cont_c_t_r">
              <p>热线电话</p>
              <p>TEL 4000-000</p>
            </div>
          </div>

          <div class="talk_top_cont_c_b">
            <div class="talk_top_cont_c_b_l">
              <p>热线电话</p>
              <p>TEL 4000-000000</p>
            </div>
            <div class="talk_top_cont_c_b_r">
              <p>热线电话</p>
              <p>中国地区XX分区5A写字楼8-88室</p>
            </div>
          </div>
        </div>
        <div class="talk_top_cont_r">
          <img src="../assets/img/lianxi/编组 10.png" alt="" />
        </div>
        
      </div>
    </div>
    <!-- 下部分 -->
    <div class="talk_bottom">
        <img src="../assets/img/lianxi/位图.png" alt="">
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
      h1: "企业新闻",
      Img1: require("../assets/img/keji/矿山banner1.png"),

      p1: "更多最新精彩资讯，感受企业魅力",
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
/* 联系我们 */

.talk_top_cont {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  padding-top: 90px;

  margin: 0 auto;
}
.talk_top_cont_l {
  width: 235px;
  height: 134px;
}
.talk_top_cont_l > h1 {
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #23337f;
  line-height: 45px;
}
.talk_top_cont_l p {
  width: 235px;
  height: 80px;
  font-size: 48px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #f6f6f6;
  line-height: 40px;
}
.talk_top_cont_c {
  display: flex;
  width: 487px;
}
.talk_top_cont_c{
   
font-size: 18px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #444444;
line-height: 25px;
}

.talk_top_cont_c_t_l{
   margin-right: 60px; 
   
   
}
.talk_top_cont_r {
  width: 117px;
}
.talk_top_cont_r img {
  border: dashed;
}
.talk_top_cont_c_t_r{
    margin-top: 36px;
}
.talk_top_cont_c_b_r{
    margin-top: 36px;
}
.talk_bottom{
    width: 1200px;
    margin: 91px auto;
    margin-bottom: 81px;
    
}
</style>


