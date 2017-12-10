const http = require('http')
const server = http.createServer()
server.on('request',(req,res) =>{
    const url = req.url
    const method = req.method.toLowerCase()

    res.writeHeader(200,{
        "Content-Type":'text/html;charset=utf-8'
    })
    if(method === 'get' && url === '/index.html'){
        res.end('<h3>首页</h3>')
    }else if(method === 'get' && url === '/about.html'){
        res.end('<h3>关于</h3>')
    }else if(method === 'get' && url === '/movie.html'){
        res.end('<h3>电影</h3>')
    }else if(method === 'get' && url === '/api/postinfo'){
        res.end('您发送的是POST请求')
    }else{
        res.end('出错了')
    }
})
server.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
})