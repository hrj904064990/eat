Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/main_lunbo_1.png',
      '../../images/main_lunbo_2.png',
      '../../images/main_lunbo_3.png',
      '../../images/main_lunbo_4.png'
    ],
    categoryList: {
      pageone: [{
        name: "会员专区",
        src: "../../images/gold_2.png"
      }, {
        name: "红包专区",
        src: "../../images/gold_3.jpg"
      }, {
        name: "优惠立劵",
        src: "../../images/gold_4.png"
      }, {
        name: "数码家电",
        src: "../../images/gold_5.png"
      }, {
        name: "日常家居",
        src: "../../images/gold_6.png"
      }, {
        name: "食品饮料",
        src: "../../images/gold_7.png"
      }, {
        name: "个护美妆",
        src: "../../images/gold_8.png"
      }, {
        name: "所有商品",
        src: "../../images/gold_9.png"
      }],
    },
    foot_con: [
      { img_num: "../../images/foot_1.jpg", uearname: "5元饿了么红包－餐饮专享", money: "150", gold: "金币" },
      { img_num: "../../images/foot_2.jpg", uearname: "3元饿了么红包－餐饮专享", money: "90", gold: "金币" },
      { img_num: "../../images/foot_3.jpg", uearname: "充电眼部按摩护眼仪", money: "9", gold: "金币" },
      { img_num: "../../images/foot_4.jpg", uearname: "电动洁牙器", money: "9", gold: "金币" },
      { img_num: "../../images/foot_5.jpg", uearname: "双11御美狂欢", money: "9", gold: "金币" },
      { img_num: "../../images/foot_6.jpg", uearname: "迷你取暖器", money: "9", gold: "金币" },
    ],
    lunbo: [
      { img_num_1: "../../images/main_game_10.jpg", img_num_2: "../../images/main_game_11.jpg", title: '你会为了追某部剧或综艺新更买会员么', name_1: '会', name_2: '不会' },
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})