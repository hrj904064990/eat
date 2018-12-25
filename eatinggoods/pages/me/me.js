// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h_title:'我的',
    loginbj: '../../images/mylogo.png',
    phonelogo: '../../images/phone1.png', 
    white: '../../images/r_white.png',
    property:{
      money:0.00,
      moneyunit:'元',
      moneycol:'钱包',
      gold:0,
      goldunit:'个',
      goldcol: '金币',
      redenvelopes:0,
      redenvelopesunit:'个',
      redenvelopescol:'红包'
    },
    user:
    {   
      username: 'HEY', 
      uphone: '135****5678', 
    },
    initpage:[
      {
        img:'../../images/add.png',
        col:'我的地址',
        href:'../address/address'
      },
      {
        img: '../../images/shop.png',
        col: '金币商城',
        href: '../gold/gold'
      },
      {
        img: '../../images/gift.png',
        col: '分享拿10元现金'
      },
      {
        img: '../../images/hear.png',
        col: '我的客服'
      },
      {
        img: '../../images/app.png',
        col: '我的小程序'
      } 
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