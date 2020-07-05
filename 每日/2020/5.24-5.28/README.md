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

# 2020.5.26

## 面向对象

### 构造函数

```js
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    }

}
var person1 = new Person('小明',16,'程序员');
var person2 = new Person('小红',17,'老师');
person1.sayName();//小明
console.log(person2.age);//17
```

> 构造函数均以大写字母开头，非构造函数以小写字母开头
>
> 创建实例必须用new指令

创建对象后，每个对象都具有constructor(构造函数)属性

```js
console.log(person1.constructor);//Person 指向Person类
console.log(person2.constructor);//Person
console.log(person1.constructor == Person);//true
```

将构造函数作为普通函数调用

```js
//在浏览器中执行
Person('xiaoming',18,'程序员');//添加到window
window.sayName();//小明 
```

不同势力下的同名函数是不相等的

```js
console.log(person1.sayName==person2.sayName);//false
```

### 原型模式

#### 创建原型对象

prototype(原型)属性存在于每一个函数，通过调用构造函数来创建对象的实例的原型对象，可以让实例对象共享它所包含的属性和方法

```js
function Person(){

}
Person.prototype.name = 'xiaoming';
Person.prototype.age = 16;
Person.prototype.sayName = function(){
    console.log(this.name);
}
var person = new Person();
console.log(person.age);//16
person.sayName();//xiaoming
```

```js
var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName == person2.sayName);//ture
```

![](F:\notes\每日\2020.5\5.24-xx\images\prototype.png)

调用原型对象的isPrototypeOf()函数来判断实例对象下的[[Prototype]]指针是否指向Person.prototype

ES5中的Object.getPrototypeOf()方法可以直接返回实例对象的[[Prototype]]值

Object.getPrototypeOf()函数可以方便的取到实例对象的原型

```js
console.log(Person.prototype.isPrototypeOf(person1));//ture
console.log(Object.getPrototypeOf(person1)==Person.prototype);//true
```

对象实例存在属性将不会继续访问原型，阻碍了访问原型属性

```js
person1.name = 'wang';
console.log(person1.name);//实例属性 wang
console.log(person2.name);//原型属性 xiaoming
```

可以通过delete操作符来完全删除实例属性，恢复对原型name属性链接

```js
delete person1.name;
console.log(person1.name);//xiaoming
```

#### 判断是否存在于实例

hasOwnProperty()函数可以判断属性是否存在于实例中，存在实例中为true(此方法从Object继承)

```js
function Person(){};
Person.prototype.name = '小明';
Person.prototype.age = 18;
var person1 = new Person();
var person2 = new Person();
person1.name = '小王';
console.log(person1.hasOwnProperty("name"));//true
console.log(person2.hasOwnProperty("name"));//false
```

in操作符可以判断属性是否存在于对象中，不论实例或原型

```js
function Person(){};
Person.prototype.name = '小明';
Person.prototype.age = 18;
var person1 = new Person();
var person2 = new Person();
person1.name = '小王';
console.log("name" in person1);//true
console.log("name" in person2);//true
delete person1.name;
console.log("name" in person1);//true
```

#### 获取实例属性名

Object.keys()函数可以将对象中的可枚举属性作为字符串数组返回，参数为对象

constructor与prototype的enumerable特性为false

```js
function Person(){};
Person.prototype.name = '小明';
Person.prototype.age = 18;
var person1 = new Person();
console.log(Object.keys(Person.prototype));//[ 'name', 'age' ]
person1.name = '小王';
console.log(Object.keys(person1));;//[ 'name' ]
```

可调用Object.getOwnPropertyNames()函数来获取所有实例属性，无论它是否可枚举

```js
console.log(Object.getOwnPropertyNames(Person.prototype));//[ 'constructor', 'name', 'age' ]
```

#### 原型的封装

```js
function Person(){};
Person.prototype = {
    name: 'wang',
    age: 20,
    job: 'teacher',
    sayName:function(){
        console.log(this.name);
    }
}
var person = new Person();
console.log(person.constructor);//[Function: Object]
```

将原型改为这种写法，对默认的原型对象重新定义，更改了constructor,

使它指向Object构造函数

我们将constructor设置为适当的值

```js
function Person(){};
Person.prototype = {
    constructor: Person,
    name: 'wang',
    age: 20,
    job: 'teacher',
    sayName:function(){
        console.log(this.name);
    }
}
```

设置之后，可以访问正常的constructor值，但是这样设置会导致constructor的enumerable特性值为true，默认情况下，原生的constructor是不可枚举的

可以通过Object.defineProperty()来重新定义constructor属性

```js
function Person(){};
Person.prototype = {
    name: 'wang',
    age: 20,
    job: 'teacher',
    sayName:function(){
        console.log(this.name);
    }
}
//重设构造函数，只适合支持ES5的浏览器
Object.defineProperty(Person.prototype,"constructor",{
    enumerable: false,
    value: Person
})
var person = new Person();
console.log(person.constructor);//[Function: Object]
```

# 2020.5.27

## 面向对象

### 原型模式

#### 原型动态性

重写原型后，改变了构造函数与最初原型的关系

构造函数原型指向新原型

实例化对象指向原型

```js
function Person(){};
var friend = new Person();
Person.prototype = {
    constructor: Person,
    name: 'xiaoming',
    age: 17,
    sayName: function(){
        console.log(this.name)
    }
}
friend.sayName();//抛出错误 
```

#### 原型共享

原型中所有属性被大多数实例共享

```js
function Person(){}
Person.prototype = {
    constructor: Person,
    name: 'xiaoming',
    age: 17,
    friends: ['xiaohong','xiaowang'],
    sayName: function(){
        console.log(this.name);
    }
}
var person1 = new Person();
var person2 = new Person();
person1.friends.push('lihua');
console.log(person1.friends);//[ 'xiaohong', 'xiaowang', 'lihua' ]
console.log(person2.friends);//[ 'xiaohong', 'xiaowang', 'lihua' ]
console.log(person1.friends === person2.friends);//true
```

friends数组存在于Person.prototype中，也能通过person2来查看

### 组合构造函数与原型模式

构造函数定义实例属性

原型模式定义方法与共享属性

```js
function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby","Court"];
};
Person.prototype = {
    constructor: Person,
    sayName: function(){
        console.log(this.name);
    }
}
var person1 = new Person("xiaoming",19,"teacher");
var person2 = new Person("xiaohong",26,"Doctor");
person1.friends.push("xiaowang");
console.log(person1.friends);//[ 'Shelby', 'Court', 'xiaowang' ]
console.log(person2.friends);//[ 'Shelby', 'Court' ]
console.log(person1.friends === person2.friends);//false
console.log(person1.sayName === person2.sayName);//true
```

# 2020.5.28

## 面向对象

### 继承

#### 原型链

```js
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
}
function SubType(){
    this.subproperty = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function(){
    return this.subproperty;
}
var instance = new SubType();
console.log(instance.getSuperValue());
```

![](F:\notes\每日\2020.5\5.24-xx\images\原型链.png)

