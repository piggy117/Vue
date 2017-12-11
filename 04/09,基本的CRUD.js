const mysql = require('mysql')
const conn = mysql.sreateConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mydb_12_9'
})

const sqlStr = 'update users set isdel=1 where id=2'
conn.query(sqlStr,(err,results) => {
    console.log(err)
    console.log(results)
})