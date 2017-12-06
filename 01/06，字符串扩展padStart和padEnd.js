// 2012-01-01 12:02:30

// 获取当前的日期对象
const dt = new Date()
const y = dt.getFullYear()
const m = dt.getMonth()  //0-11
// const d = dt.getDate() < 10? '0' + dt.getDate():dt.getDate()
const d = dt.getDate().toString().padStart(2,'0')
// 参数1：填充完毕之后，总长度是多少
const hh = dt.getHours()
const mm = dt.getMinutes()
const ss = dt.getSeconds().toString().padStart(3,'0')
const dateStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
console.log(dateStr)

// const str = '123'
// 在前面填充3个0，在后面。填充3 个o
const str = '123'
const result = str.padStart(6,'0').padEnd(9,'o')
console.log(result)
