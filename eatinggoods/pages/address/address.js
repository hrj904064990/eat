// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h_title:'我的地址',
    hiddenEdit:'true',
    showIcon:true,
    editObj:{
    },
    addressArr:[
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    this.getaddressArr(app);
    if (this.data.addressArr.length != 0)
    {
      this.setData({
        ['addressArr[0].showIcon']: false
      });
    }
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

  },
  removeAddress:function(res){
    let index=res.target.id;
    console.log(index)
    this.data.addressArr.splice(index,1);
    this.setData({
      addressArr: this.data.addressArr
    });
  },
  editAddress:function(res){
    this.setData({
      hiddenEdit:false
    });
    let index=res.target.id;
    let data = this.data.addressArr[index]; 
    this.setData({
      editObj: data
    });
    console.log(this.data.editObj);
  },
  backEdit:function(){
    this.setData({
      hiddenEdit: true
    });
  },
  selectAddress:function(res){
    let index = res.currentTarget.id;
    let temp ='addressArr[' + index +'].showIcon';
    for (let i = 0; i < this.data.addressArr.length;i++)
    {
      let temp2= 'addressArr[' + i + '].showIcon';
      this.setData({
        [temp2]: true
      })
    }
    let that=this;
    setTimeout(function(){
      that.setData({
        [temp]: false
      })
    },50);
    wx.setStorage({
      key: 'curAddress',
      data:this.data.addressArr[index]
    })
  },
  getaddressArr: function (app) {
    if (app.addressArr != 0) {
      this.setData({
        addressArr: app.addressArr
      });
      this.setData({
        addressObj: this.data.addressArr[0]
      });
    }
  }
})