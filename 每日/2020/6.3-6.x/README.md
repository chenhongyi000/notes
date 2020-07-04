# 2020.6.3

## JS

### 继承

#### 借用构造函数

在子类构造函数内部调用父类构造函数

```js
function SuperType(){
    this.colors = ["red","blue","green"];
}
function SubType(){
    //继承SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);//red,blue,green,black

var instance2 = new SubType();
console.log(instance2.colors);//red,blue,green
```

传递参数

```js
function SuperType(val){
    this.name  = val;
}
function SubType(){
    SuperType.call(this,"xiaoming");
    this.age = 18;
}
var instance1 = new SubType();
console.log(instance1.name);//xiaoming
console.log(instance1.age);//18
```

#### 组合继承

原型链+借用构造函数

```js
function SuperType(name){
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
}
function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
//SubType原型指向Supertype实例
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
    console.log(this.age);
}
var instance1 = new SubType("xiaoming",18);
instance1.colors.push("black");
console.log(instance1.colors);//[ 'red', 'blue', 'green', 'black' ]

var instance2 = new SubType("xiaohong",17);
console.log(instance2.colors);//[ 'red', 'blue', 'green' ]
instance2.sayName();//xiaohong
instance2.sayAge();//17
```

#### 原型式继承

ES5通过Object.create()方法来