const cloud = require('wx-server-sdk')
cloud.init()

//1，引入依赖
const tenpay = require('tenpay');

//2，配置参数
const config = {
  appid: 'wxc4cd250677e46366',
  mchid: '1566919821',
  partnerKey: 'chongqinghonglikejiyouxiangongsi',
  notify_url: 'https://www.jianshu.com',
  spbill_create_ip: '127.0.0.1'
};

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let {
    money
  } = event;
  //3,初始化
  const api = tenpay.init(config);

  //4，获取支付参数
  let result = await api.getPayParams({
    out_trade_no: Date.now(),
    body: '商品简单描述',
    total_fee: money,
    openid: wxContext.OPENID
  });
  return result
}