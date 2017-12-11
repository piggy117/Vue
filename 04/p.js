// function myLogs(req,res,next) {
//     const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
//     fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err) => {
//         if(!err) console.log('写入文件OK')
//         next()
//     })
// }

// function myLogs(req,res,next) {
//     const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}}`
//     fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err) => {
//         if(!err) console.log('写入文件OK')
//         next()
//     })
// }


// function myLogs(req,res,next) {
//     const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
//     fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err) => {
//         if(!err) console.log('写入文件OK')
//         next()
//     })
// }


const express = require('express')
const app = express()

// 导入中间件去记录日志
const writeLogs = require('./05.mywriteLogs.js')
// 注册中间件
app.use('writeLogs')

//导入中间件
const bodyParser = require('body-parser')

// 注册中间件
app.use(bodyParser.urlencoded({extneded:false}))

// 导入自己的路由没模块
const router = require('./05.router.js')

app.use(router)

app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})



