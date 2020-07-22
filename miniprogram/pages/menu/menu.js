// 获取应用实例
const app=getApp();
const db=wx.cloud.database();
Page({
/*
*页面初始数据
*/ 
   data: {
       lunbo:[
        // {"src":"/images/lb1.png"},
        // {"src":"/images/lb2.jpg"},
        // {"src":"/images/lb2.png"},
        // {"src":"/images/lb3.png"},
        // {"src":"/images/lb4.png"},
        // {"src":"/images/lb5.png"},
        // {"src":"/images/lb6.png"},
        // {"src":"/images/lb7.png"},
        // {"src":"/images/lb8.png"},
        // {"src":"/images/lb9.png"}
       ],
        foods:[
        //   { src: '/images/nyg.jpg',id:'1',text: '牛油锅',price:88, active: false,num: 1},
        //   { src: '/images/qyg.png',id:'2',text: '清油锅',price:88, active: false,num: 1},
        //   { src: '/images/fqg.jpg',id:'3',text: '番茄锅',price:59, active: false,num: 1},
        //   { src: '/images/scyg.jpg',id:'4',text: '酸菜鱼锅',price:88, active: false,num: 1},
        //   { src: '/images/jtg.jpg',id:'5',text: '菌汤锅',price:59, active: false,num: 1},
        //   { src: '/images/sxg.jpg',id:'6',text: '三鲜锅',price:39, active: false,num: 1},
        //   { src: '/images/yyg.jpg',id:'7',text: '鸳鸯锅',price:59, active: false,num: 1},
        //   { src: '/images/jpfr.jpg', id: '8', text: '极品肥牛',price:42, active: false,num: 1},
        //   { src: '/images/jingpnr.jpg', id: '9' ,text: '精品肥牛',price:18, active: false,num: 1},
        //   { src: '/images/jpyr.jpg', id: '10', text: '极品肥羊',price:42, active: false,num: 1},
        //   { src: '/images/jingpyr.png', id: '11',text: '精品肥羊',price:18, active: false,num: 1},
        //   { src: '/images/beijixia.jpg', id: '12', text: '北极虾',price:25, active: false,num: 1},
        //   { src: '/images/qingxia.png', id: '13', text: '青虾',price:25, active: false,num: 1},
        //   { src: '/images/youyu.jpg', id: '14', text: '鱿鱼',price:25, active: false,num: 1},
        //   { src: '/images/wuhuarou.jpg', id: '15', text: '五花肉',price:26, active: false,num: 1},
        //   { src: '/images/xiaoshurou.jpg', id: '16', text: '小酥肉',price:20, active: false,num: 1},
        //   { src: '/images/yaohua.png', id: '17', text: '腰花',price:20, active: false,num: 1},
        //   { src: '/images/naohua.jpg', id: '18', text: '猪脑花',price:30, active: false,num: 1},
        //   { src: '/images/caoyupian.jpg', id: '19', text: '草鱼片',price:28, active: false,num: 1},
        //   { src: '/images/shanyu.jpg', id: '20', text: '鳝鱼',price:38, active: false,num: 1},
        //   { src: '/images/niqiu.jpg', id: '21', text: '泥鳅',price:28, active: false,num: 1},
        //   { src: '/images/cuipingchang.jpg', id: '22', text: '脆皮肠',price:15, active: false,num: 1},
        //   { src: '/images/huanghou.jpg', id: '23', text: '黄喉',price:32, active: false,num: 1},
        //   { src: '/images/huotuichang.jpg', id: '24', text: '火腿肠',price:12, active: false,num: 1},
        //   { src: '/images/tianweixiangchang.png', id: '25', text: '天味香肠',price:18, active: false,num: 1},
        //   { src: '/images/niuzaigu.jpg', id: '26', text: '牛仔骨',price:55, active: false,num: 1},
        //   { src: '/images/jiroupian.png', id: '27', text: '鸡肉片',price:32, active: false,num: 1},
        //   { src: '/images/jizhen.jpg', id: '28', text: '鸡胗',price:18, active: false,num: 1},
        //   { src: '/images/tuoguyazhang.jpg', id: '29', text: '脱骨鸭掌',price:28, active: false,num: 1},
        //   { src: '/images/yachang.jpg', id: '30', text: '鲜鸭肠',price:18, active: false,num: 1},
        //   { src: '/images/baiye.jpg', id: '31', text: '精品百叶',price:22, active: false,num: 1},
        //   { src: '/images/maodu.jpg', id: '32', text: '绿色毛肚',price:22, active: false,num: 1},
        //   { src: '/images/malaniurou.jpg', id: '33', text: '麻辣牛肉',price:32, active: false,num: 1},
        //   { src: '/images/nenniurou.jpg', id: '34', text: '嫩牛肉',price:32, active: false,num: 1},
        //   { src: '/images/wucanrou.png', id: '35', text: '梅林午餐肉',price:15, active: false,num: 1},
        //   { src: '/images/xianroubang.jpg', id: '36', text: '蟹肉棒',price:16, active: false,num: 1},
        //   { src: '/images/yaxue.jpg', id: '37', text: '鸭血',price:16, active: false,num: 1},       
        //   { src: '/images/anchongdan.png', id: '38', text: '鹌鹑蛋',price:20, active: false,num: 1},
        //   { src: '/images/jiaxinyuwan.jpg', id: '39', text: '包心鱼丸',price:25, active: false,num: 1},
        //   { src: '/images/yuwan.jpg', id: '40', text: '鱼丸',price:18, active: false,num: 1},
        //   { src: '/images/kaixinniurouwan.jpg', id: '41', text: '牛肉丸',price:38, active: false,num: 1},
        //   { src: '/images/saniaoniuwan.jpg', id: '42', text: '撒尿牛丸',price:18, active: false,num: 1},
        //   { src: '/images/jiaxinyudongfu.jpg', id: '43', text: '夹心鱼豆腐',price:25, active: false,num: 1},
        //   { src: '/images/yudoufu.jpg', id: '44', text: '鱼豆腐',price:18, active: false,num: 1},
        //   { src: '/images/xiawan.jpg', id: '45', text: '虾丸',price:18, active: false,num: 1},
        //   { src: '/images/xiahua.jpg', id: '46', text: '虾滑',price:18, active: false,num: 1},
        //   { src: '/images/yuhua.jpg', id: '47', text: '鱼滑',price:18, active: false,num: 1},
        //   { src: '/images/doufu.png', id: '48', text: '白豆腐',price:8, active: false,num: 1},
        //   { src: '/images/dongdoufu.jpg', id: '49', text: '冻豆腐',price:8, active: false,num: 1},
        //   { src: '/images/qianzhang.jpg', id: '50', text: '千张',price:8, active: false,num: 1},
        //   { src: '/images/youdoufupi.jpg', id: '51', text: '油豆腐皮',price:8, active: false,num: 1},
        //   { src: '/images/youzhadoufupi.jpg', id: '52', text: '油炸豆腐皮',price:12, active: false,num: 1},
        //   { src: '/images/fuzhu.jpg', id: '53', text: '腐竹',price:8, active: false,num: 1},
        //   { src: '/images/youzhafuzhu.jpg', id: '54', text: '油炸腐竹',price:12, active: false,num: 1},
        //   { src: '/images/mianjin.jpg', id: '55', text: '面筋',price:12, active: false,num: 1},
        //   { src: '/images/fensi.jpg', id: '56', text: '粉丝',price:8, active: false,num: 1},
        //   { src: '/images/tudoufen.png', id: '57', text: '土豆粉',price:8, active: false,num: 1},
        //   { src: '/images/kuanfen.jpg', id: '58', text: '宽粉',price:8, active: false,num: 1},
        //   { src: '/images/shuijingfensi.png', id: '59', text: '水晶粉',price:10, active: false,num: 1},
        //   { src: '/images/bocai.png', id: '60', text: '菠菜',price:8, active: false,num: 1},
        //   { src: '/images/congduan.jpg', id: '61', text: '葱段',price:6, active: false,num: 1},
        //   { src: '/images/dabaicai.jpg', id: '62', text: '大白菜',price:12, active: false,num: 1},
        //   { src: '/images/donggua.jpg', id: '63', text: '冬瓜',price:8, active: false,num: 1},
        //   { src: '/images/haidai.png', id: '64', text: '海带',price:8, active: false,num: 1},
        //   { src: '/images/hongshupian.png', id: '65', text: '红薯片',price:12, active: false,num: 1},
        //   { src: '/images/oupian.png', id: '66', text: '藕片',price:12, active: false,num: 1},
        //   { src: '/images/qingsun.jpg', id: '67', text: '青笋',price:16, active: false,num: 1},
        //   { src: '/images/shanyao.jpg', id: '68', text: '山药',price:16, active: false,num: 1},
        //   { src: '/images/shengcai.jpg', id: '69', text: '生菜',price:8, active: false,num: 1},
        //   { src: '/images/tianyumi.jpg', id: '70', text: '甜玉米',price:12, active: false,num: 1},
        //   { src: '/images/tonghao.jpg', id: '71', text: '茼蒿',price:8, active: false,num: 1},
        //   { src: '/images/tudoupian.png', id: '72', text: '土豆片',price:8, active: false,num: 1},
        //   { src: '/images/wawacao.jpg', id: '73', text: '娃娃菜',price:8, active: false,num: 1},
        //   { src: '/images/xiangcai.png', id: '74', text: '香菜',price:6, active: false,num: 1},
        //   { src: '/images/youmaicai.jpg', id: '75', text: '油麦菜',price:8, active: false,num: 1},
        //   { src: '/images/yuanshengcai.jpg', id: '76', text: '圆生菜',price:8, active: false,num: 1},
        //   { src: '/images/bailuobu.jpg', id: '77', text: '白萝卜',price:6, active: false,num: 1},
        //   { src: '/images/shucaipinpan.jpg', id: '78', text: '蔬菜拼盘',price:30, active: false,num: 1},
        //   { src: '/images/muer.jpg', id: '79', text: '木耳',price:16, active: false,num: 1},
        //   { src: '/images/jinzhenggu.jpg', id: '80', text: '金针菇',price:12, active: false,num: 1},
        //   { src: '/images/pingu.jpg', id: '81', text: '平菇',price:8, active: false,num: 1 },
        //   { src: '/images/xianggu.jpg', id: '82', text: '香菇',price:12, active: false,num: 1},
        //   { src: '/images/xinbaogu.jpg', id: '83', text: '杏鲍菇',price:18, active: false,num: 1},
        //   { src: '/images/jungupingpan.jpg', id: '84', text: '菌菇拼盘',price:38, active: false,num: 1},
        //   { src: '/images/fangbianmian.png', id: '85', text: '方便面',price:5, active: false,num: 1},
        //   { src: '/images/huimian.jpg', id: '86', text: '烩面',price:3, active: false,num: 1},
        //   { src: '/images/longxunmian.png', id: '87', text: '龙须面',price:5, active: false,num: 1},
        //   { src: '/images/mifan.jpg', id: '88', text: '米饭',price:2, active: false,num: 1},
        //   { src: '/images/shouganmian.jpg', id: '89', text: '手擀面',price:6, active: false,num: 1},
        //   { src: '/images/yangzhouchaofan.jpg', id: '90', text: '扬州炒饭',price:8, active: false,num: 1},
        //   { src: '/images/hongtangchiba.png', id: '91', text: '红糖滋粑',price:28, active: false,num: 1},
        //   { src: '/images/jinyingmantou.png', id: '92', text: '金银小馒头',price:12, active: false,num: 1},
        //   { src: '/images/matuan.png', id: '93', text: '麻团',price:10, active: false,num: 1},
        //   { src: '/images/nanguabing.jpg', id: '94', text: '南瓜饼',price:10, active: false,num: 1},
        //   { src: '/images/xiangyubing.jpg', id: '95', text: '香芋饼',price:10, active: false,num: 1},
        //   { src: '/images/tangyuan.jpg', id: '96', text: '汤圆',price:8, active: false,num: 1},
        //   { src: '/images/bingfen.png', id: '97', text: '冰粉',price:5, active: false,num: 1},
        // { src: '/images/suanmeitang.jpg', id: '98', text: '酸梅汤',price:8, active: false,num: 1},
        // { src: '/images/daguolicheng.png', id: '99', text: '大果粒橙',price:12, active: false,num: 1},
        // { src: '/images/xiaoguolicheng.jpg', id: '100', text: '小果粒橙',price:5, active: false,num: 1},
        // { src: '/images/daxuebi.png', id: '101', text: '大雪碧',price:12, active: false,num: 1},
        // { src: '/images/xiaoxuebi.jpg', id: '102', text: '小雪碧',price:5, active: false,num: 1},
        // { src: '/images/tingzhuangxuebi.jpg', id: '103', text: '听装雪碧',price:4, active: false,num: 1},
        // { src: '/images/dakele.png', id: '104', text: '大可乐',price:12, active: false,num: 1},
        // { src: '/images/xiaokele.png', id: '105', text: '小可乐',price:5, active: false,num: 1},
        // { src: '/images/tingzhuangkele.png', id: '106', text: '听装可乐',price:4, active: false,num: 1},
        // { src: '/images/jiaduobao.jpg', id: '107', text: '听装加多宝',price:6, active: false,num: 1},
        // { src: '/images/lulu.jpg', id: '108', text: '听装露露',price:5, active: false,num: 1},
        // { src: '/images/xihhuazhi.jpg', id: '109', text: '西瓜汁',price:20, active: false,num: 1},
        // { src: '/images/guopi.jpg', id: '110', text: '果啤',price:5, active: false,num: 1},
        //   { src: '/images/qingdaochunsheng.jpg', id: '111', text: '青岛纯生',price:15, active: false,num: 1},
        //   { src: '/images/qingdaopijiu.jpg', id: '112', text: '青岛啤酒',price:8, active: false,num: 1},
        //   { src: '/images/yongchuangtanya.jpg', id: '113', text: '勇闯天涯',price:5, active: false,num: 1},
        //   { src: '/images/erguotou.jpg', id: '114', text: '二锅头',price:20, active: false,num: 1},
        //   { src: '/images/guojiao.jpg', id: '115', text: '国窖',price:1480, active: false,num: 1},
        //   { src: '/images/jiannanchun.jpg', id: '116', text: '剑南春',price:788, active: false,num: 1},
        //   { src: '/images/jiangxiaobai.png', id: '117', text: '江小白',price:25, active: false,num: 1},
        //   { src: '/images/wuliangye.png', id: '118', text: '五粮液',price:1480, active: false,num: 1},
        //   { src: '/images/liaowan.jpg', id: '119', text: '料碗',price:9, active: false,num: 1 },
        //   { src: '/images/kuaitou.jpg', id: '120', text: '筷头',price:1, active: false,num: 1},
        //   { src: '/images/dabaohe.jpg', id: '121', text: '大打包盒',price:3, active: false,num: 1 },
        //   { src: '/images/xiaodabaohe.jpg', id: '122', text:'小打包盒',price:5, active: false,num: 1},
      ],
      //商品数量和价格
      orderCount:{
        num:0,
        sum:0
      },
      bottomFlag:false,
      //订单
      orders:true,
    },
    //添加商品操作
    addOrder:function(event) {
      console.log(event)
        let that=this;
        let id=event.target.dataset.id;
        let index=event.target.dataset.index;
        console.log(this.data)
        let subOrders=[];     //购物单列表存储数据
        let param=this.data.foods[index];
        // param.active ? param.active=false : param.active=true;
        param.active ? param.active=true : param.active=true;
        this.data.foods.splice(index,1,param);    //改变添加按钮的状态
        that.setData({
          foods:this.data.foods
        });
         // 将已经确定的菜单添加到购物单列表
        this.data.foods.forEach(item =>{
          if(item.active){
            subOrders.push(item)
          }
        });
        // 判断底部提交菜单显示和隐藏
        if(subOrders.length ==0) {
          that.setData({
            bottomFlag:false
          });
        }else{
          that.setData({
            bottomFlag:true
          });
        }
        let num=subOrders.length;
        let sum =0 ;
        subOrders.forEach(item =>{
          //总计
          sum+=item.price;
        });
        let orderCount ={
          num,
          sum
        }
  this.setData({      // 设置显示对应的总数和全部价钱
    orderCount
  });
  // 将选中的商品存储在本地
  // wx.setStorage({
  //   key: "orders",
  //   data: subOrders
  // });
  // console.log(event.detail.value)
  db.collection('subOrders').add({
    data:{
      subOrders
    },
    success:res =>{
      this.setData({
        subOrders
      })
      wx.showToast({          
        title: '新增商品成功',        
        })       
         console.log('[数据库] [新增商品] 成功，商品 _id: ', res._id)
       },      
       fail: err => {       
          wx.showToast({          
            icon: 'none',          
            title: '新增商品'        
           })        
           console.error('[数据库] [新增商品] 失败：', err)    
           }    
         })
 }, 
  // 点击去购物车结账
cart: function() {
  let that = this;
  // 判断是否有选中商品
  if (that.data.orderCount.num !== 0) {
    // 跳转到购物车订单
    wx.redirectTo({
      url: '/pages/order/order',
    });
  } else {
    wx.showToast({
      title: '您未选中任何商品',
      icon: 'none',
      duration: 2000
    })
  }
},
onLoad: function (res) {
//   wx.cloud.init({ traceUser:true   })   //通过云函数获取foodslist列表   wx.cloud.callFunction({name:'foodsList',data:{}})}
  // 调用默认环境的引用
  const db=wx.cloud.database();
  const foods=db.collection('foods');
  const lunbo=db.collection('lunbo');// //   foods.get({ success(res) {   console.log(res)  }, fail(err){console.log(err); } })
foods.get().then(res=>{
  console.log(res);
  this.setData({
    foods:res.data,
  })
}).catch(err=>{
  console.log(err)
})
lunbo.get().then(res=>{
  this.setData({
    lunbo:res.data
  })
})
  //  wx.cloud.callFunction({
  //    name:foodsList,
  //    data:{},
  //    success:function(res){
  //      console.log(res.result)
  //    },
  //    fail:console.error
  //  })

},
//下拉刷新
onPullDownRefresh:function()
{
wx.showNavigationBarLoading() //在标题栏中显示加载
//模拟加载
setTimeout(function()
{
// complete
wx.hideNavigationBarLoading() //完成停止加载
wx.stopPullDownRefresh() //停止下拉刷新
},1500);
},
})
