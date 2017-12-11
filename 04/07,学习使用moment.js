// 导入moment模块
const moment = require('moment')

// cosnole.log(moment instanceof Function)
// console.log(moment)

const dtStr = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(stStr)

// 包的查找规则
// 1，会根据包的名称，直接在当前项目的额根目录中，去查找一个叫做node_modules的文件
// 2，如果有，则在node_modules中，继续查找一个叫做模块引用名称的文件
// 3，如果有则在模块对应的文件中，查找一个叫做，package.json的文件
// 4，如果有package，json则查找其中的main属性，并尝试加载main指定的文件作为入口
// 5，如果能正常价在main属性中指定的文件，则模块/包加载成功
// 6，如果在package.json文件中，没有main属性，则会以此尝试加载包根目录中index.js   ,index.json      index.node
// 7，如果在宝的根目录中，根本没有package.jsonn文件，或者在node-modules,查找规则同上
// 8，如果再上一层目录中还是没有找到对应的木块，则会继续向上翻，直到翻到项目所在的磁盘根目录位置
// 9，如果翻到了磁盘的根目录中了，还是没有找到，会报错！cannot find module ****