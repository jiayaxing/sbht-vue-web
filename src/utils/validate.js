// element 登录验证
export function isvalidUsername(str) {
  const validUserName = /^\w{6,12}$/
  return validUserName.test(str.trim())
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 将日期转换为指定的格式 
 * @param {Object} dateStr   "1469281920000" "2016-07-23 21:52"
 * @param {Object} fmt   "yyyy.MM.dd" "yyyy/MM/dd" "yyyy-MM-dd"
 * eg:var time2 = new Date().format("yyyy-MM-dd");
 */
export function dateFormat(dateStr, fmt) {
  dateStr = new Date(dateStr);
  var o = {
    "M+": dateStr.getMonth() + 1, //月份 
    "d+": dateStr.getDate(), //日 
    "h+": dateStr.getHours(), //小时 
    "m+": dateStr.getMinutes(), //分 
    "s+": dateStr.getSeconds(), //秒 
    "q+": Math.floor((dateStr.getMonth() + 3) / 3), //季度 
    "S": dateStr.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (dateStr.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}