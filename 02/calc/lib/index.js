// 先请求所需要的文件
const add = require('./add.js')

const subtract = require('./subtract.js')

const multiply = require('./multiply.js')

const devide = require('./devide.js')

const remainder = require('./remainder.js')


// 暴露文件
module.exports = {
    add,
    subtract,
    multiply,
    devide,
    remainder
}