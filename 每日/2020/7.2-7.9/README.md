# 2020.7.2
## 函数表达式

函数声明两种方式：

1. 函数声明

```js
//函数声明方式
function 函数名(参数1,参数2,.....){};
```

函数声明涉及到了函数声明提升

```js
//执行代码之前先读取函数声明，这就可以把函数声明放到调用语句之后
say();
function say(){};
```

2. 函数表达式

```js
var 函数名 = function (参数1，参数2....){}
```

```js
//变量提升 在执行say()时，say发生变量提升变为var say 未赋值
say();
var say = function(){};
```

看下例

```js
//表面没有问题，实际上是无效语法 
if(condition){
    function say(){
        console.log('hello');
    }
}else {
    function say(){
        console.log('No');
    }
}
//推荐使用一下函数表达式赋值形式
var say;
if(condition){
    say = function(){
        console.log('hello');
    }
}else {
    say = function(){
        console.log('No');
    }
}
```

### 递归

------

以阶乘为例

```js
//阶乘递归函数
function factorial(num){
    if(num <=1 ){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
```

如果将函数赋值给其他函数，将factorial设置为空

```js
//报错 factorial变为null another无法调用递归中的factorial
var another = factorial;
factorial = null;
console.log(another(4));
```

将递归中的函数名换成arguments.callee，更改为当前执行函数的指针

```js
function factorial(num){
    if(num <=1 ){
        return 1;
    }else{
        //函数指针指向当前执行函数
        return num*arguments.callee(num-1);
    }
}
```

严格模式无法通过脚本访问arguments.callee

所以我们通过函数表达式实现

```js
var factorial = (function f(num){
    if(num <=1 ){
        return 1;
    }else{
        return num*f(num-1);
    }
});

console.log(factorial(4));
```

# 2020.7.4

### 闭包

闭包是指有权访问另一个函数作用域中的变量的函数

## BOM

BOM：浏览器对象模型

BOM的核心对象是window，window为全局对象

```js
//在全局作用域下定义的变量与函数，在window下均可以访问
var age = 17;
function sayAge(){
    console.log(this.age);
}
console.log(window.age);
sayAge();
window.sayAge();
```

delete不可以删除全局变量，但可以删除定义在window上的属性

```js
var age = 20;
window.name = 'wang';
delete window.age;//IE<9抛出错误，其他浏览器返回false
delete window.name; //IE<9抛出错误，其他浏览器返回true
console.log(age);//20
console.log(window.name);//undefined
```

因为var定义的变量值有一个属性**configurable**,它的值为***false***，意为delete操作不可以删除。

将一个未定义的值赋值给另外一个变量，输出这个变量会抛出错误

```js
var newValue = value;
console.log(newValue);//value not defined
```

但是将value设置为window下，则newValue的值为undefined

```js
var newValue = window.value;
console.log(newValue);//undefined
```

window.value相当于查询window下是否存在value这个属性，不会抛出错误

### setTimeout()与setInterval()

setTimeout()函数为每个一个时间段就执行一次，传递两个参数，第一个参数为定时执行方法，第二个参数为执行间隔时间，返回值为数值ID，是计划执行代码的唯一标识

```js
//隔1s仅调用一次
var time = setTimeout(function(){
    console.log('123');
},1000);
//取消超时调用
clearTimeout(time);
```

setInterval()与setTimeout()参数相同，它为间隔调用，每隔一段时间调用一次

```js
//每个1s调用一次
var time = setInterval(function(){
    console.log('123');
},1000);
clearInterval(time);
```

setInterval例：

```js
var num = 0;
var max = 10;
var intervalId = null;
function increamentNumber(){
    num++;
    console.log(num);
    if(num == max){
        clearInterval(intervalId);
        console.log("Done");
    }
}
intervalId = setInterval(increamentNumber,500);
```

setTimeout例：

```js
var num = 0;
var max = 10;
var timeoutId = null;
function increamentNumber(){
    num++;
    console.log(num);
    if(num<max){
        setTimeout(increamentNumber,500);
    }else{
        clearTimeout(timeoutId);
        console.log("Done");
    }
}
timeoutId = setTimeout(increamentNumber,500);
```



> 在使用间歇调用时，最后一次间歇调用可能在前一次间歇调用(setInterval)结束之前启动，所以最好不用间歇调用

### location对象

location对象用途为提供了与当前窗口中加载的文档有关的信息，还可以将url解析为独立片段。

下面给出location对象的所有属性

| 属性名   | 例子                 | 说明                                                         |
| -------- | -------------------- | ------------------------------------------------------------ |
| hash     | "#contents"          | 返回URL的hash(#号后跟零或多个字符)，如果URL中不包含散列，则返回空字符串 |
| host     | "www.xxx.com:8080"   | 返回服务器名称和端口号(若存在)                               |
| href     | "http://www.xxx.com" | 返回不带端口号的服务器名称                                   |
| pathname | "/xx/"               | 返回URL的目录和(或)文件名                                    |
| port     | "8080"               | 返回URL中指定的端口号。如果URL中不包含端口号，则这个属性返回空字符串 |
| protocal | “http:”              | 返回页面使用的协议。通常时http:或https                       |
| search   | "?val=xxx"           | 返回URL的查询字符串。这个字符串以问号开头                    |

**查询字符串参数**

```js
function getQueryStringArgs(){
    //去除？
    var qs = (location.search.length>0?location.search.substring(1):"");
    args = {},
        //以&分割为多个数组
        items = qs.length?qs.split("&"):[],item = 0,name = null,value = null;
    //循环数组，用等号分割
    for(var i=0;i<items.length;i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if(name.length){
            args[name] = value;
        }
    }
    return args;
}
var args = getQueryStringArgs();
console.log(args);//例?q=1&p=2 结果：{q: "1", p: "2"}
```

location.assign()方法可以立即代开新的URL并在浏览器历史记录中生成一条记录

将location.href或window.location设置为一个URL也可以调用assign()方法

```js
location.assign('https://www.baidu.com');
window.location('https://www.baidu.com');
location.href('https://www.baidu.com');
```

修改location对象的其他属性也可以更改当前页面的URL

```js
location.hash = '#123';
location.search = '?p=js';
location.hostname = 'xxx.com';
location.pathname = "home";
location.port = 8080;
```

replace()方法：更改URL后不能后退到之前的页面

```js
setTimeout(function(){
    location.replace("https://www.baidu.com");
},1000)
```

reload()方法：重新加载页面

```js
//有参数并且为true，强行从服务器重新加载
location.reload(true);
//不带参数，页面从缓存中重新加载
location.reload();
```

### navigator对象

mavigator对象的属性常用于检查网页浏览器的类型

如：appCodeName：浏览器的名称

appName：完整的浏览器名称

language：浏览器的主语言 。。。。属性

#### 检测插件

检测浏览器中是否安装了特定的插件。

对于非IE来说，可以使用navigator.plugins数组来检查。

# 2020.7.6

## DOM

DOM：文档对象模型，是针对HTML与XML文档的一个API

DOM描述的是一个层次化的节点树，允许添加移除与修改。

> IE的DOM实际是以COM对象的形式实现的。

