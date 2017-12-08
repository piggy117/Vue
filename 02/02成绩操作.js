// 导入fs   和  path
const fs = require('fs')
const path = require('path')


// 先读取文件
fs.readFile(path.join(__dirname,'./files/成绩.txt'),'utf-8',(err,dataStr)=> {
    if(err) return console.log('读取文件失败：' + err.message)

    console.log(dataStr)
    // 在成绩.txt  里面，每一组之间都是由空格隔开的，我们可以根据空格分开
    const strArr = dataStr.split(' ')
    // console.log(strArr)
    //从输出的结果，，可以看出，两组数据之间，会有三个'' ，所以，我们需要将这些去掉
    // const strArr1 = strArr.trim()
    // console.log(strArr1)
    // 上述去两边空格的方法，报错了，因为trim只是string的方法，strArr是一个数组。

    // 我们可以重新定义一个数组。利用循环的方法来讲非空的数组成员加进去
    // console.log(strArr)
    let str = ''
    strArr.forEach((item,index) => {
        if(item.length>0){
            // console.log(item)
            // 小红=99
            // 我们可以按照“=”来分割
            const result = item.split('=')
            // console.log(result)
            // 接下来开始拼接
            // ['小红','99']
            // 输出值是上述那种样式的，所以，我们可以拼接成任意我们想要的
            const newScore= result[0] +':'+result[1]+'\n'
            // 然后将这些全部加到str里面 
            str += newScore
            // console.log(str)
           
        }
    })
     // 然后写入文件中
     fs.writeFile(path.join(__dirname,'./files/成绩-ok.js'),str.trim(),(err) => {
        if(err) return console.log('写入文件失败：' + err.message)

        console.log('写入文件成功')
    })
})