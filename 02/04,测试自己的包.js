// 包的导入规则：
// 1，当我们导入一个包的时候，会现在包的根目录查找一个叫做package.json的文件
// 2，如果由package.json 的文件，会继续查找这个文件里面的一个叫做main的属性
// 3，如果能找到main的属性，则尝试加载main属性所指向的那个文件
// 4，如果这个文件加载成功，则这个包就已经被正常require进来了，就可以正常使用了

const calc = require('./mycalc')

// console.log(calc)

const result = calc.remainder(5,2)
console.log(result)