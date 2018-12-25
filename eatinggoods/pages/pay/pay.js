// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h_title: '确认订单',
    discount: 0,
    newdiscount:0,
    paymoney: 0,
    newpaymoney:0,
    boxfee: 2,
    distributionfee: 1,
    icolor:'#ccc',
    vipdecrease:5,
    maskscroll:'',
    showmask:true,
    sendtimeStats:'sendtimeOff',
    sendDate:'',
    addressObj:{
    },
    addressArr:[],
    dateObj:{
      dateArr:[]
    },
    orderlist: [
      {
        goodsId: 1,
        goodstitle: '煎蛋',
        goodsimg: '../../images/0bb49d7ae8ddaca1c3f9e1b60ee48jpeg.webp',
        goodscount: 1,
        goodsoriginalprice: 20,
        goodsdiscount: 2.3,
        goodsreprice: 0
      },
      {
        goodsId: 2,
        goodstitle: '煎蛋',
        goodsimg: '../../images/0bb49d7ae8ddaca1c3f9e1b60ee48jpeg.webp',
        goodscount: 1,
        goodsoriginalprice: 15,
        goodsdiscount: 2.3,
        goodsreprice: 0
      },
      {
        goodsId: 3,
        goodstitle: '煎蛋',
        goodsimg: '../../images/0bb49d7ae8ddaca1c3f9e1b60ee48jpeg.webp',
        goodscount: 1,
        goodsoriginalprice: 22,
        goodsdiscount: 2.3,
        goodsreprice: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app=getApp();
    this.getRelprice();
    this.getDiscount();
    this.getAllMoney();
    this.getDateObj();
    this.getaddressArr(app);
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
    let that=this;
    wx.getStorage({
      key: 'curAddress',
      success: function(res) {
        that.setData({
          addressObj:res.data
        });
        setTimeout(function(){
          wx.removeStorage({
            key:'curAddress',
            success:function(res){
              console.log(res)
            }
          });
        },500);
      },
    })
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
  /* 计算折后价 */
  getRelprice: function () {
    let goodsreprice = 0;
    for (let i = 0; i < this.data.orderlist.length; i++) {
      let goodsoriginalprice = this.data.orderlist[i].goodsoriginalprice;
      let goodsdiscount = this.data.orderlist[i].goodsdiscount;
      goodsreprice = goodsoriginalprice * goodsdiscount / 10;
      let temp = 'orderlist[' + i + '].goodsreprice';
      this.setData({
        [temp]: goodsreprice.toFixed(2)
      });
    }
    return goodsreprice;
  },
  /*计算优惠元数*/
  getDiscount: function () {
    let discount = 0;
    for (let i = 0; i < this.data.orderlist.length; i++) {
      let goodsreprice = this.data.orderlist[i].goodsreprice;
      let goodsoriginalprice = this.data.orderlist[i].goodsoriginalprice;
      discount += goodsoriginalprice - goodsreprice;
    }
    this.setData({
      discount: discount.toFixed(2),
      newdiscount: discount
    });
    return discount;
  },
  /* 计算总金额*/
  getAllMoney: function () {
    let money = 0;
    for (let i = 0; i < this.data.orderlist.length; i++) {
      money += this.data.orderlist[i].goodsreprice * this.data.orderlist[i].goodscount;
    }
    if (this.data.orderlist.length != 0) {
      money += (this.data.boxfee + this.data.distributionfee);
    }
    this.setData({
      paymoney: money.toFixed(2),
      newpaymoney: money.toFixed(2)
    });
    return money;
  },
  /*本单减钱 */
  decrease:function(){
    if (this.data.icolor == '#ccc')
   {
      let newpaymoney = this.data.paymoney - this.data.vipdecrease;
      let newdiscount = this.data.newdiscount - this.data.vipdecrease;
     this.setData({
       icolor: 'green',
       newpaymoney: newpaymoney,
       newdiscount: newdiscount
     });
      return newpaymoney;
   }
   else{
      this.setData({
        icolor: '#ccc',
        newpaymoney: this.data.paymoney,
        newdiscount: this.data.discount
      });
   }
  },
  /*设置配送时间*/
  setSendTime:function(){
    this.setData({
      showmask:false,
      maskscroll:'scrollOff'
    });
    let that=this;
    setTimeout(function(){
      that.setData({
        sendtimeStats:'sendtimeOpen'
      });
    },50);
  },
  /*隐藏蒙版*/
  hiddenMask:function(){
    this.setData({
      showmask: true,
      maskscroll: '',
      sendtimeStats:'sendtimeOff'
    });
  },
  /*获取时间数组*/
  getDateObj:function(){
    let arr=[];
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    for(let i=0;i<5;i++)
    {  
      m+=30;
      if(m>60)
      {
        h++;
        m-=60;
        if(h>=24)
        {
          h=0;
        }
      }
      let dateStr=this.getDateStr(h,m);
      arr.push(dateStr);
    }
    this.setData({
      ['dateObj.dateArr']:arr
    });
    this.setData({
      sendDate: this.data.dateObj.dateArr[0]
    });
  },
  selectDate:function(res){
    let index = res.currentTarget.id;
    let tempDate=this.data.dateObj.dateArr[index];
    this.setData({
      sendDate:tempDate
    });
  },
  getDateStr:function(h,m){
    if(h<=9)
    {
      h='0'+h;
    }
    if(m<=9)
    {
      m='0'+m;
    }
    let dateStr = h + ':' + m;
    return dateStr;
  },
  getaddressArr:function(app){
    if (app.addressArr!=0)
    {
      this.setData({
        addressArr: app.addressArr
      });
      this.setData({
        addressObj: this.data.addressArr[0]
      });
    }
  },
  paymoney:function(){
    wx.switchTab({
      url: '../my_order/my_order',
    })
  }
})