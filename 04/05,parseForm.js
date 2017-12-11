const querystring = require('querystring')
// 定义一个解析表单数据的中间件
function parseForm(req,res,next) {
    let dataStr = ''
    // 注意，data事件，可能会触发多次，因此，每一次拿到一小块的chunk数据，一定要拼接到dataStr
    req.on('data' , (chunk) => {
        dataStr += chunk
    })

    // 当触发req的end事件，就表示数据已经接收完毕了
    req.on('end',() =>{
        // 得到的这个result ，我们应该如何传递给下一个中间件呢，或者如何传递给下一个路由呢
        const result = querystring.parse(datastr)
        req.body = result
        next()
    })
}

module.exports = parseForm