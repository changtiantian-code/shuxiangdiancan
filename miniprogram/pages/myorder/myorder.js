//获取应用实例
const app=getApp();
const db=wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      subOrders:[],
      remark:[]
  },
  goComtent:function(e){
    wx.reLaunch({
      url: '../mycomment/mycomment',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
     const subOrders=db.collection('subOrders');
     const remark=db.collection('remark');
       let that=this;
     subOrders.get().then(res=>{
       console.log(res.data)
      //  console.log(res.data[0].subOrders),
      for(var i=0;i<res.data.length;i++){
        this.setData({
          subOrders:res.data[i].subOrders,
        })
      }
     }).catch(err=>{
      console.log(err)
     });
     remark.get().then(res=>{
      //  console.log(res.data.pop())
      console.log(res.data)
      // console.log(res.data.length)

      for(var j=0;j<res.data.length;j++){
      this.setData({
        remark:res.data
       })
      }
    }).catch(err=>{
     console.log(err)
    });
    //  subOrders.where({
    //    subOrders:this.data.subOrders
    //  }).get({
    //    success:res=>{
    //      this.setData({
    //        subsubOrders:JSON.stringify(res.data)
    //      })
    //      console.log('[数据库] [查询记录] 成功: ', res)

    //    }
    // .field({
    //   description: true,
    //   done: true,
    //   progress: true
    //   })
     
  }
 
  })