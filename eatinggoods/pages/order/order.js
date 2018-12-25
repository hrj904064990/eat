// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h_title: '订单详情',
    businessinfo:{
      blogo:'../../images/m.png',
      discount: 22,
      boxfee: 2,
      order:
      {
        oname: '牛肉+羊肉+荷包蛋+青菜+米饭+饮料',
        osid: '订单号：45427861594466565558',
        odate: '下单时间：2018-11-23',
        ocount: 1,
        omoney:34
      },
    },
    sendaddress:
    { 
      sendaddress:'配送地址：14155152455',
      icon:'../../images/phone.png',
      sendname:'张三'
    }

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