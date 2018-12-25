var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bstorename: '',
    bbj: '',
    blogo: '',
    bevaluate: '',
    bmonthlysale: '',
    sendname: '',
    sendtime: '',
    discountcontent: '',
    distributionfee: '',
    distance: '',
    show: false,
    show1: false,
    currentTab: 0,
    businessbanner: '',
    omoney: '',
    minsendmoney: '',
    payshow: 'pay',
    nowpick: '未选购',
    shopcartimg: 'shopcart',
    cart: '../../images/aa.png',
    sccshow:'shopcartcon1',
    tname: [],
    ones: [],
    take: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    this.setData({
      bstorename: '李大妈的小餐厅',
      bbj: '../../images/1.jpeg',
      blogo: '../../images/33.jpg',
      bevaluate: '4.4',
      bmonthlysale: '90',
      sendname: '蜂鸟快送',
      sendtime: '27',
      discountcontent: '满30减21，满58减36，满78减49，满120减68，满180减95',
      distributionfee: '1.5元',
      distance: '1.5km',
      businessbanner: '../../images/1.jpeg',
      tname: ['热售', '优惠', '免费了免费了', '单品寿司', '卷物(份)', '冰镇刺身', '优惠套餐', '优惠套餐', '干捞面/汤捞面', '无敌炙烧盖饭', '劲秋饮料', '蔬菜沙律'],
      ones: [{
          id: 1,
        goodsimg: '../../images/1.jpeg',
          goodstitle: '8.9李大妈的套餐',
          goodsintroduce: '传说李大妈最爱吃的套餐......',
          goodsmonthlysale: 736,
          goodspraise: 100,
          goodsdiscount: 3.5,
          goodsoriginalprice: 43,
          nowprice: 9.7,
          fen: 0,
          jianshow: false,
          fenshow: false
        },
        {
          id: 2,
          goodsimg: '../../images/1.jpeg',
          goodstitle: '8.9李大妈的套餐',
          goodsintroduce: '传说李大妈最爱吃的套餐......',
          goodsmonthlysale: 736,
          goodspraise: 100,
          goodsdiscount: 3.5,
          goodsoriginalprice: 43,
          nowprice: 12,
          fen: 0,
          jianshow: false,
          fenshow: false
        }
      ],
      minsendmoney: 20,

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.setNavigationBarTitle({
        title: that.data.bstorename,
      }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ef690e',
      })
    this.setData({
      omoney: '￥' + that.data.minsendmoney + '元起送'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  showoff: function() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
    })
  },
  showmask: function() {
    this.setData({
      show: true,
      show1: true,
    })
  },
  showdown: function() {
    this.setData({
      show: false,
      show1: false,
      sccshow: 'shopcartcon1',
    })
  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // 点击第一个切换
  takeitup: function(e) {
    console.log(123);
  },
  // 添加
  jia: function(obj) {
    let that = this;
    let temp = obj.target.dataset.variable.id;
    for (let i = 0; i < that.data.ones.length; i++) {
      if (that.data.ones[i].id == temp) {
        let temp1 = 'ones[' + i + '].fen';
        let show1 = 'ones[' + i + '].jianshow';
        let show2 = 'ones[' + i + '].fenshow';
        console.log(show1);
        let temp2 = that.data.ones[i].fen
        this.setData({
          [temp1]: ([temp2] * 1) + 1,
          [show1]: true,
          [show2]: true,
          shopcartimg: 'shopcart1',
          cart: '../../images/2.svg',
        })
      }
    }

    this.take();

  },
  // 减少
  jian: function(obj) {
    let that = this;
    let temp = obj.target.dataset.variable.id;
    for (let i = 0; i < that.data.ones.length; i++) {
      if (that.data.ones[i].id == temp) {
        let temp1 = 'ones[' + i + '].fen';
        let temp2 = that.data.ones[i].fen;
        let show1 = 'ones[' + i + '].jianshow';
        let show2 = 'ones[' + i + '].fenshow';
        this.setData({
          [temp1]: ([temp2] * 1) - 1,
        });
        if (that.data.ones[i].fen == 0) {
          this.setData({
            [show1]: false,
            [show2]: false
          })
        }
      }
    }
    this.take();
  },
  // 判断
  take: function() {
    let that = this;
    let nowmoney = 0;
    for (let i = 0; i < that.data.ones.length; i++) {
      nowmoney += this.data.ones[i].fen * 1 * this.data.ones[i].nowprice * 1;
      console.log(nowmoney);
    };

    this.path(nowmoney)
  },
  // 对底部进行的操作
  path: function(nowmoney) {
    console.log(nowmoney);
    if (nowmoney > 20) {
      this.setData({
        omoney: '去结算',
        payshow: 'pay2',
        nowpick: '已选购' + nowmoney.toFixed(1),
      })
    } else if (nowmoney == 0) {
      this.setData({
        omoney: '还差' + (20 - nowmoney).toFixed(1) + '元',
        payshow: 'pay',
        nowpick: '未选购',
        shopcartimg: 'shopcart',
        cart: '../../image/aa.png',
      })
    } else {
      this.setData({
        omoney: '还差' + (20 - nowmoney).toFixed(1) + '元',
        payshow: 'pay',
        nowpick: '已选购' + nowmoney.toFixed(1),
      })
    }
  },
  onesshow: function() {
    console.log('123');
  },
  showcart: function() {
    console.log('123');
  },
  clearsc: function() {
    for (let i = 0; i < this.data.ones.length; i++) {
      let temp1 = 'ones[' + i + '].fen';
      let show1 = 'ones[' + i + '].jianshow';
      let show2 = 'ones[' + i + '].fenshow';
      this.setData({
        [temp1]: 0,
        [show1]: false,
        [show2]: false,
      })
    }
  },
  showscc:function(){
    if (this.data.sccshow == 'shopcartcon1'){
      this.setData({
        sccshow: 'shopcartcon',
        show:true,
      })
    }else{
      this.setData({
        sccshow: 'shopcartcon1',
        show: false,
      })
    }
 
  }
})