const express = require('express')

const app = express()

// 托管静态页面
app.use('/views/',express.static('./views'))

// 如果在托管静态资源的时候，直接使用了app.use(express.static('./assets')) 方式，则访问assets目录下资源的时候，路径中，不能出现/assets;
// 但是，我们为了能有路径的只能提示，推荐在第一个参数的位置，手动挂在一个路径标识符，这就表示，将来托管的静态资源文件，在访问的时候，路径中必须要包含我们为其挂载的那个路径标识符

app.use('/assets',express.static('./assets'))

app.listen(3000,function() {
    console.log('http://127.0.0.1:3000')
})