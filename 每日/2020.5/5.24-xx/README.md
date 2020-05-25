# 2020.5.24

## Function

### 函数定义

一种function+函数名 一种将定义变量，指向函数

每个function均为Function的实例，函数名为指向函数对象的指针

```js
var sum = function(m,n){
    return m+n;
}
console.log(sum(1,2));//3
//将anotherSum指向sum,这里sum为指针，而不是函数
var anotherSum = sum;
console.log(sum(3,4));//7
function change(m,n){
    var t;
    t = m;
    m = n;
    n = t;
    console.log(m,n);
}
change(6,7);
```

```js
//sum()通过解释器的函数声明提升，将函数名放在顶部
//sum2是一个变量的初始化，而不是函数声明，所以报错
sum(1,2);
sum2(1,2);
function sum(m,n){
    console.log(m+n);
}
var sum2 = function(m,n){
    console.log(m+n);
}
```



### 函数重载

js函数没有重载

同一函数名函数，后面将覆盖前面

```js
function sum(num){
    return num+10;
}
function sum(num){
    return num+20;
}
console.log(sum(10));//30
```

### 作为值得函数

```js
function add(x){
    return x+10;
}
function sum(add,x){
    return add(x);
}
console.log(sum(add,2));//12
```

### 函数内部属性

#### arguments

arguments为类数组对象，包含函数的所有参数

它包含着一个名为callee属性，该属性是一个指针，指向拥有该arguments对象函数

```js
//阶乘函数
function factorial(num){
    if(num<=1){
        return 1;
    } else{
        //若仍使用factorial,则更改函数指针后，函数不能正常递归
        //return num*factorial(num-1);
        return num*arguments.callee(num-1);
    }
}
var trueFactorial = factorial;
factorial = function(){
    return 0;
}
console.log(trueFactorial(5));
```

> 注意：严格模式下arguments.callee会导致错误

arguments.caller显示函数被谁调用

```js
var a = function(){
    b();
}
var b = function(){
    console.log(arguments.callee.caller);
}
a();//[Function: a]
```

> 注意：严格模式下arguments.callee.caller会导致错误

### 函数属性和方法

#### length

length属性为函数接受参数个数

```js
var sum = function(m,n){
    return m+n;
}
var add = function(num){
    return num+1;
}
var print = function(){
    console.log('hello');
}
console.log(sum.length);//2
console.log(add.length);//1
console.log(print.length);//0
```

# 2020.5.25

## Function

### apply()与call()

apply()与call()为每个Function对象存在的方法

apply()和call()都是用来改变函数内的this指向

apply()第一个参数为运行函数的作用域，第二个参数为参数数组

call()第一个参数为运行函数的作用域，后面多个参数为函数参数

```js
function add(m,n){
    console.log(m+n);
    console.log(this);
}
add(1,2);//3 window
add.apply(add,[1,2]);//3 function:add
add.call(add,1,2);//3 function:add
```

### bind()

bind()改变对象this指向，参数为指向的对象

```js
var say;
window.say = "hello";
var obj = {say:"helloooo"};
function sayHello(){
    console.log(this.say)
}
sayHello();//hello
var sayHello2 = sayHello.bind(obj);
sayHello2();//helloooo
```

> window为浏览器中的对象，node环境中不存在

## 面向对象

### 属性

#### 数据属性

修改属性的默认值，应使用Object.defineProperty()函数

参数为属性所在对象，属性名，一个描述符对象

描述符对象内为configurable(可否通过delete删除属性，可否修改属性,默认为true)、enumerable(可否通过for-in循环属性,默认为true)、writable(可读属性,默认为true)和value(属性值,默认值为undefined)

```js
var person = {};
//person.name属性为只读属性,无法修改
//name属性值为xiaoming
Object.defineProperty(person,'name',{
    writable: false,
    value: 'xiaoming'
})
//name属性值不发生改变
person.name = 'wanggang'
console.log(person.name);//xiaoming
```

#### 访问器属性

访问器属性包含数值，包含一对getter()与setter()函数

读取访问器属性，调用getter()

写入访问器属性，调用setter()

访问器属性四个特性：configurable、enumerable、get(读取函数)、set(写入函数)

访问器属性只能通过Object.defineProperty()函数定义

```js
var book = {
    _year: 2004,
    edition: 1
}
//下划线定义属性，指只能通过对象方法访问属性
Object.defineProperty(book,"year",{
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if(newValue>2004){
            this._year = newValue;
            this.edition +=newValue-2004;
        }
    }
})
book.year = 2005;
console.log(book.edition)//2
```

#### 读取属性

```js
var book = {};
Object.defineProperties(book,{
    _year:{
        value: 2004
    },
    edition: {
        value: 1
    },
    year:{
        get: function(){
            return this._year
        },
        set: function(newValue){
            if(newValue>2004){
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }

    }
})
var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.configurable);//false
console.log(descriptor.value);//2004
```

> Object.defineProperty()如果未设置configurable、enumerable、

> writable特性默认值都为false