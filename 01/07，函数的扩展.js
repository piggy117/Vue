// 形参默认值
// function add(x,y=0){
//     return x+y;

// }
// console.log(add(1))
// let person ={ name:'zs',age:20}

// 解析赋值 和形参默认值结合使用
// function add({x,y=0}){
//     return x+y;
// }

// const result = add({x:3})
// console.log(result)

// rest 参数
function add(...args){
    // 在定义方法的时候，方法的形参列表中使用的是rest的参数
    // args是arguments的缩写
    let total = 0;
    for(let i = 0; i <args.length;i++){
        total += args[i]
    }
    console.log(total)
}

// 在调用add方法的时候，参数个数，可能不确定，...表示扩展运算符
let arr = [1,2,3,4,5]
add(...arr)
