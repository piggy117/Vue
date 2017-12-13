# JS基础

### 1，Number，parseInt，parseFloat区别

```javascript
`Number()`
可以将任意值转换成数值，如果，要转换的字符串中有一个不是数值的字符，返回NaN
`parseInt()`
var num1 = parseInt("12.3abc");  
// 返回12，如果第一个字符是数字会解析知道遇到非数字结束
var num2 = parseInt("abc123");  
// 返回NaN，如果第一个字符不是数字或者符号就返回NaN
`parseFloat()`
同parseInt()，
不同的是parseInt转换的是整数，parseFloat转换的是小数
```

| 输出值       | Number() | parseInt() | parseFloat() |
| --------- | -------- | ---------- | ------------ |
| ' '       | 0        | NaN        | NaN          |
| null      | 0        | NaN        | NaN          |
| undefined | NaN      | NaN        | NaN          |

### 2，强制转换和隐式转换

- 上面Number，parseInt，parseFloat转换是属于**强制转换** 
- 隐式转换：加减乘除；**`+  -  *  \`** 

### 3，isNaN

- 是数字返回false
- 不是数字就返回true
- isNaN有一个隐式转换，isNaN('123')  返回false，

### 4，toString()和string()区别

|           | toString()    | String()  |
| --------- | ------------- | --------- |
| ' '       | `     `   （空） | `  `(空)   |
| undefined | 报错            | undefined |
| null      | 报错            | null      |

````javascript
`toString()没有undefined和null方法`
var num = 10;
console.log(num.toString(8))
8代表8进制的意思
String(2) => '2'
````

### 5，循环方法

- 循环数组：for，for  in ，forEach，Each（JQuery）
- 循环对象：for in   each(JQuery)

### 6，each的两种用法

- `$list.each(function(index,item){})`；jquery元素集的一个方法，只能jquery对象调用
- `$.each(arr,function(index,item){})`；工具函数，可以是变量，jquery元素集，对象，数组都可以调用

### 7，Array长度问题

var arr = new Array(3)===>arr 的长度是3

````javascript
var arr = []
arr[0] =1;
arr[1] =2;
arr[5] =5;
console.log(narr)//          [1,2,empty*3,5]
console.log(arr.length)//        6
````

### 8，获取对象

获取的方法中经常使用的是：

- getElementById()
- getElementsByTagName()
- getElementsByClassName()

**注意** ：只有第一个是必须用document来获取的，后面的两个是也可以用父元素来获取的

### 9，样式隐藏

| 操作方法               | 是否占位 |
| ------------------ | ---- |
| display= none      | 不占位  |
| visibility= hidden | 占位   |
| opacity = "0"      | 占位   |

### 10，A.childNodes与A.children 

- A.childNodes()，A.children()，A元素里面的孩子们，只有”儿子“；只读属性；
- A.childNodes()
  - 标准浏览器：包含空白文本节点以及元素节点
  - 非标准：只包含元素节点
- A.children()
  - 没有兼容问题
  - 不包含空白文本

### 11，firstChild和firstElementChild区别

- A.firstChild，A.firstElementChild：只读属性；A元素的第一个孩子，直接子元素
- A.firstChild：
  - 标准浏览器：包含空白文本和元素节点
  - 非标准：只包含元素节点
- A.firstElementChild：
  - 同样是标准浏览器：只包含元素节点
- 所以为了兼容需要封装函数：返回JS复习.xMind


### 12，保留字，关键字

保留字：语言中已经定义过的字，使用者不能再将这些字作为变量名或过程名使用

关键字：在语言中有特定含义，成为语法中一部分的那些字

name，就是保留字

### 13，table表格

table表格中，完整的格式是

````html
<table>
   <thead>
      <tr>
        <th>标题</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>内容</th>
      </tr>
   </tbody>
</table>
````

即使不写thead和tbody，在浏览器中默认是存在的，但是可能达不到我们想要的结果

### 14，鼠标事件中，移上与移出

1，**mouseover** ：鼠标移上            **mouseout** ：鼠标移开

2，**mouseenter** ：鼠标进入          **mouseleave** ：鼠标离开

1中的两个事件默认有冒泡事件，而2中的两个事件是没有冒泡事件的；并且，2中的两个事件不论穿不穿过子元素，都不会触发父元素的事件，而1中会触发

另外：mouseover：鼠标指针穿过任何子元素，都会触发该事件

​           mouseenter：只有鼠标指针穿过被选元素时，才会触发事件；

详见   Jquery第一天的京剧小人案例

### 15，根据选择器获取元素

````javascript
var text = document.querySelector('#text');
console.log(text);

它获取的是对应的选择器 ID（"#box"）, class(".box")，标签（"div"），属性（"a[target]"）选择到的元素  
`如果是多个 则只获取第一个,根据HTML结构决定，先书写的那个会被获取到`
在IE7以及以下 不支持

var boxes = document.querySelectorAll('.box');
for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  console.log(box);
}
它通过对应的选择器获取的是`所有的元素`  获取是一个集合列表 需要通过下标或者索引去找对应的    在IE7以及以下 不支持
````

### 16，this指向问题

````javascript
1，
function fn(){
  console.log(this)    //window
}
fn()
函数的直接调用，函数内部的this指向window，相当于window在调用函数（window.fn()）
````

- ​

````javascript
2，
function fn(){
  console.log(this)         //fn{}
}
var fn1 = new fn()   
通过new 的方式调用函数，那么这个函数就是一个构造函数，里面的this是一个隐式对象，虚拟的对象，可以理解为是一个初始化模型，打印出来的几乎是当前的构造函数fn{}
````

- ​

````javascript
3，
var obj = {
  fn:function(){
    console.log(this)             //obj
  }
}
obj.fn()   
obj这个对象，在调用它的方法，这个方法里面的this，指向当前的对象
````

- ​

````javascript
4，
var oBox = document.getElementById('box')
oBox.onclick = fn;
通过一个事件来触发这个函数，那么这个函数里面的this指向 触发该事件的那个元素对象
````

### 17，事件处理函数

添加事件侦听器 ；第三个函数是 冒泡，也就是不捕获

|         | obj元素.on事件名称 = 事件处理函数           | obj元素.addEventListener(事件类型，事件处理函数，false) | obj元素.attachEvent(on+事件类型，事件处理函数) |
| ------- | ------------------------------- | ---------------------------------------- | --------------------------------- |
| 是否需要加on | 需要                              | 不需要                                      | 需要                                |
| 执行顺序    | 同一个对象，同一个事件，绑定多个事件处理函数，后者会把前者覆盖 | 顺序执行                                     | IE9以上：顺序执行；IE8以下：倒叙执行             |
| 兼容      | 全部                              | 标准浏览器                                    | IE内核                              |
| this指向  | 指向触发该事件的元素                      | 指向触发该事件的元素                               | **指向window**                      |
|         |                                 |                                          |                                   |

````javascript
封装函数
function bind(obj,evType,evFn) {
    // 给当前的对象 添加一个自定义属性  给当前的自定义属性上挂载 匿名函数  也就是让匿名函数 存到当前对象的属性里面	
	obj.handle = function() {
		evFn.call(obj);
	}
    
	if(obj.addEventListener){
	// 标准浏览器走这个绑定
		obj.addEventListener(evType,evFn,false);
	}else if(obj.attachEvent) {
	//IE6 7 8 走这个绑定方式
		obj.attachEvent("on"+evType,,obj.handle);
	} else {
	// 以上方法都不支持的很老的浏览器 走这个方法
		obj["on"+evType] = evFn;	
	}
}
````

### 18，解绑函数

````javascript
function unbind(obj,evType,evFn) {
	if(obj.removeEventListener) {		                   obj.removeEventListener(evType,evFn,false);
	}else if(obj.detachEvent) {
		obj.detachEvent("on"+evType,evFn);
	}else {
		obj["on"+evType] = null;
	}
}
````





### 19，更改this指向

fn.call()方法，可以更改当前函数内部的this指向；如果不传参，那么他和直接执行韩束一样，如果传参，那么第一个参数，是你需要更改的内部的this指向对象；执行函数的同时，可以把函数内部的this指向更改过来，从第二个参数位置开始往后面写参数

````javascript
function fn(a){
  console.log(a)
  console.log(this)
}
//fn(2)   
`这样调用的时候，打印出来的按顺序是 2,  this指向window`

//fn.call(oBox,2)
`这样调用的时候，打印出来的按顺序是 2，  this指向oBox`
````

### 20，字符串拼接

````javascript
str += '<div class="box" style="left:'+l+'px;top:'+t+'px;background-position:'+ -l+'px '+ -t+'px"></div>'
里面只使用单引号不行，只使用双引号也不行，
````



### 21，事件流

事件流：一个事件发生的时候，要经过三个时间阶段（事件捕获=》事件目标 =》事件冒泡

W3C认为存在事件捕获和事件冒泡；而IE认为没有事件捕获，但是有冒泡事件

obj.addEventListener（‘click’，fn，false）

其中，第三个参数：是否捕获，true捕获，false不捕获（冒泡）

### 22，iframe

### 23，实现跳转

1. window.go();          =>location.href
2. window.forward();    
3. window.back();
4. location.reload();刷新；先从本地缓存获取，如果没有则从服务器获取
   - location.reload(true);跳过当前缓存，重新请求服务器，加载一遍整个页面；ctrl+f5强制刷新