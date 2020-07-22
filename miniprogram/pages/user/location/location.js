// pages/user/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[
      {
        iconPath:"/images/lo.png",
        id:4,
        latitude:34.27,
        longitude:108.95,
        width:30,
        height:30
      }
    ],
    //当前定位位置
    latitude:'',
    longitude: '',
  },
  navigate(){
    //使用微信内置地图查看标记点位置，并进行导航
    wx.openLocation({
      //要去的纬度-地址
      latitude: this.data.markers[0].latitude,
      //要去的经度-地址
      longitude: this.data.markers[0].longitude,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 //获取当前位置
 wx.getLocation({
   type:'gcj02',
   success:(res)=>{
     console.log(res)
     this.setData({
       latitude:res.latitude,
       longitude:res.longitude
     })
    }
  })
//     const latitude=res.latitude
//     const longitude=res.longitude
//     wx.openLocation({
//       latitude,
//       longitude,
//       scalue:18
//     })
//    }
//  })
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

  }
})