<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>金融</span></div>
    </div>
    <!--  -->
    <div class="NewsDetails">
      <div class="NewsDetails_cont">
        <div class="NewsDetails_cont_title">
          <h1>媒体报道0</h1>
          <div class="NewsDetails_cont_title_span">
            <img src="../../assets/img/newsDetail/矩形.png" alt="" /><span
              >发布时间：2019-11-15&ensp;&ensp;
            </span>
            <img src="../../assets/img/newsDetail/矩形(1).png" alt="" /><span
              >浏览次数：12345
            </span>
          </div>
        </div>
        <div class="NewsDetails_cont_text">
          <p>
            “数字经济是全球未来的发展方向，创新是亚太经济腾飞的翅膀。”数字技术已成为促进经济发展、提高经济各领域竞争力、打造新兴市场并保障全面可持续增长的关键因素之一。接受本报记者采访的国际人士表示，推动数字经济进一步发展，加强数字化领域全面合作，将为促进包容性增长和可持续发展带来新的机遇。
          </p>
          <div>“数字经济是全球未来的发展方向</div>
          <p>
            “数字经济是全球未来的发展方向，创新是亚太经济腾飞的翅膀。”数字技术已成为促进经济发展、提高经济各领域竞争力、打造新兴市场并保障全面可持续增长的关键因素之一。接受本报记者采访的国际人士表示，推动数字经济进一步发展，加强数字化领域全面合作，将为促进包容性增长和可持续发展带来新的机遇。
          </p>
          <p>
            “数字经济是全球未来的发展方向，创新是亚太经济腾飞的翅膀。”数字技术已成为促进经济发展、提高经济各领域竞争力、打造新兴市场并保障全面可持续增长的关键因素之一。接受本报记者采访的国际人士表示，推动数字经济进一步发展，加强数字化领域全面合作，将为促进包容性增长和可持续发展带来新的机遇。
          </p>
          <p>
            “数字经济是全球未来的发展方向，创新是亚太经济腾飞的翅膀。”数字技术已成为促进经济发展、提高经济各领域竞争力、打造新兴市场并保障全面可持续增长的关键因素之一。接受本报记者采访的国际人士表示，推动数字经济进一步发展，加强数字化领域全面合作，将为促进包容性增长和可持续发展带来新的机遇。
          </p>
          <p>
            “数字经济是全球未来的发展方向，创新是亚太经济腾飞的翅膀。”数字技术已成为促进经济发展、提高经济各领域竞争力、打造新兴市场并保障全面可持续增长的关键因素之一。接受本报记者采访的国际人士表示，推动数字经济进一步发展，加强数字化领域全面合作，将为促进包容性增长和可持续发展带来新的机遇。
          </p>
        </div>
        <div class="NewsDetails_cont_img">
          <img
            src="../../assets/img/newsDetail/摄图网_401521307_banner.png"
            alt=""
          />
        </div>
        <div class="NewsDetails_cont_btm">
          <div>相关新闻</div>
          <p>更多 ></p>
        </div>
        <div class="NewsDetails_cont_btm2">
          <div class="NewsDetails_cont_btm2_1">
            <div>发展数字经济 共享包容增长 为经济发展插上“数字翅膀”</div>
            <p>2021-05-30</p>
            <p>
              中国心理学会法律心理学分会副会长、中国人民公安大学教授李玫瑾，同时也担任中国预防青少年犯罪研究会的副会长...
            </p>
          </div>
          <div class="NewsDetails_cont_btm2_1" style="background: #f8f8f8">
            <div>发展数字经济 共享包容增长 为经济发展插上“数字翅膀”</div>
            <p>2021-05-30</p>
            <p>
              中国心理学会法律心理学分会副会长、中国人民公安大学教授李玫瑾，同时也担任中国预防青少年犯罪研究会的副会长...
            </p>
          </div>
        </div>
      </div>
    </div>

    <footer2></footer2>

    <!-- end -->
  </div>
</template>


<script>
import footer2 from "../../components/footer.vue";
import banner2 from "../../components/banner.vue";
import nav2 from "../../components/nav.vue";
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
      Img1: require("../../assets/img/keji/矿山banner1.png"),
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
/* 新闻详情 */
.NewsDetails_cont {
  width: 1200px;
  margin: 0 auto;
}
.NewsDetails_cont_title > h1 {
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2b2b2b;
  line-height: 33px;
  margin-top: 78px;
  text-align: center;
}
.NewsDetails_cont_title img {
  vertical-align: middle;
}
.NewsDetails_cont_title_span {
  text-align: center;

  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a3a3a3;
  line-height: 30px;
  margin-top: 8px;
}
.NewsDetails_cont_text {
  margin-top: 40px;
  border-top: 1px solid #eaeaea;
}
.NewsDetails_cont_text p {
  line-height: 30px;
  width: 1000px;
  margin: 40px 100px;
}
.NewsDetails_cont_text div {
  margin-left: 90px;
  font-size: 24px;
  font-weight: bold;
}
.NewsDetails_cont_img {
  text-align: center;
  margin-bottom: 40px;
}
.NewsDetails_cont_footer {
  padding: 0 40px;

  line-height: 68px;
  width: 1120px;
  height: 68px;
  background: #f8f8f8;
  display: flex;
  justify-content: space-between;
}
.NewsDetails_cont_btm {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.NewsDetails_cont_btm div {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #222222;
  line-height: 33px;
}
.NewsDetails_cont_btm p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
.NewsDetails_cont_btm2 {
  display: flex;
  justify-content: space-between;
}
.NewsDetails_cont_btm2_1 {
  margin: 32px 0;
  padding: 31px 61px 31px 20px;
  width: 507px;
  height: 123px;
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.11);
}
.NewsDetails_cont_btm2_1 div {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #444444;
  line-height: 25px;
}
.NewsDetails_cont_btm2_1 p {
  margin-top: 10px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 28px;
}
</style>


