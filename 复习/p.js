// // 创建元素的三种方法
// // / 第一种：通过JS 网页面上生成元素以及内容的方式
// document.write("<strong>哈哈哈</strong>")
// document.write("<strong>哈哈哈</strong>")

// // 缺点：无法往某一页面具体元素添加内容，
// var oBox = document.getElementById('box')
// oBox.onclick=function(){
//     // 如果你在时间里面，执行这个写入方法，它会把之前的页面上和已经添加进去的内容全部清除
//     // 文档流，打开页面的第一次，文档流会开启，页面里面的内容全部加进去，整个页面加载完毕，之后，文档流会关闭
//     // 你单击事件触发之后，执行这个document.write()他会再开启一个文档流，一个新的文档流，一旦开启，就会把原来的内容全部清空
//     document.write("<fioerjgnwj")
// }

// 第二种
// JS中操作dom是昂贵的，网页面里面添加元素或者修改元素，是需要花时间的
// innerHTML

// // 第三种
// var div = document.createElement('div')
// div.innerHTML = 'HHHHH'
// document.body.appendChild(div)

// function getStyle(obj,attr){
//     if(obj.currentStyle){
//         return obj.currentStyle[attr];
//     }else{
//         return getComputedStyle(obj)[attr];
//     }
// }

// function getStyle(obj,attr){
//     if(window.getComputedStyle){
//         return getComputedStyle(obj)[attr]
//     }else{
//         return obj.currentStyle[attr]
//     }
// }


// function first(obj){
//     // 传入obj，之后
//     // 如果一个子节点都没有，标准和非标准的浏览器获取不到元素节点，则firstEle不存在，那么返回null
//     // 如果里面只有一个文本节点，那么文本节点也是存在的，是真的，所以要再加一个条件限制住文本，firstEle.nodeType==1，只有firstEle类型是标签元素的时候，才可以
//     // <div> </div> 像这样的，标签里面有一个空格，或者回车，也算是文本，如果不加限定条件的话，也会获取到，所以必须加条件限制住
//     var firstEle = obj.firstElementChild || obj.firstChild;
//     if(firstEle && firstEle.nodeType == 1){
//         return firstEle;
//     }else{
//         return null;
//     }
// }

// function first(obj){
//     var firstEle = obj.firstElementChild || obj.firstChild;
//     if(firstEle && firstEle.nodeType == 1){
//         return firstEle
//     }else{
//         return null
//     }
// }

// function unbind(obj,evType,evFn){
//     if(obj.removeEventListener){
//         obj.removeEventListener(evType,evFn,false)
//     }else if(obj.detachEvent){
//         // 能找到obj对象，那一定可以找到obj身上属性，这个属性里面存的是之前的那个匿名函数
//         obj.detachEvent("on" + evType,obj.handle)
//     }else{
//         obj["on" + evType] = null
//     }
// }

// function bind(obj,evType,evFn){
//     // 给当前的对象，添加一个自定义属性，给当前的自定义属性上挂载匿名函数，也就是让匿名函数存到当前对象的属性里面
//     obj.handle = function(){
//         evFn.call(obj);
//     }

//     if(obj.addEventListener){
//         obj.addEventListener(evType,evFn,false);
//     }else if(obj.attachEvent){
//         obj.attachEvent("on"+evType,obj.handle);
//     }else{
//         obj["on"+evType] = evFn;
//     }
// }


// function $(id){
//     return document.getElementById(id)
// }
// function fn(){
//     alert(this.id)
// }

// $('box').onmoiseover = fn;
// $('box2').onmouseover = null;
// $('box3').onmouseover = fn;

// document.bosy.onclick = fn;


