//logs.js
const {ajax} = require('../../utils/util.js')

Page({
  data: {
   
  },
  onLoad: function () {
    let _this = this;
    ajax.call(this,{
      url: 'http://10.158.33.180/Getserver/getdata'
    }).then(options => {
        // _this.setData({
        //   hc_loading: false
        // });
        console.log(options);
    });
  },
  clickFn (){
    this.onLoad();
  }
})
