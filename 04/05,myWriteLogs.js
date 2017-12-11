const fs = require('fs')
const path = require('path')

// 记录日志的中间件
function writeLogs(req,res,next) {
    // 要记录的信息
    const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}`
    fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err) => {
        if(err) return console.log('写入日志失败')
        console.log('写入日志成功')
        next()
    })
}

module.exports = writeLogs