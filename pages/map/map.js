// map.js
Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      callout: {
        content: '萨克的',
        color: '#000000',
        fontSize: 20,
        borderRadius: 5,
        bgColor: "#ff0000", //	背景色	String	1.2.0
        padding: 10,  // 	文本边缘留白	Number	1.2.0
        display: "ALWAYS",	  //'BYCLICK':点击显示; 'ALWAYS': 常显	String	1.2.0
        textAlign: 'center'
      },
      label: {
        content: '这是一个',	// 文本	String	1.2.0
        color: '#cccccc', //	文本颜色	String	1.2.0
        fontSize: 16, //	文字大小	Number	1.2.0
        x: 5, //	label的坐标，原点是 marker 对应的经纬度	Number	1.2.0
        y: 5, //	label的坐标，原点是 marker 对应的经纬度	Number	1.2.0
        borderWidth: 20, //	边框宽度	Number	1.6.0
        borderColor: '#000000', //	边框颜色	String	1.6.0
        borderRadius: 20,	//边框圆角	Number	1.6.0
        bgColor: '#eeeeee', //	背景色	String	1.6.0
        padding:10,  //	文本边缘留白	Number	1.6.0
        textAlign: 'center' //	文本对齐方式。有效值: left, right, center	String	1.6.0
      }
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  bindcallouttapFn (e){
    console.log(e);
  },
  bindcontroltapFn (e){
    console.log(e);
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})