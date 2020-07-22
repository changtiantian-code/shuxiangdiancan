// pages/user/user.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      //WiFi密码
      text:"shuxiang20200319",
      isShowUserName:false,
      userInfo:null,
      ifName:false,
  },
  goAll:function(e){
    wx.redirectTo({
      url: '../all/all',
    })
  },
  //我的订单
  goMyorder:function(e){
     wx.redirectTo({
       url: '../myorder/myorder',
     })
  },
  //去投诉
  goMyBad:function(e){
      wx.redirectTo({
        url: '../complain/complain',
      })
  },
  //去服务评价
  goMyService:function(e){
     wx.redirectTo({
       url: '../myservice/service',
     })
  },
    //去我的评论页面
    goMycomment:function(e){
      wx.redirectTo({
        url: '/pages/mycomment/mycomment',
      })
   },
  //用户授权按钮绑定事件
  onGotUserInfo: function(e) {
    console.log(e.detail.userInfo)
   if (e.detail.userInfo) {
    var user = e.detail.userInfo;
     console.log(user,"--------------------------------------------------------------",e)
    this.setData({
     isShowUserName: true,
     userInfo: e.detail.userInfo,
    })
    user.openid = app.globalData.openid;
    app._saveUserInfo(user);
   } else {
    app._showSettingToast('登陆需要允许授权');
   }
  },
  //拨打预定电话
  callYu:function() {
        wx.makePhoneCall({
          phoneNumber: '029-8888888',
        })
  },
  calbad:function() {
     wx.makePhoneCall({
       phoneNumber: '029-9999999',
     })
  },
// 事件处理函数
goToTalkPage() {
  wx.navigateTo({
   url: "../user/location/location",
  })
},
 //复制密码
 copyText:function(e){
  console.log(e)
  wx.setClipboardData({
    data:e.currentTarget.dataset.text,
    success:function(res) {
      wx.getClipboardData({
        success:function(res) {
          wx.showToast({
            title:'复制成功'
          })
        }
      })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        console.log("个人onLoad")
        var that=this;
        var user=app.globalData.userInfo;
        if(user) {
          that.setData({
            isShowUserName:true,
            userInfo :user,
          })
        } else {
             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
             // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback=res =>{
              that.setData({
                userInfo:res.userInfo,
                isShowUserName:true
              })
            }
            }
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