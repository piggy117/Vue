// 1，使用require来导入需要的模块
const fs = require ('fs')
fs.readFile('./files/1.txt', 'utf-8',(err, dataStr)=>{
    if (err) return console.log(err.message)
    console.log(dataStr)
})
// 第二个参数，必须传，并且，我们要读取的那个txt文件，也要改为utf-8格式