Page({
  data: {
    productList: []
  },
  getLocalImage: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['orignal', 'compressed'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        console.log(res)        
        var filePath = res.tempFilePaths[0];
        wx.uploadFile({
          url: 'https://ad213074.ngrok.io/uplode/file',
          filePath: filePath,
          name: 'file',
          header:{
            // 'content-type': 'multipart/form-data'
          },
          success: function (res) {
            console.log(res)
            let urls = JSON.parse(res.data);
            // that.setData({
            //   productList: urls.url
            // })
          },
          fail (err){
            console.log(err);
          }
        });
      },
      fail: function (error) {
        wx.showModal({
          title: '错误',
          content: '错误',
        })
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    });
  }



});