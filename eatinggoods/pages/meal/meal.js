//meal.js
//获取应用实例
var app = getApp();
Page({
  data: {
    winHeight: "", 
    currentTab: 0,  
    scrollLeft: 0,
    mealList: [
      {
            src: "/images/1.jpg",
            dp: "排骨汤米饭(客村店)",
            fei: "配送飞快",
            pin: "评分4.5 | 月售1333",
            goodsCss: 'goodsListClose',
            cssSats: true,
        myList1: [
              {
                src: "/images/c1.jpg",
                name: "山药排骨汤套餐",
                tag: "套餐包含，炖汤一碗，米饭一份，赠送下饭菜。h家常汤品，可补肾养血，增强免疫力，营养价值丰富",
                moeny: "￥36.8",
                preferential: "满20减18",
                src1: "/images/xaizai.svg"
              },
              {
                src: "/images/c2.jpg",
                name: "山药红枣猪肚鸡汤米饭",
                tag: "山药具有滋补细胞，强化内分泌，补益强壮，增强机休造血功能等作用，对廷缓哀老进有着重要作用",
                moeny: "￥18.8",
                preferential: "满20减18",
                src1: "/images/xaizai.svg"
              },
              {
                src: "/images/c3.jpg",
                name: "玉米排骨汤套餐",
                tag: "套餐包含，炖汤一碗，米饭一份，赠送下饭菜一碟。玉米可以降低血液胆固醇浓度，含有多种维生素，开胃益脾，润肺养心。",
                moeny: "￥38.8",
                preferential: "满20减18",
                src1: "/images/xaizai.svg"
              },
            ]
          },
          {
            src: "/images/2.jpg",
            dp: "甜工馆•纯手工甜品(客村店)",
            fei: "回头客多",
            pin: "评分4.7 | 月售4469",
            goodsCss: 'goodsListClose',
            cssSats: true,
            myList1: [
              {
                src: "/images/d1.jpg",
                name: "招牌芋圆",
                tag: "店家自己请阿姨做的纯手工芋圆，真正无添加，如果不是自己做的纯手工芋圆，假一赔百",
                moeny: "￥11.9",
                preferential: "满20减18",
                src1: "/images/xaizai.svg"
              },
              {
                src: "/images/d2.jpg",
                name: "山药红枣猪肚鸡汤米饭",
                tag: "【卡路里】香醋汁 or 牧场酱or 千岛酱 or 凯撒酱 or 芝麻酱 or 芥末酱沙拉菜、鸡胸肉",
                moeny: "￥18.8",
                preferential: "满20减18",
                src1: "/images/xaizai.svg"
              },
              {
                src: "/images/d3.jpg",
                name: "玉米排骨汤牛油果凯撒鸡肉",
                tag: "【卡路里】芝麻酱 or 芥末酱沙拉菜、鸡胸肉、鸡蛋、南瓜、番茄、玉米",
                moeny: "￥36.8",
                preferential: "满20减18",
                src1: "/images/xaizai.svg"
              },
            ]
          }
        ] 
  },



  // 滚动切换标签样式 
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式 
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  checkCor: function () {
    if (this.data.currentTab > 5) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let currentTab = e.target.dataset.currentTab,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: currentTab,
      curIndex: index
    })
  },


  footerTap: app.footerTap,
  showOrHidden:function(res){
    let index=res.target.id;
    this.data.mealList[index].cssSats = !this.data.mealList[index].cssSats;
    let temp = "mealList[" + index +"].goodsCss";
    if (!this.data.mealList[index].cssSats){
      this.setData({
        [temp]: 'goodsListOpen'
      });
    }
    else{
      this.setData({
        [temp]: 'goodsListClose'
      });
    }
  }
})