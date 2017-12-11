const express = require('express')

const routerObj = express.Router()

routerObj.get('/',(req,res) => {
    
    res.send('首页')
})

routerObj.get('/movie',(req,res) => {
    res.send('电影')
})

// ===========================

// 1，中间件是一个函数
// 2，中间件这个函数，是一个路由处理函数
// 3，中间件这个函数，不但是路由处理函数，而且在参数列表中，还有一个很重要的形参，叫做next
// 4，这个next是一个函数，因此将来，我们可以在中间件中，调用这个跟next函数
// 5，中间件的表现形式：只要这个函数的形参列表中，有一个next函数，他就是中间件

// function myMiddleWare(req,res,next) {

// }

module.exports = routerObj