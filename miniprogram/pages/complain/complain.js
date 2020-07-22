// miniprogram/pages/mycomment/mycomment.js
var util=require('../../utils/utif.js')
const db=wx.cloud.database();
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:1,
    comment:[],
    attendantvice:[],
    sugg:[],
    complain:[]
 },
 compl:function(e) {
  const db=wx.cloud.database()
  db.collection('complain').add({
    data:{
       taste:e.detail.value.taste,
       attendant:e.detail.value.attendant,
       fresh:e.detail.value.fresh,
       sanitation:e.detail.value.sanitation
    },
    success:res =>{
      this.setData({
        taste:e.detail.value.taste,
       attendant:e.detail.value.attendant,
       fresh:e.detail.value.fresh,
       sanitation:e.detail.value.sanitation
      })
      wx.showToast({          
        title: '新增投诉成功',        
        })       
         console.log('[数据库] [新增投诉] 成功，投诉 _id: ', res._id)
       },      
       fail: err => {       
          wx.showToast({          
            icon: 'none',          
            title: '新增投诉失败'        
           })        
           console.error('[数据库] [新增投诉] 失败：', err)    
           }    
         })
        },
//  添加
res:function(e) {
     const db=wx.cloud.database()
     db.collection('suggest').add({
       data:{
       taste:e.detail.value.taste,
       attendant:e.detail.value.attendant,
       fresh:e.detail.value.fresh,
       sanitation:e.detail.value.sanitation
       },
       success:res =>{
         this.setData({
          sugg:e.detail.value.sugg
         })
         wx.showToast({          
           title: '新增意见成功',        
           })       
            console.log('[数据库] [新增意见] 成功，意见 _id: ', res._id)
          },      
          fail: err => {       
             wx.showToast({          
               icon: 'none',          
               title: '新增意见失败'        
              })        
              console.error('[数据库] [新增意见] 失败：', err)    
              }    
            })
},
 //切换
 swiperView:function(event){
  //  console.log(event.detail.current)
  var currentIndex=event.detail.current
    this.setData({
        currentTab:currentIndex
    })
 },
 //全部评论
 navNews:function(event) {
     //需要修改currentTab变量  
    //  console.log(event.currentTarget.dataset.navindex)
     var navIndex=event.currentTarget.dataset.navindex
     this.setData({
      currentTab:navIndex
     })
 },
  //添加
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = util.formatTime(new Date());
    //  再通过setData更改Page()里面的data，动态更新页面的数据
     this.setData({
       time: time
     });
    var that=this;
    //用户
     wx:wx.getUattendantInfo({
       success:function(res){
      //  console.log(res)
            var avatarUrl='uattendantInfo.avatarUrl';
            var nickName='uattendantInfo.nickName';
            that.setData({
              [avatarUrl]:res.uattendantInfo.avatarUrl,
              [nickName]:res.uattendantInfo.nickName,
            }) 
       }
     })
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