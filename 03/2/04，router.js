// 后端路由：前端请求的URL地址，必然会对应一个后端的额处理函数
// 后端的路由，主要用来分发请求的
// 请求  -  处理  - 响应

const express = require('express')
// 创建express类型的路由对象
const router = express.Router()

const person1 = {
    name:'俊哥',
    age:'34',
    hobby:['吃饭','睡觉','撩妹']
}

const xiaofu = {
    name:'小付',
    age:'12',
    hobby:['吃饭','敲代码']
}

const xiaogang = {
    name:'小刚',
    age:'23',
    hobby:['睡觉','(๑′ᴗ‵๑)']
}

router.get('/',(req,res) => {
    res.render('index',person1)
})

router.get('/xiaogang',(req,res) => {
    res.render('xiaoganggang.ejs',xiaogang)
})

router.get('/xiaofu',(req,res) => {
    res.render('xiao',xiaofu)
})

// router.get('a',(req,res) => {
//     res.render('b',object)
// })
// 其中上面的  a  ,只是一个标识符，在这个地方写任何东西都可以，
// 只要这里的   a   和地址栏中输入的一样即可
// b  第一个参数：只有两种写法：可以写你渲染的那个页面，也可以不加后缀名
// 第二个参数就是你要渲染的对象

module.exports = router