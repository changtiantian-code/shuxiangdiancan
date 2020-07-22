// pages/user/login/login.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone: '', 
      password:''
  },
  
  //登录
  submit:function(e) {
    console.log(e)
      wx.request({
        url: '接口',
       success:function(res){
         console.log(res)
         if(res.statusCode==200) {
           if(res.data.error==true){
             wx.showToast({
               title:'网络错误',
               icon:'none',
               duration:3000
             })
           }else{
             wx.setStorage({
               data: res.data.phone,
               key: 'phone',
             });
             wx.showToast({
               title: '登陆成功',
               icon:'Yes',
               duration:3000,
               success:function() {
                 setTimeout( function() {
                   wx.switchTab({
                     //暂时不确定
                     url: 'url',
                 }, 3000)
                })
              }
            })
           }
          }
       }
      })
  },
  //密码
inputPwd:function(e) {
  console.log(e)
  this.setData({ 
    password:e.detail.value 
    }) 
},
//手机号
inputPhone:function(e) {
  console.log(e)
  this.setData({ 
    phone:e.detail.value 
    }) 
},
      })