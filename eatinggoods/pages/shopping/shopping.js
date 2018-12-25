// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h_title: '购物车',
    discount:0,
    paymoney:0,
    boxfee:2,
    distributionfee:1,
    show:false,
    orderlist:[
      {
        goodsId:1,
        goodstitle:'煎蛋',
        goodsimg:'../../images/0bb49d7ae8ddaca1c3f9e1b60ee48jpeg.webp',
        goodscount:1,
        goodsoriginalprice:20,
        goodsdiscount:2.3,
        goodsreprice: 0
      },
      {
        goodsId:2,
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
    this.getRelprice();
    this.getDiscount();
    this.getAllMoney();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  /* 计算折后价 */
  getRelprice:function(){
    let goodsreprice=0;
    for(let i=0;i<this.data.orderlist.length;i++)
    {
      let goodsoriginalprice = this.data.orderlist[i].goodsoriginalprice;
      let goodsdiscount = this.data.orderlist[i].goodsdiscount;
      goodsreprice = goodsoriginalprice * goodsdiscount / 10;
      let temp = 'orderlist[' + i +'].goodsreprice';
      this.setData({
        [temp]: goodsreprice.toFixed(2)
      });
    }
    return goodsreprice;
  },
  /*计算优惠元数*/
  getDiscount:function(){
    let discount=0;
    for (let i = 0; i < this.data.orderlist.length; i++){
      let goodsreprice=this.data.orderlist[i].goodsreprice;
      let goodsoriginalprice = this.data.orderlist[i].goodsoriginalprice;
      discount += goodsoriginalprice - goodsreprice;
    }
    this.setData({
      discount: discount.toFixed(2)
    });
    return discount;
  },
  /* 计算总金额*/
  getAllMoney:function(){
    let money=0;
    for (let i = 0; i < this.data.orderlist.length; i++) {
      money += this.data.orderlist[i].goodsreprice * this.data.orderlist[i].goodscount;
    }
   if(this.data.orderlist.length != 0)
   {
     money += (this.data.boxfee + this.data.distributionfee);
   }
    this.setData({
      paymoney:money.toFixed(2)
    });
    return money;
  },
  removeGoods:function(res){
    let index=res.target.id;
    this.data.orderlist.splice(index,1);
    this.setData({
      orderlist: this.data.orderlist
    });
    this.getRelprice();
    this.getDiscount();
    this.getAllMoney();
    this.changeShow();
    console.log(this.data.orderlist);
  },
  /*改变show的值 */
  changeShow:function(){
    if(this.data.orderlist.length == 0){
      this.setData({
        show: true
      });
    }
  },
  /*移除所有元素 */
  removeAll:function(){
    this.data.orderlist=[];
    this.setData({
      orderlist: this.data.orderlist
    });
    this.getRelprice();
    this.getDiscount();
    this.getAllMoney();
    this.changeShow();
  }
})