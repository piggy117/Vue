const http = require('http')
const server = http.createServer()
const urlModule = require('url')

server.on('request',(req,res) => {
    // 经过使用url模块的解析转换，并使用对象的解构赋值，把需要的pathname和query属性解构出来
    const { pathname : url,query } = urlModule.parse(req.url,true)
    const person={
        name:'zs',age:12,gender:'男'
    }

    if(url === '/api/getjsonp'){
        const str = `${query.callback}(${JSON.stringify(person)})`
        res.end(str)
    }else {
        res.end('404')
    }
})

server.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})