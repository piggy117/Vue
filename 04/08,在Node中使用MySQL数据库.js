// 安装一个MySQL 模块 第三方模块
// npm i mysql -S
const mysql = require('mysql')

// 如何使用
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mydb_12_9'
})

// 2,调用connect()  连接上数据库服务器
// conn.connect()

// 3,调用conn.query()方法来执行指定的SQL语句
const sqlStr = 'select * from users'

// 注意： 如果 并没有显示的调用conn.connect()方法，则在执行conn.query的时候，会先建立到数据库的连接，然后，在去执行sql语句
conn.query(sqStr,(err,result) => {
    console.log(err)
    console.log(results)
})


