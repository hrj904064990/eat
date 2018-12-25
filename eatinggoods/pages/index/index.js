//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    body:'',
    mengbshow:'true',
    imgUrls:[
      '../../images/2.webp',
      '../../images/3.webp',
      '../../images/4.webp',
      '../../images/5.webp',
    ],
    search:
    {
      src:"../../images/ditu.png",
      addre:"UP智谷",
      sou:"搜索吃货外卖商家、商品名称"
    }
    ,
    account:[
      {
        src:"../../images/membership.webp",
      supera:"超级会员",
      rebp:"每月领20元红包",
      atonce:"立即开通"
      }
    ],
    activi:[
      {
        src: "../../images/6.webp",
        text1: "品质联盟",
        text2: "搭配齐全吃得好",
        text3: "立即抢购>"
      }
    ],
    acti:[{
      src: "../../images/7.webp",
          text1: "限量抢购",
          text2: "超值美味9.9元起",
          text3: "680人",
          text4: "正在抢"
    }],
    sort: {
      sortway: "综合排序",
      text2: "距离最近",
      text3: "品质联盟",
      text4: "筛选",
      src: "../../images/down.png",
      src1: "../../images/screen.png"
    },
    sortList:[
      {
        label:'all',
        name:'综合排序'
      },
      {
        label:'bevaluate',
        name:'好评优先'
      },
      {
        label: 'bmonthlysale',
        name: '销量最高'
      },
      {
        label: 'minsendmoney',
        name: '起送价最低'
      },
      {
        label: 'sendtime',
        name: '配送最快'
      },
      {
        label: 'distributionfee',
        name: '配送费最低'
      }
    ],
    store: [
      {
        blogo:"../../images/7.jpg",
        bstorename: "必胜客宅急送(赤岗北店)",
        moree: "···",
        bevaluate:4.8,
        bmonthlysale:618,
        minsendmoney:20,
        distributionfee:5,
        distance: 2.13,
        sendtime: 30,
        blabel: "披萨意面",
        huod: 0,
        discCss: 'disc_close',
        disStats: true,
        discountArr:[
          {
            profferlabel:'折',
            proffername:'单品折扣',
            proffebj:'discount'
          },
          {
            profferlabel: '特',
            proffername: '单品定价',
            proffebj: 'special'
          }
        ],
      },
      {
        blogo: "../../images/list_1.webp",
        bstorename: "幸福西饼生日蛋糕(广州分店)",
        moree: "···",
        bevaluate:4.4,
        bmonthlysale: 242,
        minsendmoney: 0,
        distributionfee:0,
        distance: 1.51,
        sendtime: 49,
        blabel: "蛋糕",
        huod: 0,
        discCss: 'disc_close',
        disStats: true,
        discountArr: [
          {
            profferlabel: '折',
            proffername: '单品折扣',
            proffebj: 'discount'
          },
          {
            profferlabel: '满',
            proffername: '满60减30，满199减40，满269减60，满459减100',
            proffebj: 'discount'
          },
          {
            profferlabel: '特',
            proffername: '单品定价',
            proffebj: 'special'
          }
        ],
      },
      {
        blogo: "../../images/7.jpg",
        bstorename: "必胜客宅急送(赤岗北店)",
        moree: "···",
        bevaluate: 4.8,
        bmonthlysale: 618,
        minsendmoney: 20,
        distributionfee: 5,
        distance: 2.13,
        sendtime: 30,
        blabel: "披萨意面",
        huod: 0,
        discCss: 'disc_close',
        disStats: true,
        discountArr: [
          {
            profferlabel: '折',
            proffername: '单品折扣',
            proffebj: 'discount'
          },
          {
            profferlabel: '特',
            proffername: '单品定价',
            proffebj: 'special'
          }
        ],
      },
      {
        blogo: "../../images/7.jpg",
        bstorename: "必胜客宅急送(赤岗北店)",
        moree: "···",
        bevaluate: 4.8,
        bmonthlysale: 618,
        minsendmoney: 20,
        distributionfee: 5,
        distance: 2.13,
        sendtime: 30,
        blabel: "披萨意面",
        huod: 0,
        discCss: 'disc_close',
        disStats: true,
        discountArr: [
          {
            profferlabel: '折',
            proffername: '单品折扣',
            proffebj: 'discount'
          },
          {
            profferlabel: '特',
            proffername: '单品定价',
            proffebj: 'special'
          }
        ],
      }
      // {
      //   src1:"../../images/list_1.webp",
      //   pinpai: "品牌",
      //   bsk: "幸福西饼生日蛋糕(广州分店)",
      //   moree: "···",
      //   src: "../../images/start.png",
      //   pingf: "4.4",
      //   yues: "月售242单",
      //   price: "￥0起送",
      //   tips: "免配送费",
      //   juli: "1.51km",
      //   minu: "49分钟",
      //   piza: "蛋糕",
      //   discount: "满",
      //   danpin: "满60减30，满199减40，满269减60，满459减100",
      //   huod: "18个活动",
      //   te: "特",
      //   dingj: "单品定价"
      // },
      // {
      //   src1: "../../images/7.jpg",
      //   pinpai: "品牌",
      //   bsk: "必胜客宅急送(赤岗北店)",
      //   moree: "···",
      //   src: "../../images/start.png",
      //   pingf: "4.8",
      //   yues: "月售618单",
      //   price: "￥20起送",
      //   tips: "配送费￥5",
      //   juli: "2.13km",
      //   minu: "30分钟",
      //   piza: "披萨意面",
      //   discount: "折",
      //   danpin: "单品折扣",
      //   huod: "55个活动",
      //   te: "特",
      //   dingj: "单品定价"
      // },
      // {
      //   src1: "../../images/list_1.webp",
      //   pinpai: "品牌",
      //   bsk: "幸福西饼生日蛋糕(广州分店)",
      //   moree: "···",
      //   src: "../../images/start.png",
      //   pingf: "4.4",
      //   yues: "月售242单",
      //   price: "￥0起送",
      //   tips: "免配送费",
      //   juli: "1.51km",
      //   minu: "49分钟",
      //   piza: "蛋糕",
      //   discount: "满",
      //   danpin: "满60减30，满199减40，满269减60，满459减100",
      //   huod: "18个活动",
      //   te: "特",
      //   dingj: "单品定价"
      // },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPromotionsCount();
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
  /*显示蒙版*/
  showMask:function(){
    this.data.mengbshow = false;
    this.setData({
      mengbshow: this.data.mengbshow,
      body:'body'
    });
  },
  /*隐藏蒙版*/
  hiddenmask:function(){
    this.data.mengbshow =true;
    this.setData({
      mengbshow: this.data.mengbshow,
      body: ''
    });
  },
  /*选择排序的方式*/
  selectSort:function(res){
    let index = res.target.id;
    this.setData({
      ['sort.sortway']: this.data.sortList[index].name
    });
  },
  /*获取活动的数量*/
  getPromotionsCount:function(){
    for(let i = 0; i < this.data.store.length;i++){
      let temp ='store[' + i + '].huod';
      this.setData({
        [temp]:this.data.store[i].discountArr.length
      });
    }
  },
  /*根据选择的排序方式将数据重新排序*/
  sortData:function(){
    
  },
  /*显示或隐藏活动 */
  showOrHiddenHuod:function(res){
    let index = res.target.id;
    let temp = 'store[' + index +'].discCss';
    if (this.data.store[index].disStats==true){
      this.setData({
        [temp]:'disc_open'
      });
    }
   else{
     this.setData({
        [temp]: 'disc_close'
     });
   }
    this.data.store[index].disStats = !this.data.store[index].disStats;
  }
})
