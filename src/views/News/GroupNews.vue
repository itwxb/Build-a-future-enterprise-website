<template>
  <!-- 新闻内容 -->
  <div class="news_cont_zong">
    <div class="item2">
      <div class="item2_cont">
        <div
          class="item2_cont1"
          v-for="(item, index) in arrList"
          :key="index"
          @click="funUrl(index)"
        >
          <img :src="item.url" alt="" />
          <div class="item2_cont1_text">
            <div class="item2_cont1_text_top">
              <h1>
                {{ item.h1 }}
              </h1>
              <p>
                {{ item.p1 }}
              </p>
            </div>
            <div class="item2_cont1_text_btm">
              <div>2021/6/05</div>
              <p>查看更多></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrList: [
        {
         
          url: require("../../assets/img/youjiao/摄图网_501125646_banner_在草地上玩耍的孩子们（非企业商用）@2x.png"),
          h1: "发展数字经济 共享包容增长 为经济发展插上“数字翅膀”",
          p1: "各省、自治区、直辖市教育厅（教委）、发展改革委、工业和信息化主管部门、财政厅（局）、人力资源社会保障厅（局）、农业农村（农...",
        },
        {
         
          url: require("../../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
         
          url: require("../../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋2”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
        
          url: require("../../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
   
          url: require("../../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
      ],
    };
  },
  methods: {
    funUrl(index) {
      if (index < 3) {
        this.$router.push("/newsxiangqing" + index);
      } else {
        alert("页面未创建无法跳转");
      }
    },
  },
};
</script>

<style scoped>
/* 新闻列表 */
.item_cont {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.item2_cont1:first-child {
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
  margin-bottom: 30px;
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
</style>