const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request',function(req,res){
    const url = req.url
    if(url === '/a/b/index'){
        fs.readFile(path.join(__dirname,'/views/index2.html'),(err,data) =>{
            res.end(data)
        })
    }else if(url === '/q/w/e/1.css'){
        fs.readFile(path.join(__dirname,'/assets/css/index2.css'),(err,data) => {
            res.end(data)
        })
    }else{
        res.end('404')
    }

})

server.listen(3000,function() {
    console.log('server listen at http://127.0.0.1:3000')
})