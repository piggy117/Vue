const person = {
    name:'zs',
    age:11,
    gender:'女'
}
// 变量的结构赋值
let {name :name123,age,gender} = person 
name123 = '哇哈哈'
console.log(name123)