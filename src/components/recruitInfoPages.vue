<template>
  <div id="page" class="Pages">
    <div class="Pages_cont">
      <ul>
        <li class="btn" @click="prePage()">《</li>
        <li
          :class="selected == index ? 'page1' : 'page'"
          v-for="(item, index) of pageCount"
          :key="index"
          @click="goToPage(index)"
        >
          {{ item }}
        </li>
        <li class="btn" @click="nextPage()">》</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "recruitInfoPages",
  data() {
    return {};
  },
  methods: {
    goToPage(index) {
      if (index < 2) {
        this.$router.push("/zhaopinxinxi" + index);
        this.$store.state.selected = index;
      } else {
        alert("页面未创建无法跳转");
      }
    },
    //上一页
    prePage() {
      //如果已经在第一页，点击按钮页码不变并弹出提示
      if (this.selected == 0) {
        alert("已经是第一页！");
        //否则当前页数-1
      } else {
        this.$store.state.selected--;
        this.$router.push("/zhaopinxinxi" + this.selected);
      }
    },
    onload() {
      console.log("1");
    },
    //下一页
    nextPage() {
      //如果已经在最后一页，点击按钮页码不变并弹出提示

      if (this.selected == 1) {
        alert("页面未创建无法跳转");
      } else {
        //否则当前页数+1

        this.$store.state.selected++;

        this.$router.push("/zhaopinxinxi" + this.selected);
      }
    },
  },
  computed: {
    pageCount() {
      return this.$store.state.pageCount;
    },
    selected() {
      return this.$store.state.selected;
    },
  },
  //1 首先进入页面的时候需要监听浏览器的后退按钮，之后在操作的时候执行函数,在mounted中挂载去监听这个事件，并在methods里面添加函数，用来判断执行的条件
  mounted() {
   

    // 后退按钮
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL); //这里有没有都无所谓，最好是有以防万一
      window.addEventListener("popstate", this.prePage, false);
    }

    //检测浏览器刷新
  },
  // 2：需要在退出页面的时候销毁这个监听事件
  destroyed() {
    window.removeEventListener("popstate", this.prePage, false);
  },
};
</script>
<style scoped>
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

.page1 {
  background-color: #23337f;
  color: white;
}
</style>