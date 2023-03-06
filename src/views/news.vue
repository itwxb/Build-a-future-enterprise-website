<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>新闻</span></div>
    </div>
    <!-- 按钮板块 -->
    <div class="btn">
      <div class="btn_cont">
        <div
          :class="active === item.url ? 'active' : ''"
          v-for="(item, index) in newsList"
          :key="index"
          @click="NewsDetails(item.url)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    <!-- 新闻内容 -->
    <router-view></router-view>
    <!-- 翻页列表 -->
    <!-- <div class="Pages">
      <div class="Pages_cont">
        <ul>
          <li>《</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>...</li>
          <li>20</li>
          <li>》</li>
        </ul>
      </div>
    </div> -->

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
      h1: "集团新闻",
      p1: "更多最新精彩资讯，感受企业魅力",
      active: "GroupNews",
      newsList: [
        {
          title: "集团新闻",
          url: "GroupNews",
        },
        {
          title: "媒体报道",
          url: "MediaCoverage",
        },
        {
          title: "行业资讯",
          url: "TradeNews",
        },
      ],
      Img1: require("../assets/img/keji/矿山banner1.png"),
    };
  },

  // watch: {
  //   $route(now, old) {
  //     // now: 变化之后的数据
  //     // old: 变化之前的数据
  //     let url = now.name;
  //     console.log(url);
  //     console.log(now, old);
  //     if (url.includes("TradeNews")) {
  //       this.active == "TradeNews";
  //     }
  //   },
  //   immediate: true,
  // },
  watch: {
    $route: {
      // 值发生变化时的回调函数
      handler(now) {
        //..... // now: 变化之后的数据
        // old: 变化之前的数据
        let url = now.name;

        // console.log(url);
        // console.log(now, old);
        if (url.includes("TradeNews")) {
          this.active = "TradeNews";
        } else if (url.includes("GroupNews")) {
          this.active = "GroupNews";
        } else {
          this.active = "MediaCoverage";
        }
      },
      immediate: true, //立即执行
    },
  },
  methods: {
    NewsDetails(url) {
      this.$router.push({
        name: url,
      });
      // this.active = url;
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
/* 按钮 */

.btn_cont {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  margin-left: 666px;
}
.btn_cont div {
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #444444;
  line-height: 40px;
  margin-right: 18px;
  width: 185px;
  height: 40px;
  background: #f6f6f6;
  border-radius: 6px;
  cursor: pointer;
}
.active {
  color: #ffffff !important;
  background: #23337f !important;
}
/* 新闻列表 */
.item_cont {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.item_cont1 {
  display: flex;
  width: 1200px;
  height: 252px;
  background: #ffffff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.11);
}

.item_cont1 img {
  margin: 32px 48px 32px 32px;
  width: 300px;
  height: 188px;
  border: dashed;
}
.item_cont1_text {
  width: 868px;
}
.item_cont1_text_top {
  margin: 45px 0 16px 0;
  width: 732px;
  height: 112px;

  border-bottom: 1px solid #eaeaea;
}
.item_cont1_text_top > h1 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #23337f;
  line-height: 24px;
}
.item_cont1_text_top p {
  margin-top: 16px;
  width: 732px;
  height: 56px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}
.item_cont1_text_btm {
  width: 732px;

  display: flex;
  justify-content: space-between;
}
.item_cont1_text_btm div {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #23337f;
  line-height: 28px;
}
.item_cont1_text_btm p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #23337f;
  line-height: 28px;
}
/* item2 */
.item2_cont {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.item2_cont1 {
  margin-top: 30px;
  display: flex;
  width: 1200px;
  height: 252px;

  background: #f8f8f8;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.11);
}

.item2_cont1 img {
  margin: 32px 48px 32px 32px;
  width: 300px;
  height: 188px;
  border: dashed;
}
.item2_cont1_text {
  width: 868px;
}
.item2_cont1_text_top {
  margin: 45px 0 16px 0;
  width: 732px;
  height: 112px;

  border-bottom: 1px solid #eaeaea;
}
.item2_cont1_text_top > h1 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;

  color: #3f3f3f;
  line-height: 24px;
}
.item2_cont1_text_top p {
  margin-top: 16px;
  width: 732px;
  height: 56px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}
.item2_cont1_text_btm {
  width: 732px;

  display: flex;
  justify-content: space-between;
}
.item2_cont1_text_btm div {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;

  color: #999999;
  line-height: 28px;
}
.item2_cont1_text_btm p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #23337f;
  line-height: 28px;
}
/* 翻页 */
.Pages_cont {
  margin: 40px 0;
  margin-left: 715px;
}
.Pages_cont ul {
  display: flex;
}
.Pages_cont ul li {
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.Pages_cont ul li:hover {
  background: #23337f;
}
</style>
