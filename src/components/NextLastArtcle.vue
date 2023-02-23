<template>
  <div class="NewsDetails_cont_footer">
    <!-- 使用三目运算符 判断按钮是否可以点击 当变量为true 不可以点击  -->
    <div @click="last" :class="lastNoShow ? 'noClick' : 'btn'">
      <img src="../assets/img/newsDetail/公共-更多2(1).png" alt="" /><span
        >上一篇：{{ lastTitle }}</span
      >
    </div>
    <!-- 使用三目运算符判断 按钮是否可以点击 -->
    <div @click="next" :class="nextNoShow ? 'noClick' : 'btn'">
      <span>下一篇：{{ nextTitle }}</span>
      <img src="../assets/img/newsDetail/公共-更多2.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取的数组，就是文章列表
      arrList: [
        {
          id: 0,
          url: require("../assets/img/youjiao/摄图网_501125646_banner_在草地上玩耍的孩子们（非企业商用）@2x.png"),
          h1: "发展数字经济 共享包容增长 为经济发展插上“数字翅膀””",
          p1: "各省、自治区、直辖市教育厅（教委）、发展改革委、工业和信息化主管部门、财政厅（局）、人力资源社会保障厅（局）、农业农村（农...",
        },
        {
          id: 1,
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
          id: 2,
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋2”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
          id: 3,
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
          id: 4,
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
      ],
      //上一个显示的标题内容
      lastTitle: "",
      //下一个显示的标题内容
      nextTitle: "",
      //下一个的ID 用于跳转页面
      nextId: "",
      //上一个的ID 用于跳转页面
      lastId: "",
      // 控制按钮是否可以点击
      lastNoShow: "",
      nextNoShow: "",
    };
  },
  //页面创建前执行一下这个函数
  created() {
    this.getAllList();
  },
  methods: {
    getAllList() {
      // 我这是把这个给变成子组件了 获取你文章的ID 用来进行匹配当前的页面
      //   父组件写了什么可以看文章下面
      let id = this.$parent.artcleID;

      //  使用ForEach遍历数组 进行当前页面的判断
      this.arrList.forEach((item, index) => {
        // 如果我们父组件里定义的id 等于 index了 就相当找到当前的页面了
        if (index == id) {
          // 在这个里面再进行判断 目的是为了 当文章列表里没有内容了的时候
          // 把 下一篇 按钮的内容变成 无 然后把这个nextNoShow 禁止点击的 变量的值变成true
          // 这样三目运算符就可以加结果为True的 class类名了
          if (index >= 2) {
            this.nextTitle = "无";
            this.nextNoShow = true;
            // 这个 else 是 当你文章里还有内容 执行下面的操作
          } else {
            // 改变你下一篇标题显示的内容 为 下个index里显示的标题
            this.nextTitle = this.arrList[index + 1].h1;
            // 把nextID 的值也变成下个index 里 id的值 为了进行页面的跳转
            this.nextId = this.arrList[index + 1].id;
            // 把下一篇变成可以点击的状态,因为这个else里 下一篇还有内容
            this.nextNoShow = false;
          }
          //   这个和上面一样
          if (index == 0) {
            this.lastTitle = "无";
            this.lastNoShow = true;
          } else {
            this.lastTitle = this.arrList[index - 1].h1;
            this.lastId = this.arrList[index - 1].id;
            this.lastNoShow = false;
          }
        }
      });
    },
    //点击上一篇文章时;
    last() {
      this.$router.push({
        // 拼接 lastID 和我们定义的这个地址，就能实现跳转了
        path: "/newsxiangqing" + this.lastId,
      });
    },
    //点击下一篇文章时
    next() {
      this.$router.push({
        path: "/newsxiangqing" + this.nextId,
      });
    },
  },
};
</script>
<style scoped>
.NewsDetails_cont_footer {
  padding: 0 40px;
  line-height: 68px;
  width: 1120px;
  height: 68px;
  background: #f8f8f8;
  display: flex;
  justify-content: space-between;
}
.btn {
  cursor: pointer;
}
.noClick {
  /* 不可点击 */
  pointer-events: none;
}
</style>
