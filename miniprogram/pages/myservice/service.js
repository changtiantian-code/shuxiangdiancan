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
    enthusiasmvice:[]
 },
//  添加
res:function(e) {
  console.log(e.detail.value)
     const db=wx.cloud.database()
     db.collection('enthusiasmvice').add({
       data:{
          environment:e.detail.value.environment,
          sanitation:e.detail.value.sanitation,
          // speend:e.detial.value.speend,
          spend:e.detail.value.spend,
          enthusiasm:e.detail.value.enthusiasm,
          expression:e.detail.value.expression,
          procedure:e.detail.value.procedure,
          position:e.detail.value.position
       },
       success:res =>{
         this.setData({
          environment:e.detail.value.environment,
          sanitation:e.detail.value.sanitation,
          speend:e.detial.value.speend,
          enthusiasm:e.detail.value.enthusiasm,
          expression:e.detail.value.expression,
          procedure:e.detail.value.procedure,
          position:e.detail.value.position
         })
         wx.showToast({          
           title: '新增感受成功',        
           })       
            console.log('[数据库] [新增感受] 成功，感受_id: ', res._id)
          },      
          fail: err => {       
             wx.showToast({          
               icon: 'none',          
               title: '新增感受失败'        
              })        
              console.error('[数据库] [新增感受] 失败：', err)    
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //用户
     wx:wx.getUenthusiasmInfo({
       success:function(res){
      //  console.log(res)
            var avatarUrl='uenthusiasmInfo.avatarUrl';
            var nickName='uenthusiasmInfo.nickName';
            that.setData({
              [avatarUrl]:res.uenthusiasmInfo.avatarUrl,
              [nickName]:res.uenthusiasmInfo.nickName,
            })
       }
     })
     // 调用函数时，传入new Date()参数，返回值是日期和时间
     var time = util.formatTime(new Date());
     // 再通过setData更改Page()里面的data，动态更新页面的数据
     this.setData({
       time: time
     });
    const db=wx.cloud.database();
    const comment=db.collection('comment');
    comment.get().then(res=>{
    console.log(res);
    this.setData({
      comment:res.data, 
    })
   }).catch(err=>{
    console.log(err)
   });
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