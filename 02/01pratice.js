// var info ={
//     name :'ll',
//     age:12,
//     id:1
//   }
//   const{id} = info
//   console.log(id)

// 导入fs模块
// const fs = require('fs')
// const path = require('path')

// 我们会根据之前学习前端的经验。潜意识认为，这里的./files/1.txt 是相对于我当前这个 01  文件来查找的
// 经过我们的验证，发现，第二步中，我们的认为是错误的，fs模块在根据相对路径。查找文件的时候，直接拿着相对路径个执行Node命令时，所在的根目录，直接做了拼接，因此，的出来的绝对路径可能不完整

// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr) => {
  // 失败了
  // if(err) return console.log('读取文件失败：' + err.message)

  // 成功的话
  // console.log(dataStr)
// })

// console.log(path.join(__dirname,'./files/1.txt'))

// __dirname  表示一层目录，当前这个JS文件所在的根目录
// console.log(__firname)
// __dirname   永远不会变化，./files/1.txt   这个相对路径也是写死的

// console.log(path.sep)

// 引入文件
// const fs = require('fs')
// const path = require('path')

// // 首先先读取文件
// fs.readFile(path.join(__dirname,'./files/成绩.txt'),'utf-8',(err,dataStr) => {
//   // 如果出错
//   if(err) return console.log('读取文件失败：' + err.message)
//   // 如果成功了
//   // console.log(dataStr)

//   // 现在我们已经读取成功了文件，需要将文件里面的内容进行操作
//   const arr = dataStr.split(' ')
//   // console.log(arr)
   
//   let result =''
//   arr.forEach((item,index) => {
//     if(item.length>0){
//       // console.log(item)
//       const str = item.split('=')
//       // console.log(str)
//       const data = str[0] + ':' + str[1] + '\n'
//       result += data;
//       // console.log(result)
//     }
//   })

//   // 写入文件
//   fs.writeFile(path.join(__dirname,'./files/成绩-OK.txt'),result,(err) => {
//     if(err) return console.log('读取文件失败：' + err.message)

//     console.log('写入文件成功')
//   })
// })


// ======读取文件信息========
// const fs = require('fs')
// const path = require('path')

// fs.stat(path.join(__dirname,'./files/1.txt'),(err,stats) =>{
//   if(err) return console.log('获取信息失败：' + err.message)
//   console.log(stats.size + '字节')
//   console.log(stats.isFile())
//   // console.log(stats)
// })


// ========获取指定目录下的文件名
// const fs = require('fs')
// const path = require('path')
// fs.readdir(path.join(__dirname,'./files'),(err,filenames)=>{
//   console.log(filenames)
// })


// path模块中的其他方法
// const path = require('path')
// const fpath = 'c'
// console.log(path.extname(fpath))
// console.log(path.dirname(fpath))

// 五个延时器

// let countFlag = 0;
// // 计数器
// for(let i = 0; i <5; i++){
//   setTimeout(()=>{
//     console.log('ok')
//     countFlag++
//     if(countFlag === 5){
//       console.log('五个延时器执行完了')
//     }
//   },1000)
// }


// 包的导入规则
// 1，当我们导入一个包的时候，会现在包的根目录中。查找一个叫做package.json的文件
// 2，如果由package.json 文件，则会继续查找这个文件中的，一个叫做main的属性
// 3，如果能找到main属性，则尝试加载main属性所指向的那个文件
// 4，如果这个文件了加载成功，则这个包，就已经悲惨正常require进来了。就可以正常使用了

const calc = require('./mycalc')

console.log(calc)
const result = calc.add(3,4)
console.log(result)
console.log(calc.multiply(5,5))


