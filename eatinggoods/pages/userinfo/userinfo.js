var Utils = require("../../utils/util.js");
var datas = {
    h_title: '修改信息',
    images: "/images/logo.png",                    
    disabled: true,             
    sexId: "0",  
    dataImg: "",     
};
Page({
  data: datas,
  // 上传图片
  uploadFn: function() {    
    var _this = this;
    wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
                  url: Utils.url + '/index.php/upload?server=1',
                  filePath: tempFilePaths[0],
                  name: 'file',
                  formData: {
                      'user': 'test'
          },
                  success: function (res) {
            var data = JSON.parse(res.data).data.path;  
            _this.setData({
                          images: Utils.url + data,
                          dataImg: data   
            })
          }
              })

        }
      })
  },

})
