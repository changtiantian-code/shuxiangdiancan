// pages/pay/pay.js
const app=getApp();
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 统计商品数量和价格
  orderCount: {
    num: 0,
    sum: 0
  },
  bottomFlag: false,
  // 提交的订单
  orders: true,
  foods: [],
  //输入框中的用餐人数
  peopleNum:0,
  //用餐人数输入框获取焦点
  peopleNum:false,
  //phone
  phone:"",
  //备注
  remark:"",
  },
  //支付按钮
  bindpay:function() {
    wx.showModal({
      title: '提示',
      content:"是否支付",
      success: function (res) {
        if(res.confirm){
          wx.redirectTo({
            url: '/pages/pay/pay',
          },5000)
        }else{
          wx.redirectTo({
            url: '../menu/menu',
          })
        }
      },
    })
  },
//备注信息
     res:function(e){
      const db=wx.cloud.database()
      db.collection('remark').add({
        data:{
          name:e.detail.value.name,
          phone:e.detail.value.phone,
          data:e.detail.value.data,
          duration:e.detail.value.duration,
          time:e.detail.value.time,
          peopleNum:e.detail.value.peopleNum,
          remark:e.detail.value.remark,
        },
        success:res =>{
          this.setData({
           name:e.detail.value.name,
            phone:e.detail.value.phone,
            data:e.detail.value.data,
            duration:e.detail.value.duration,
            time:e.detail.value.time,
            peopleNum:e.detail.value.peopleNum,
            remark:e.detail.value.remark,
          })
          wx.showToast({          
            title: '新增备注成功',        
            })       
             console.log('[数据库] [新增备注] 成功，备注 _id: ', res._id)
           },      
           fail: err => {       
              wx.showToast({          
                icon: 'none',          
                title: '新增评论备注'        
               })        
               console.error('[数据库] [新增备注] 失败：', err)    
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