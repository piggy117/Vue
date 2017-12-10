const express = require('express')

const path = require('path')

const app = express()

// template engine 
// 配置模板引擎的三大步：
// 1，安装 合适的模板引擎  运行  npm i ejs  -S
// 2，配置模板引擎
app.set('view engine', 'ejs')
// 3，配置模板引擎的路径
app.set('views','./views')
// 第一个参数是固定的，
// 第二个是模板页面存放的路径

// 导入自己的路由模块
const router = require('./04，router.js')

// 将对有对象，注册到app服务器上，这样每当有请求过来，就可以调用路由木块。来分发处理请求了
app.use(router)

app.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})