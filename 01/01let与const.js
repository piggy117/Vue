// var a 
// console.log(a)
// a = 10
// 此时的输出值是undefined

// console.log(a)
// let a = 10;
// 使用let关键字，定义的变量，不存在变量提升的问题
// 所以输出值是    a is  not defined 未定义的


// function add(){
//     var a = 10;
// }
// console.log(a);
// 此时的输出值还是  像上面一样的，因为在JS中函数外边，是获取不到函数里面a的
// 所以时 a is not defined 

// {
//     let a = 10
// }
// console.log(a)
// 此时的let同上面的var一样，都受{}作用域的影响

// const定义的量，叫做常量，这个常量只要被定义了，那么今后永远无法重新定义赋值

// const b = 20
// b = 30
// console.log(b);
// let a = 10;
// a = 15;
// console.log(a)

// a   b  一起运行，就会报错，因为const定义变量之后是不能重新赋值的，而且也导致了后面的代码无法执行

const dog = {}
dog.name = '哈士奇'
dog.age = 12
dog.gender = 'man'
console.log(dog)