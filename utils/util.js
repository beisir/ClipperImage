const http = function (params) {
  let _this = this;
  return new Promise(function (resolve, reject) {
    // wx.showLoading({
    //   title: '正在加载...',
    //   mask: true
    // });
    _this.setData({
      hc_loading: true
    })
    wx.request({
      method: params.method || 'GET',
      url: params.url,
      data: params.data || {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (options) {
        let result = options.data;
        resolve(result);
        
      },
      fail: function (err) {
        // wx.showToast({
        //   title: '请求失败',
        //   icon: 'none'
        // });
        reject(err);
        wx.showModal({
          title: '警告',
          content: `接口请求失败,错误${JSON.stringify(err)}`,
        })
      },
      complete: function () {
        // wx.hideLoading();
        _this.setData({
          hc_loading: false
        });
      }
    });
  });
}

module.exports = {
  ajax: http
}