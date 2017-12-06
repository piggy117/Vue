// 导入需要的模块
const fs = require('fs')
// 先读取文件 再把文件写入指定的路径中
// fs.readFile('./files/1.txt','utf-8',(err,dataStr)=>{
//     if(err) return console.log('读取文件失败：'+ err.message)
//     // 写入到指定的文件中去
//     fs.writeFile('./files/1-copy.txt',dataStr,(err)=>{
//         if(err) return console.log('写入文件失败了：' + err.message)
//         console.log('恭喜，复制文件OK')
//     } )
// })

fs.copyFile('./files/1.txt','./files/1-copy1.txt',(err)=>{
    if(err)return console.log('写入文件失败：' + err.message)
    console.log('恭喜，复制文件成功')
})