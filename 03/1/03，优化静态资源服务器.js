const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request',(req,res) => {
    const method = req.method.toLowerCase()
    const url = req.url

    readStaticFile(res,url)
})

server.listen(3000,() => {
    console.log('http://127.0.0.1:3000')
})

function readStaticFile(res,url) {
    fs.readFile(path.join(__dirname,url),(err,data) => {
        if(err) return res.end('404')
        res.end(data)
    })
}