// const cloud = require('wx-server-sdk')
// cloud.init({
//   env: cloud.ginasxsb-ysb0p
// })
// const db = cloud.database()
// const MAX_LIMIT = 100
// exports.main = async (event, context) => {
//   // 先取出集合记录总数
//   const countResult = await db.collection('foods').count()
//   const total = countResult.total
//   // 计算需分几次取
//   const batchTimes = Math.ceil(total / 100)
//   // 承载所有读操作的 promise 的数组
//   const tasks = []
//   for (let i = 0; i < batchTimes; i++) {
//     const promise = db.collection('foods').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
//     tasks.push(promise)
//   }
//   // 等待所有
//   return (await Promise.all(tasks)).reduce((acc, cur) => {
//     return {
//       data: acc.data.concat(cur.data),
//       errMsg: acc.errMsg,
//     }
//   })
// }

//云函数入口文件
const cloud=require('wx-server-sdk')
cloud.init()
//初始化数据库
const db=cloud.database()
const rp=require('request-promise');
//获取foods这个歌单
const foodsCollection=db.collection('foods')
//每次取100条
const MAX_LIMIT=100
//云函数入口函数
exports.main=async(event,context)=>{
    //突破获取小程序云数据库100条的限制
    //获取总的条数 返回的是对象
    const contResult=await foodsCollection.count()
    //返回数据的条数
    const total =contResult.toatal
    //计算一共要取多少次
    const batchTimes=Math.ceil(total/MAX_LIMIT)
    //数组存储的
    const tasks=[]
    for(let i=0;i<batchTimes;i++){
      //skip：当前从第几条开始取，limit：取的条数
      let promise=foodsCollection.skip(i*MAX_LIMIT).limit(MAX_LIMIT).get()
      tasks.push(promise)
    }
    //foods 数据
    let foods={
      data:[]
    }
    if(tasks.length>0){
       //await Promise.all(tasks) 等待当前所有任务完成以后,acc：之前的值，cur：当前遍历的值
       foods=(await Promise.all(tasks)).reduce((acc,cur)=>{
         return {
           data:acc.data.concat(cur,data)
         }
       })
    }
}
