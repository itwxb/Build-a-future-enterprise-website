<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>金融</span></div>
    </div>
    <!-- 招聘信息 -->
    <div class="Recruitment">
      <div class="Recruitment_cont">
        <div
          class="Recruitment_cont_item1"
          v-for="(item, index) in arrList"
          :key="index"
          @click="onurl(index)"
        >
          <div class="Recruitment_cont_item1_p">
            <p>{{ item.p1 }}</p>
            <p>{{ item.p2 }}</p>
          </div>
          <div class="Recruitment_cont_item1_div1">
            <div>{{ item.div1 }}</div>
            <div>{{ item.div2 }}</div>
            <div>{{ item.div3 }}</div>
          </div>
          <div class="Recruitment_cont_item1_div1 div2">
            <div>
              {{ item.div4 }}<span class="div1_span">{{ item.span1 }}</span>
            </div>
            <div>{{ item.div5 }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 翻页 -->
    <Pages></Pages>
    <!-- 申请职位 -->
    <applyFor></applyFor>

    <footer2></footer2>

    <!-- end -->
  </div>
</template>


<script>
import footer2 from "../../components/footer.vue";
import banner2 from "../../components/banner.vue";
import nav2 from "../../components/nav.vue";
import Pages from "../../components/recruitInfoPages.vue";
import applyFor from "../../components/applyFor.vue";
export default {
  name: "keji",
  components: {
    footer2,
    nav2,
    banner2,
    Pages,
    applyFor,
  },
  data() {
    return {
      h1: "招聘信息2",
      Img1: require("../../assets/img/keji/矿山banner1.png"),

      p1: "更多最新精彩资讯，感受企业魅力",
      arrList: [
        {
          p1: "网站技术/研发工程师",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师2",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师3",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师4",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师5",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师6",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师7",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师8",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师9",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "网站技术/研发工程师10",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
      ],
    };
  },
  methods: {
    // 招聘详情页面

    onurl(index) {
      if (index < 2) {
        this.$router.push("/zhaopinxiangqing1_" + index);
      } else {
        alert("页面未创建无法跳转");
      }
    },
  },
  computed: {},
};
</script>
<style scoped>
@import "../../assets/css/recruit-info.css";
</style>


