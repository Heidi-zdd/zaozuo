// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarList: [
      {
        id: 1,
        title: '首页',
        path: '/pages/index/index'
      },
      {
        id: 2,
        title: '全作品',
        path: '/pages/goodsList/goodsList'
      },
      {
        id: 3,
        title: '我的',
        path: '/pages/user/user'
      },
      {
        id: 4,
        title: '购物车',
        path: '/pages/shopCart/shopCart'
      }
    ],
    currentindex: 0,   //活跃ID
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //切换
    tabbarClick(e) {
      let { currentindex } = e.currentTarget.dataset;
      let { url } = e.currentTarget.dataset;
      if (currentindex !== this.data.currentindex) {
        this.setData({
          currentindex
        })
        wx.navigateTo({
          url: url
        })
      }

      console.log(currentindex, e, url)

    }
  }
})
