// 导入
const fs = require('fs')
const path = require('path')

const absPath = path.join(__dirname,'files/成绩.txt')
fs.readFile(absPath,'utf-8',(err,dataStr)=>{
    if(err) return console.log('读取文件失败：'+ err.message)

    // 设置一个变量，储存数组
    const arr = []
    for(let i = 0;i <dataStr.length;i++){
        arr[i] = dataStr[i]
        console.log(arr[i])
    }
    fs.writeFile('./files/成绩-ok.txt',dataStr,(err)=>{
        if(err) return console.log('写入文件失败：'+ err.message)
        console.log('恭喜，整理文件OK')
    })
})