const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// const formateDate=data=>{
//   const year=data.getFullYear();
//   const month=data.getMonth()+1;
//   const day=data.getDate()

//   return [year,month,day].map(formatNumber).join('-')
// }
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  // formateDate:formateDate
}
