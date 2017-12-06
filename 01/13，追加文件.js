// appendFile

const fs = require('fs')

fs.appendFile('./files/1.txt','\n如果他真的存在，那么我一定会去',(err)=>{
    if(err) return console.log('追加文件失败：'+ err.message)
    console.log('追加文件成功了')
})