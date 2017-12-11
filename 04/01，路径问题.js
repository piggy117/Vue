const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')

server.on('request',(req,res) => {
    const url = req.url
    if(url === '/a/b/index') {
        fs.readFile(path.join(__dirname,'./views/index.html'),(err,data) => {
            res.end(data)
        })

    }else if(url==='/assets/index.css') {
        fs.readFile(path.join(__dirname,'./assets/index.css'),(err,data) => {
            res.end(data)
        })
    }else {
        res.end('404')
    }
})

server.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})