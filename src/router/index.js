import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import jituangaikuo from '../views/jituangaikuo.vue'
import keji from '../views/keji.vue'
import youjiao from '../views/youjiao.vue'
import jinrong from '../views/jinrong.vue'
import zhijiao from '../views/zhijiao.vue'
import dianshang from '../views/dianshang.vue'
import news from '../views/news.vue'
import GroupNews from '../views/News/GroupNews.vue'
import MediaCoverage from '../views/News/MediaCoverage.vue'
import TradeNews from '../views/News/TradeNews.vue'
import newsDetail from '../views/newsxiangqing.vue'
import newsDetail1 from '../views/NewsDetals/newsxiangqing1.vue'
import newsDetail2 from '../views/NewsDetals/newsxiangqing2.vue'
import MediaCoverage0 from '../views/NewsDetals/MediaCoverage0.vue'
import MediaCoverage1 from '../views/NewsDetals/MediaCoverage1.vue'
import TradeNews0 from '../views/NewsDetals/TradeNews0.vue'
import TradeNews1 from '../views/NewsDetals/TradeNews1.vue'
import zhaopinxinxi0 from '../views/zhaopinxinxi0.vue'
import zhaopinxinxi1 from '../views/Recruit-info/zhaopinxinxi1.vue'
import lianxi from '../views/lianxiwomen.vue'
import zhaopinxiangqing0_1 from '../views/Recruitment-details/zhaopinxiangqing0-1.vue'
import zhaopinxiangqing0_0 from '../views/Recruitment-details/zhaopinxiangqing0-0.vue'
import zhaopinxiangqing1_0 from '../views/Recruitment-details/zhaopinxiangqing1-0.vue'
import zhaopinxiangqing1_1 from '../views/Recruitment-details/zhaopinxiangqing1-1.vue'


// 报错解决
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/jituangaikuo',
    name: 'jituangaikuo',
    component: jituangaikuo,
    meta: {
      title: '集团概况'
    }
  },
  {
    path: '/keji',
    name: 'keji',
    component: keji,
    meta: {
      title: '科技'
    }
  },
  {
    path: '/youjiao',
    name: 'youjiao',
    component: youjiao,
    meta: {
      title: '幼教'
    }
  },
  {
    path: '/jinrong',
    name: 'jinrong',
    component: jinrong,
    meta: {
      title: '金融'
    }
  },
  {
    path: '/zhijiao',
    name: 'zhijiao',
    component: zhijiao,
    meta: {
      title: '执教'
    }
  },
  {
    path: '/dianshang',
    name: 'dianshang',
    component: dianshang,
    meta: {
      title: '电商'
    }
  },
  {
    path: '/xinwen',
    name: 'xinwen',
    component: news,
    children: [{
        path: '',
        component: GroupNews,
        name: 'GroupNews',
        meta: {
          title: '集团新闻'
        }
      },
      {
        path: 'MediaCoverage',
        component: MediaCoverage,
        name: 'MediaCoverage',
        meta: {
          title: '媒体报道'
        }
      },
      {
        path: 'TradeNews',
        name: 'TradeNews',
        component: TradeNews,
        meta: {
          title: '行业资讯'
        }
      },

    ],
    meta: {
      title: '集团新闻'
    }
  },
  {
    path: '/newsxiangqing0',
    name: 'newsDetal',
    component: newsDetail,
    meta: {
      title: '新闻详情'
    }
  }, {
    path: '/newsxiangqing1',
    name: 'newsDetal1',
    component: newsDetail1,
    meta: {
      title: '新闻详情1'
    }
  },
  {
    path: '/newsxiangqing2',
    name: 'newsDetal2',
    component: newsDetail2,
    meta: {
      title: '新闻详情2'
    }
  },
  {
    path: '/MediaCoverage0',
    name: 'MediaCoverage0',
    component: MediaCoverage0,
    meta: {
      title: '媒体报道0'
    }
  },
  {
    path: '/MediaCoverage1',
    name: 'MediaCoverage1',
    component: MediaCoverage1,
    meta: {
      title: '媒体报道1'
    }
  }, {
    path: '/TradeNews0',
    name: 'TradeNews0',
    component: TradeNews0,
    meta: {
      title: '行业资讯0'
    }
  },
  {
    path: '/TradeNews1',
    name: 'TradeNews1',
    component: TradeNews1,
    meta: {
      title: '行业资讯1'
    }
  },
  {
    path: '/zhaopinxinxi0',
    name: 'zhaopinxinxi0',
    component: zhaopinxinxi0,
    meta: {
      title: '招聘信息0'
    }
  },
  {
    path: '/zhaopinxinxi1',
    name: 'zhaopinxinxi1',
    component: zhaopinxinxi1,
    meta: {
      title: '招聘信息1'
    }
  },
  {
    path: '/lianxi',
    name: 'lianxi',
    component: lianxi,
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/zhaopinxiangqing0_0',
    name: 'zhaopinxiangqing0_0',
    component: zhaopinxiangqing0_0,
    meta: {
      title: '招聘详情0-0'
    }
  },
  {
    path: '/zhaopinxiangqing0_1',
    name: 'zhaopinxiangqing0_1',
    component: zhaopinxiangqing0_1,
    meta: {
      title: '招聘详情0-1'
    }
  }, {
    path: '/zhaopinxiangqing1_0',
    name: 'zhaopinxiangqing1_0',
    component: zhaopinxiangqing1_0,
    meta: {
      title: '招聘详情1-0'
    }
  }, {
    path: '/zhaopinxiangqing1_1',
    name: 'zhaopinxiangqing1_1',
    component: zhaopinxiangqing1_1,
    meta: {
      title: '招聘详情1-1'
    }
  }



]

const router = new VueRouter({
  routes,
  // 跳转页面后 回到顶部
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router