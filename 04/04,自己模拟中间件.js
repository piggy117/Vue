// 导入express模块
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(myMiddleWareWriteLogs)

// 日志记录需求，
// 需求：每当客户端来请求服务器了，我们都要记录一下请求的时间和请求的URl地址，以及请求的方式

// 请求根路径
app.get('/',(req,res) => {
    res.send('ok')
})

// 请求POST API
app.post('/api/postinfo',(req,res) => {
    res.send('这是服务器处理的POST结果')
})

app.get('/index.html',(req,res) => {
    res.send('<h1>欢迎访问首页</h1>')
})

// 调用app..listen方法 。指定端口号启动web服务器
app.listen(3001,function() {
    console.log('http://127.0.0.1:3001')
})

// 写入日志的方法
// 定义一个写入日志的中间件
function myMiddleWareWriteLogs(req,res,next) {
    const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
    fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err) => {
        if(!err) console.log('写入OK')
        // 当这个日志中间件，把信息记录好之后，需要调用next函数，让处理过程进入到下一个处理环节
        next()
    })
}