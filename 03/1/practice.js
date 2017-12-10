// 先导入 Node 中提供的核心模块  http
// const http = require('http')

// 创建一个服务器
// const server = http.createServer()

// 为这个server服务器，通过  on 办法，榜第一个事件
// 这个request什么时候触发呢？  
// 每当服务器接收到一个客户端的请求，就会立即触发这个，request事件
// 注意：我们在自己写服务器的时候，时刻记着，请求-处理-响应  这个通信模型

// 在服务器的  回调函数参数列表中，有两个参数，其中一个是request 第二个参数是response
// server.on('request',(req,res) => {
    // console.log('ok')
    // 需要注意的是：每当请求处理完毕，必须显示调用一下response对象的end方法，来结束这次响应，否则，客户端拿不到数据，在调用res.end方法的时候，可以传递要返回的客户端数据
    // res.end('hello world')
// })

// 启动服务器
// listen方法的
// 第一个参数：端口号
// 第二个参数：是IP地址，可选，如果不填写，默认是127.0.0.1
// 最后，还有一个callback，表示，当服务器正常启动之后，调用一下这个函数
// http://127.0.0.1:3000
// server.listen(3000,function(){
    // console.log('通知大家，服务器已经启动了')
// })