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
    service:[],
    complain:[],
    suggest:[],
    filePath:'',
 },
 goMenu:function(e){
      wx.switchTab({
        url: '../menu/menu',
      })
 },
 //时间
 getTime:function(){
   var time=util.formatTime(new Data())
   this.setData({
     time:time
   })
   console.log(time)
 },
 //图片预览
 preview:function(e){
         wx:wx.previewImage({
           current:e.target.dataset.id,
           urls: this.data.filePath
         })
 },
 //获取照片
 chooseimages:function(){
     var that=this;
     var arr=new Array();
     wx.chooseImage({
       count:3,   //九宫格
       sizeType: ['original', 'compressed'],
       sourceType: ['album', 'camera'],
       success:function(res){
         const filePath=res.tempFilePaths;
         for(var i=0;i<filePath.length;i++){
           arr.push(filePath[i]);
         }
         arr=arr.concat(that.data.filePath);
         that.setData({
           filePath:arr
         })
         console.log(arr)
       }
     })
 },
//  添加
res:function(e) {
  console.log(e.detail.value)
     const db=wx.cloud.database()
     db.collection('comment').add({
       data:{
          comment:e.detail.value.comment,
          mei:e.detail.value.mei,
          weidao:e.detail.value.weidao,
          huo:e.detail.value.huo,

       },
       success:res =>{
         console.log(e.detail.value)
        //  this.setData({
        //    comment:e.detail.vaule.comment,
        //    mei:e.detail.value.mei,
        //    weidao:e.detail.value.weidao,
        //    huo:e.detail.value.huo,
        //    money:e.detail.value.money
        //  })
         wx.showToast({          
           title: '新增评论成功',        
           })       
            console.log('[数据库] [新增评论] 成功，评论 _id: ', res._id)
          },      
          fail: err => {       
             wx.showToast({          
               icon: 'none',          
               title: '新增评论失败'        
              })        
              console.error('[数据库] [新增记录] 失败：', err)    
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
  // //添加
  // res:function(e){
  //   db.collection('comment').add({
  //     data:{
  //       comment:e.detail.value.comment
  //     },
  //     success:res=>{
  //       this.setData({
  //       commente:detail.value.comment  // 在返回结果中会包含新创建的记录的 _id
  //       })
  //       wx.showTobast({
  //         title:'新增评论成功',
  //       })
  //       console.log('[数据库][新增评论]成功,记录_id:',res._id)
  //     },
  //     fail:err=>{
  //       wx.showToast({
  //         icon:'none',
  //         title: '新增评论失败',
  //       })
  //       console.log('[数据库][新增评论]失败',err)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //用户
     wx:wx.getUserInfo({
       success:function(res){
      //  console.log(res)
            var avatarUrl='userInfo.avatarUrl';
            var nickName='userInfo.nickName';
            that.setData({
              [avatarUrl]:res.userInfo.avatarUrl,
              [nickName]:res.userInfo.nickName,
            })
       }
     })
     // 调用函数时，传入new Date()参数，返回值是日期和时间
     var time = util.formatTime(new Date());
    //  再通过setData更改Page()里面的data，动态更新页面的数据
     this.setData({
       time: time
     });
    const comment=db.collection('comment');
    const service=db.collection('service');
    const complain=db.collection('complain');
    const suggest=db.collection('suggest');
    comment.get().then(res=>{
    console.log(res);
    this.setData({
      comment:res.data, 
    })
   }).catch(err=>{
    console.log(err)
   });
   service.get().then(res=>{
     this.setData({
       service:res.data,
     })
   })
   complain.get().then(res=>{
     this.setData({
      complain:res.data
     })
   })
   suggest.get().then(res=>{
     this.setData({
      suggest:res.data
     })
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