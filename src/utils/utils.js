export const formatDate = date => {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  var day = date.getDate()
  day = day < 10 ? '0' + day : day
  return year + '-' + month + '-' + day
}
